// script.js

// FILE LIST GENERATION
function generateFilesHTML() {
  const fileId = "1F7Imkz5iE5eOIWfJUsOpvV9ijQUc32-J";
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  const previewUrl  = `https://drive.google.com/file/d/${fileId}/preview`;
  let html = "";
  for (let i = 1; i <= 5; i++) {
    html += `
      <li class="list-group-item" data-file-name="File ${i}" data-file-tags="template, form, sample">
        <div class="d-flex justify-content-start">
          <button class="btn btn-sm btn-info mr-2" onclick="previewFile('${previewUrl}')">Preview</button>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-2">
          <span>File ${i}</span>
          <span>
            <a href="${downloadUrl}" class="btn btn-sm btn-success" target="_blank">Download</a>
            <button class="btn btn-sm btn-secondary" onclick="printFile('${previewUrl}')">Print</button>
          </span>
        </div>
      </li>
    `;
  }
  return html;
}

// Build file data for Fuse.js fuzzy search
function buildFilesData() {
  let filesData = [];
  $('#foldersAccordion li.list-group-item').each(function() {
    let fileName = $(this).attr('data-file-name');
    let fileTags = $(this).attr('data-file-tags');
    filesData.push({ 
      name: fileName, 
      tags: fileTags, 
      element: $(this).clone() 
    });
  });
  return filesData;
}

var fuse; // Fuse search instance

$(document).ready(function() {
  // Inject file items into each folder
  $('#folder-avkaash-list').html(generateFilesHTML());
  $('#folder-medical-list').html(generateFilesHTML());
  $('#folder-vivechak-list').html(generateFilesHTML());
  $('#folder-thana-list').html(generateFilesHTML());
  $('#folder-notice-list').html(generateFilesHTML());
  
  // Build the datalist for search suggestions
  let suggestionsSet = new Set();
  $('#categorySection li.list-group-item').each(function() {
    let name = $(this).attr('data-file-name');
    if (name) suggestionsSet.add(name);
    let tags = $(this).attr('data-file-tags');
    if (tags) {
      tags.split(',').forEach(tag => suggestionsSet.add(tag.trim()));
    }
  });
  let suggestionsList = Array.from(suggestionsSet).filter(s => s && s.length);
  let optionsHTML = suggestionsList.map(s => `<option value="${s}">`).join('');
  $('#fileSuggestions').html(optionsHTML);
  
  // Build filesData and initialize Fuse for fuzzy search
  let filesData = buildFilesData();
  let fuseOptions = {
    keys: ["name", "tags"],
    threshold: 0.4
  };
  fuse = new Fuse(filesData, fuseOptions);
  
  // Handle search input for suggestions and clear icon
  $("#searchInput").on("input", function() {
    var query = $(this).val();
    if (query.length > 0) {
      $(".clear-search").show();
      var results = fuse.search(query);
      var suggestions = results.map(result => result.item.name);
      var optionsHTML = suggestions.map(s => `<option value="${s}">`).join('');
      $("#fileSuggestions").html(optionsHTML);
    } else {
      $(".clear-search").hide();
      $("#fileSuggestions").empty();
    }
  });
  
  // Dark/Light Mode Toggle
  $("#darkModeSwitch").on("change", function() {
    var isDark = $(this).prop("checked");
    $("body").toggleClass("dark-mode", isDark);
    $(".modern-navbar").toggleClass("dark-mode", isDark);
    $(".material-card").toggleClass("dark-mode", isDark);
  });
  
  // Ensure that only one folder is expanded at a time
  $('.folder-btn').on('click', function() {
    $('.accordion .collapse').not($(this).attr('data-target')).collapse('hide');
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

// NAVIGATION
function showSection(section) {
  $('#homeSection, #offersSection, #categorySection').hide();
  if (section === 'home') {
    $('#homeSection').show();
  } else if (section === 'offers') {
    $('#offersSection').show();
  } else if (section === 'category') {
    $('#categorySection').show();
    $('#foldersAccordion').show();
    $('#searchResults').hide();
  }
}

// SEARCH FUNCTIONALITY
function searchFunction(e) {
  e.preventDefault();
  showSection('category');
  var query = $("#searchInput").val();
  var results = fuse.search(query);
  $("#searchResultsList").empty();
  if (results.length > 0) {
    results.forEach(function(result) {
      $("#searchResultsList").append(result.item.element);
    });
    $("#foldersAccordion").hide();
    $("#searchResults").show();
  } else {
    alert("No matching files found.");
    $("#foldersAccordion").show();
    $("#searchResults").hide();
  }
}

function resetSearch() {
  $("#searchInput").val("");
  $(".clear-search").hide();
  $("#searchResultsList").empty();
  $("#searchResults").hide();
  $("#foldersAccordion").show();
}

// AGE CALCULATOR
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
    <p>Age: ${years} years, ${months} months, ${days} days</p>
    <p>Total Days: ${totalDays}</p>
  `;
}

// IPC/CrPC Converter Functions

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
