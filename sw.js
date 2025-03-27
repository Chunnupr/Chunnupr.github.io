const CACHE_NAME = "police-files-cache-v3"; // Bumped version
const TWITTER_CACHE = "twitter-cache-v1";

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
  const cacheWhitelist = [CACHE_NAME, TWITTER_CACHE];
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

  // Handle Twitter content differently
  if (url.hostname.includes('twitter.com') || url.hostname.includes('twimg.com')) {
    event.respondWith(
      caches.open(TWITTER_CACHE).then(cache => {
        return cache.match(event.request).then(cachedResponse => {
          // Return cached response if available
          if (cachedResponse) {
            // Fetch new version in background
            fetch(event.request).then(response => {
              cache.put(event.request, response.clone());
            }).catch(() => {/* Ignore errors */});
            return cachedResponse;
          }

          // If not in cache, fetch from network
          return fetch(event.request).then(response => {
            cache.put(event.request, response.clone());
            return response;
          });
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
