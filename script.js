/* Helper: Returns HTML snippet for a single file entry */
function getFileHTML(index) {
  const fileId = "1F7Imkz5iE5eOIWfJUsOpvV9ijQUc32-J";
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  const previewUrl  = `https://drive.google.com/file/d/${fileId}/preview`;
  return `
    <li class="list-group-item" data-file-name="File ${index}" data-file-tags="template, form, sample">
      <div class="d-flex justify-content-start">
        <button class="btn btn-sm btn-info mr-2" onclick="previewFile('${previewUrl}')">Preview</button>
      </div>
      <div class="d-flex justify-content-between align-items-center mt-2">
        <span>File ${index}</span>
        <span>
          <a href="${downloadUrl}" class="btn btn-sm btn-success" target="_blank">Download</a>
          <button class="btn btn-sm btn-secondary" onclick="printFile('${previewUrl}')">Print</button>
        </span>
      </div>
    </li>
  `;
}

/* FILE LIST GENERATION: Returns HTML for all 5 files */
function generateFilesHTML() {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    html += getFileHTML(i);
  }
  return html;
}

/* Build file data for Fuse.js fuzzy search */
function buildFilesData() {
  let filesData = [];
  for (let i = 1; i <= 5; i++) {
    filesData.push({ 
      name: `File ${i}`, 
      tags: "template, form, sample", 
      element: getFileHTML(i)
    });
  }
  return filesData;
}

var fuse; // Fuse search instance

$(document).ready(function() {
  // Build the datalist for search suggestions from static file data.
  let filesData = buildFilesData();
  let suggestionsSet = new Set();
  filesData.forEach(item => {
    suggestionsSet.add(item.name);
  });
  let suggestionsList = Array.from(suggestionsSet).filter(s => s && s.length);
  let optionsHTML = suggestionsList.map(s => `<option value="${s}">`).join('');
  $('#fileSuggestions').html(optionsHTML);
  
  // Initialize Fuse with the static files data.
  let fuseOptions = {
    keys: ["name", "tags"],
    threshold: 0.4
  };
  fuse = new Fuse(filesData, fuseOptions);
  
  // Search input suggestions
  $("#searchInput").on("input", function() {
    var query = $(this).val();
    if (query.length > 0) {
      $("#clearSearchIcon").show();
      var results = fuse.search(query);
      var suggestions = results.map(result => result.item.name);
      var optionsHTML = suggestions.map(s => `<option value="${s}">`).join('');
      $("#fileSuggestions").html(optionsHTML);
    } else {
      $("#clearSearchIcon").hide();
      $("#fileSuggestions").empty();
    }
  });
  
  // Initialize Flatpickr for the Age Calculator inputs
  flatpickr("#dobInput", { 
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
    allowInput: false
  });
  flatpickr("#refDateInput", { 
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
    allowInput: false
  });
});

/* NAVIGATION */
function showSection(section) {
  $('#homeSection, #offersSection, #categorySection').hide();
  if (section === 'home') {
    $('#homeSection').show();
  } else if (section === 'offers') {
    $('#offersSection').show();
  } else if (section === 'category') {
    $('#categorySection').show();
    $('#folderListView').show();
    $('#folderDetailView').hide();
  }
  $("#searchResultsList").empty();
  $("#searchResults").hide();
}

/* SEARCH FUNCTIONALITY */
function searchFunction(e) {
  e.preventDefault();
  showSection('category');
  var query = $("#searchInput").val();
  var results = fuse.search(query);
  $("#searchResultsList").empty();
  if (results.length > 0) {
    results.forEach(function(result) {
      // Use the full file HTML (which includes download/print options)
      $("#searchResultsList").append(result.item.element);
    });
    $("#folderListView").hide();
    $("#searchResults").show();
  } else {
    alert("No matching files found.");
    $("#folderListView").show();
    $("#searchResults").hide();
  }
}
function resetSearch() {
  $("#searchInput").val("");
  $("#clearSearchIcon").hide();
  $("#searchResultsList").empty();
  $("#searchResults").hide();
  $("#folderListView").show();
}

/* AGE CALCULATOR */
function calculateAge() {
  const dobValue = document.getElementById("dobInput").value;
  let refValue = document.getElementById("refDateInput").value;
  if (!dobValue) {
    alert("Please select your date of birth.");
    return;
  }
  const dob = new Date(dobValue);
  const refDate = refValue ? new Date(refValue) : new Date();
  
  let years = refDate.getFullYear() - dob.getFullYear();
  let months = refDate.getMonth() - dob.getMonth();
  let days = refDate.getDate() - dob.getDate();
  
  if (days < 0) {
    months--;
    const prevMonth = new Date(refDate.getFullYear(), refDate.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  const totalDays = Math.floor((refDate - dob) / (1000 * 60 * 60 * 24));
  
  document.getElementById("ageResult").innerHTML = `
    Age: ${years} years, ${months} months, ${days} days | Total Days: ${totalDays}
  `;
}

/* IPC/CrPC Converter Functions */
async function fetchIPCtoBNSData() {
  const sheetUrl = "YOUR_SHEET_LINK";
  try {
    const response = await fetch(sheetUrl);
    const data = await response.text();
    const rows = data.split("\n").map(row => row.split(","));
    let ipcToBnsMap = {};
    rows.slice(1).forEach(row => {
      let ipc = row[0].trim();
      let bns = row[1] ? row[1].trim() : "";
      if (ipc && bns) {
        ipcToBnsMap[ipc] = bns;
      }
    });
    return ipcToBnsMap;
  } catch (error) {
    console.error("Error fetching IPC-to-BNS data:", error);
    return {};
  }
}
async function convertIPCtoBNS() {
  const inputIPC = document.getElementById("ipcInput").value.trim();
  const resultField = document.getElementById("ipcResult");
  if (!inputIPC) {
    resultField.innerText = "Please enter an IPC section.";
    return;
  }
  const ipcData = await fetchIPCtoBNSData();
  const bnsEquivalent = ipcData[inputIPC];
  if (bnsEquivalent) {
    resultField.innerText = `Equivalent BNS Section: ${bnsEquivalent}`;
  } else {
    resultField.innerText = "No matching BNS section found.";
  }
}
function convertCrPcToBNSS() {
  let input = parseFloat(document.getElementById('crpcInput').value);
  if (isNaN(input)) {
    document.getElementById('crpcResult').innerText = "Invalid input";
    return;
  }
  let conversionFactor = 0.75;
  let result = input * conversionFactor;
  document.getElementById('crpcResult').innerText = result.toFixed(2);
}
async function updateGoldPrices() {
  const apiKey = 'YOUR_API_KEY';
  try {
    const response = await fetch(`https://metals-api.com/api/latest?access_key=${apiKey}&base=USD&symbols=XAU`);
    const data = await response.json();
    if (data.success) {
      const goldPriceUSD = data.rates.XAU;
      const usdToInr = 82;
      const goldPriceInr = (goldPriceUSD * usdToInr / 31.1035).toFixed(2);
      const lucknowPrice = goldPriceInr;
      const delhiPrice = (parseFloat(goldPriceInr) + 50).toFixed(2);
      const patnaPrice = (parseFloat(goldPriceInr) - 50).toFixed(2);
      $('#goldLucknow').text('₹' + lucknowPrice);
      $('#goldDelhi').text('₹' + delhiPrice);
      $('#goldPatna').text('₹' + patnaPrice);
    } else {
      console.error('API Error:', data);
      $('#goldLucknow, #goldDelhi, #goldPatna').text('Error fetching price');
    }
  } catch (error) {
    console.error('Error fetching gold prices:', error);
    $('#goldLucknow, #goldDelhi, #goldPatna').text('Error fetching price');
  }
}
updateGoldPrices();
setInterval(updateGoldPrices, 60000);
function previewFile(url) {
  $('#filePreviewFrame').attr('src', url);
  $('#filePreviewModal').modal('show');
}
function printFile(url) {
  let printWindow = window.open(url, '_blank');
  printWindow.onload = function() {
    printWindow.print();
  };
}

/* Folder View: Clicking a folder shows detail view */
$(document).on('click', '.folder-card', function() {
  var folderId = $(this).data('folder-id');
  var folderNames = {
    'avkaash': 'अवकाश',
    'medical': 'मेडिकल',
    'vivechak': 'विवेचक फाईल',
    'thana': 'थाना कार्यालय',
    'notice': 'नोटिस'
  };
  var folderName = folderNames[folderId] || '';
  $('#folderTitle').text(folderName);
  $('#folderDetailList').html(generateFilesHTML());
  $('#folderListView').hide();
  $('#folderDetailView').show();
});
$('#backToFolders').on('click', function() {
  $('#folderDetailView').hide();
  $('#folderListView').show();
});

/* Dark Mode Toggle */
$('#darkModeToggle').on('click', function() {
  $('body').toggleClass('dark-mode');
});
