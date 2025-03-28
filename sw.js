const CACHE_NAME = "police-files-cache-v4";
const TWITTER_CACHE = "twitter-cache-v2";
const PDF_CACHE = "pdf-cache-v1";

const urlsToCache = [
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache:', CACHE_NAME);
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME, TWITTER_CACHE, PDF_CACHE];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Handle PDF files from Google Drive
  if (url.hostname.includes('drive.google.com') && url.pathname.includes('uc')) {
    event.respondWith(
      caches.open(PDF_CACHE).then(cache => {
        return cache.match(event.request).then(cachedResponse => {
          // Return cached PDF if available and less than 7 days old
          if (cachedResponse) {
            const cachedDate = new Date(cachedResponse.headers.get('date'));
            const now = new Date();
            const daysOld = (now - cachedDate) / (1000 * 60 * 60 * 24);
            
            if (daysOld < 7) {
              return cachedResponse;
            }
          }

          // Fetch new PDF
          return fetch(event.request).then(response => {
            if (response.ok) {
              cache.put(event.request, response.clone());
            }
            return response;
          }).catch(error => {
            // Return cached version if network fetch fails
            return cachedResponse || Promise.reject(error);
          });
        });
      })
    );
  } 
  // Handle Twitter content
  else if (url.hostname.includes('twitter.com') || url.hostname.includes('twimg.com')) {
    event.respondWith(
      caches.open(TWITTER_CACHE).then(cache => {
        return fetch(event.request).then(response => {
          cache.put(event.request, response.clone());
          return response;
        }).catch(() => {
          return cache.match(event.request);
        });
      })
    );
  } else if (event.request.url.endsWith('/index.html')) {
    // Stale-while-revalidate for index.html
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return cache.match(event.request).then(cachedResponse => {
          const fetchPromise = fetch(event.request).then(networkResponse => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
          return cachedResponse || fetchPromise;
        });
      })
    );
  } else {
    // Cache-first for other resources
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  }
});

// Add periodic cache cleanup
self.addEventListener('periodicsync', event => {
  if (event.tag === 'cache-cleanup') {
    event.waitUntil(
      Promise.all([
        cleanupCache(PDF_CACHE, 7), // Clean PDFs older than 7 days
        cleanupCache(TWITTER_CACHE, 1) // Clean Twitter cache older than 1 day
      ])
    );
  }
});

function cleanupCache(cacheName, maxAgeDays) {
  return caches.open(cacheName).then(cache => {
    return cache.keys().then(requests => {
      return Promise.all(
        requests.map(request => {
          return cache.match(request).then(response => {
            if (response) {
              const date = new Date(response.headers.get('date'));
              const now = new Date();
              const daysOld = (now - date) / (1000 * 60 * 60 * 24);
              if (daysOld > maxAgeDays) {
                return cache.delete(request);
              }
            }
          });
        })
      );
    });
  });
}
