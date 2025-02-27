<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <!-- Keep the site mobile-friendly -->
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Police Files</title>
  
  <!-- Google Fonts for a modern look -->
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
  
  <!-- Bootstrap CSS for grid and responsiveness -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
  
  <!-- Font Awesome for icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  
  <!-- Flatpickr CSS for date picker -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
  
  <!-- Custom CSS for the modern/material design -->
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <!-- Premium Header with Title, Search Bar, and Dark Mode Toggle -->
  <header class="site-header">
    <div class="container">
      <div class="header-content">
        <h1 class="site-title">Police Files</h1>
        <!-- Modern Material Search Bar placed between title and dark mode toggle -->
        <div class="header-search">
          <form class="form-inline modern-search" onsubmit="searchFunction(event)">
            <div class="search-input-wrapper">
              <input class="form-control search-input" type="search" placeholder="Search files" 
                     aria-label="Search" id="searchInput" list="fileSuggestions">
              <!-- Only one custom clear/reset icon -->
              <span id="clearSearchIcon" class="clear-search" onclick="resetSearch()">&times;</span>
            </div>
            <datalist id="fileSuggestions"></datalist>
            <button class="btn modern-search-btn" type="submit">Search</button>
          </form>
        </div>
        <button id="darkModeToggle" class="dark-mode-btn" aria-label="Toggle dark mode">
          <i class="fas fa-moon"></i>
        </button>
      </div>
    </div>
  </header>
  
  <!-- Content Sections -->
  <div class="container mt-4 content-area">
    <!-- Home Section: Three Converters in a Single Row -->
    <div id="homeSection">
      <div class="converter-container">
        <div class="row converter-row">
          <!-- IPC to BNS Converter -->
          <div class="col-md-4 converter-section">
            <div class="converter-box">
              <h4>IPC to BNS Converter</h4>
              <div class="form-group">
                <input type="text" class="form-control" id="ipcInput" placeholder="Enter IPC value">
              </div>
              <button class="btn material-btn" onclick="convertIPCtoBNS()">Convert</button>
              <div class="result mt-2"><strong>Result:</strong> <span id="ipcResult"></span></div>
              <p class="small mt-1">
                (Based on data from: 
                <a href="https://bprd.nic.in/uploads/pdf/COMPARISON%20SUMMARY%20BNS%20to%20IPC%20.pdf" target="_blank">
                  BNS to IPC PDF
                </a>)
              </p>
            </div>
          </div>
          <!-- CrPC to BNSS Converter -->
          <div class="col-md-4 converter-section">
            <div class="converter-box">
              <h4>CrPC to BNSS Converter</h4>
              <div class="form-group">
                <input type="text" class="form-control" id="crpcInput" placeholder="Enter CrPc value">
              </div>
              <button class="btn material-btn" onclick="convertCrPcToBNSS()">Convert</button>
              <div class="result mt-2"><strong>Result:</strong> <span id="crpcResult"></span></div>
              <p class="small mt-1">
                (Based on data from: 
                <a href="https://bprd.nic.in/uploads/pdf/Comparison%20summary%20BNSS%20to%20CrPC.pdf" target="_blank">
                  BNSS to CrPC PDF
                </a>)
              </p>
            </div>
          </div>
          <!-- Age Calculator -->
          <div class="col-md-4 converter-section">
            <div class="converter-box age-calculator">
              <h4>Age Calculator</h4>
              <div class="row">
                <div class="col-6">
                  <div class="form-group">
                    <label for="dobInput">Date of Birth</label>
                    <div class="date-input-wrapper">
                      <input type="text" class="form-control" id="dobInput" placeholder="Select date" readonly>
                      <i class="fas fa-calendar-alt date-icon"></i>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label for="refDateInput">As of</label>
                    <div class="date-input-wrapper">
                      <input type="text" class="form-control" id="refDateInput" placeholder="Select date" readonly>
                      <i class="fas fa-calendar-alt date-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
              <button class="btn material-btn" onclick="calculateAge()">Calculate Age</button>
              <div id="ageResult" class="result mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Offers Section (Gold Prices) -->
    <div id="offersSection" style="display:none;">
      <div class="row">
        <!-- Lucknow Gold Price -->
        <div class="col-md-4">
          <div class="card material-card mb-3">
            <div class="card-body">
              <h5 class="card-title">Lucknow Gold Price</h5>
              <p class="card-text"><span id="goldLucknow">Loading...</span></p>
            </div>
          </div>
        </div>
        <!-- Delhi Gold Price -->
        <div class="col-md-4">
          <div class="card material-card mb-3">
            <div class="card-body">
              <h5 class="card-title">Delhi Gold Price</h5>
              <p class="card-text"><span id="goldDelhi">Loading...</span></p>
            </div>
          </div>
        </div>
        <!-- Patna Gold Price -->
        <div class="col-md-4">
          <div class="card material-card mb-3">
            <div class="card-body">
              <h5 class="card-title">Patna Gold Price</h5>
              <p class="card-text"><span id="goldPatna">Loading...</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Category Section (Folders & Search Results) -->
    <div id="categorySection" style="display:none;">
      <div class="folders-container">
        <!-- Search Results Container -->
        <div id="searchResults" style="display:none;">
          <h4>Search Results:</h4>
          <ul class="list-group" id="searchResultsList"></ul>
        </div>
        <!-- Folder List View -->
        <div id="folderListView">
          <div class="row">
            <!-- Folder: अवकाश -->
            <div class="col-md-6 col-lg-4">
              <div class="card material-card folder-card" data-folder-id="avkaash">
                <div class="card-body">
                  <i class="fas fa-folder"></i> अवकाश
                </div>
              </div>
            </div>
            <!-- Folder: मेडिकल -->
            <div class="col-md-6 col-lg-4">
              <div class="card material-card folder-card" data-folder-id="medical">
                <div class="card-body">
                  <i class="fas fa-folder"></i> मेडिकल
                </div>
              </div>
            </div>
            <!-- Folder: विवेचक फाईल -->
            <div class="col-md-6 col-lg-4">
              <div class="card material-card folder-card" data-folder-id="vivechak">
                <div class="card-body">
                  <i class="fas fa-folder"></i> विवेचक फाईल
                </div>
              </div>
            </div>
            <!-- Folder: थाना कार्यालय -->
            <div class="col-md-6 col-lg-4">
              <div class="card material-card folder-card" data-folder-id="thana">
                <div class="card-body">
                  <i class="fas fa-folder"></i> थाना कार्यालय
                </div>
              </div>
            </div>
            <!-- Folder: नोटिस -->
            <div class="col-md-6 col-lg-4">
              <div class="card material-card folder-card" data-folder-id="notice">
                <div class="card-body">
                  <i class="fas fa-folder"></i> नोटिस
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Folder Detail View -->
        <div id="folderDetailView" style="display:none;">
          <button class="btn btn-secondary mb-2" id="backToFolders">
            <i class="fas fa-arrow-left"></i> Back
          </button>
          <h3 id="folderTitle"></h3>
          <ul class="list-group" id="folderDetailList"></ul>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile Bottom Navigation -->
  <nav class="mobile-bottom-nav">
    <button class="mobile-nav-btn" onclick="showSection('home')">
      <i class="fas fa-home"></i><span>Home</span>
    </button>
    <button class="mobile-nav-btn" onclick="showSection('category')">
      <i class="fas fa-folder"></i><span>Category</span>
    </button>
    <button class="mobile-nav-btn" onclick="showSection('offers')">
      <i class="fas fa-tags"></i><span>Offers</span>
    </button>
  </nav>

  <!-- Floating WhatsApp Button -->
  <a href="https://wa.me/919504875076?text=Came%20here%20From%20Police%20Files" target="_blank" class="whatsapp-float">
    Any Issue?
  </a>

  <!-- Modal for Document Preview -->
  <div class="modal fade" id="filePreviewModal" tabindex="-1" role="dialog" 
       aria-labelledby="filePreviewModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content material-card">
        <div class="modal-header">
          <h5 class="modal-title" id="filePreviewModalLabel">File Preview</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"><i class="fas fa-times"></i></span>
          </button>
        </div>
        <div class="modal-body">
          <iframe id="filePreviewFrame" class="modal-iframe"></iframe>
        </div>
      </div>
    </div>
  </div>

  <!-- External Scripts -->
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/fuse.js@6.6.2"></script>
  <!-- Flatpickr for improved date inputs -->
  <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
  <!-- Custom JS -->
  <script src="script.js"></script>
</body>
</html>
