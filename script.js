// Helper function: Given a Google Drive download URL, derive its preview URL.
function getPreviewUrl(downloadUrl) {
  try {
    let urlObj = new URL(downloadUrl);
    let fileId = urlObj.searchParams.get("id");
    if (fileId) {
      return "https://drive.google.com/file/d/" + fileId + "/preview";
    } else {
      return downloadUrl;
    }
  } catch (e) {
    return downloadUrl;
  }
}

/* --- Global Files Data Object --- */
const folderFiles = {
  avkaash: [
    { name: "CL के मध्य में पड़ने वाले अकार्य दिवस", downloadUrl: "https://drive.google.com/uc?export=download&id=1mfqFvXUMO53jhrlnGrnfHrg_n0nmhc3-" },
    { name: "EL NAKSHA", downloadUrl: "https://drive.google.com/uc?export=download&id=1z7ynymsgeGl6M90hrMGkzteyIIfEE_B7" },
    { name: "अवकाश नियम", downloadUrl: "https://drive.google.com/uc?export=download&id=1er1TpVE4aljixxrsG0cC51PwLYzAoLQ3" },
    { name: "night pass नाईट पास", downloadUrl: "https://drive.google.com/uc?export=download&id=1FV6CwT-kOzK-CPbixte5OIG06NWzzaPg" },
    { name: "Awakash yatra suvidha LTC", downloadUrl: "https://drive.google.com/uc?export=download&id=1LSS7zyAKagXK6MOMclZReVHHQhDNEooB" }
  ],
  medical: [
    { name: "चिठ्ठी मजरुबी medical praroop", downloadUrl: "https://drive.google.com/uc?export=download&id=1nNIVikzUJFbblEKKoK2qqmkY0iIE_KD5" },
    { name: "मजरूबी चिट्ठी", downloadUrl: "https://drive.google.com/uc?export=download&id=1sHlAOd8vgUq_9GrQQYgd9ZLM4rTmDXqv" },
    { name: "शव विच्छेदन", downloadUrl: "https://drive.google.com/uc?export=download&id=1nucxqv-G1SBLGro6txd7fVH0ATJBnzlH" },
    { name: "A category medical certificate", downloadUrl: "https://drive.google.com/uc?export=download&id=1P3KZZ5BheQJZ1oy0yJDxIme6_YyGh97U" },
    { name: "A CATEGORY MEDICAL", downloadUrl: "https://drive.google.com/uc?export=download&id=1r3lb21IQYujsVJ2cOqTSk5B6zrW0kU6h" },
    { name: "Cashless Hospital UP-1", downloadUrl: "https://drive.google.com/uc?export=download&id=1K1Br43I5EKqKryR-CypTBB9dCLwYpzU9" },
    { name: "group insurance", downloadUrl: "https://drive.google.com/uc?export=download&id=1l8SdIw2l7jw4FUVzIZdFoutu0uiwPfJg" },
    { name: "medical proforma sg pgi", downloadUrl: "https://drive.google.com/uc?export=download&id=13mhwHQedsRYP8H369AiPCrBAwsSD6iZl" },
    { name: "Medical Reimbursment", downloadUrl: "https://drive.google.com/uc?export=download&id=1qLkufZh8eBE6qIWInDBORdBgh4BRdKlS" }
  ],
  vivechak: [
    { name: "CDR सीडीआर", downloadUrl: "https://drive.google.com/uc?export=download&id=1Wc8JOl4iN0uAvQb1JX0GwBSYvdGRVwG2" },
    { name: "चिठ्ठी मजरुबी medical praroop", downloadUrl: "https://drive.google.com/uc?export=download&id=1nNIVikzUJFbblEKKoK2qqmkY0iIE_KD5" },
    { name: "जीपनेट वाहन चोरी प्रारूप", downloadUrl: "https://drive.google.com/uc?export=download&id=1GPMzdxYnPUp4v9JZnZZv2Q6Fr6VCY7Ri" },
    { name: "तनकी प्रारूप", downloadUrl: "https://drive.google.com/uc?export=download&id=1GbxcOA5B5RzvsokzzsHen_e8JCaGXX_d" },
    { name: "नोटिस अन्तर्गत धारा 149 द0प्र0सं0", downloadUrl: "https://drive.google.com/uc?export=download&id=1TTYTvauhJyMpGu5UCziYwt1YAyUrKKqH" },
    { name: "नोटिस धारा 111 सीआरपीसी", downloadUrl: "https://drive.google.com/uc?export=download&id=1r1HJgFuZmxtOjJhxkrRw2ooHgziHPbM7" },
    { name: "पर्यवेक्षण आख्या", downloadUrl: "https://drive.google.com/uc?export=download&id=1ujY7Sj4mOFDOCyE8aD42Ne2Mxg_sWFf5" },
    { name: "पूछताछ आख्या डोजियर", downloadUrl: "https://drive.google.com/uc?export=download&id=1eJg8rRTmRhOLjQ_NXAMwu4a6aq40lqhR" },
    { name: "बी बारण्ट प्रारूप", downloadUrl: "https://drive.google.com/uc?export=download&id=1ZBfQCBByBbsdvJU_F8I5tIR5kqAyXT28" },
    { name: "बी वारण्ट प्रारूप", downloadUrl: "https://drive.google.com/uc?export=download&id=1Z8mdtdB_-J3fUsRbU0Nw33e0yKnOo55w" },
    { name: "मजरूबी चिट्ठी", downloadUrl: "https://drive.google.com/uc?export=download&id=1sHlAOd8vgUq_9GrQQYgd9ZLM4rTmDXqv" },
    { name: "रिपोर्ट चालानी 290 भादवि", downloadUrl: "https://drive.google.com/uc?export=download&id=1KjsRRAtCi2IXV4aBwGzT80egScKxi9BK" },
    { name: "रिमाण्ड पुलिस प्रपत्र संख्या 202", downloadUrl: "https://drive.google.com/uc?export=download&id=1gnqug3DsZtxr2ucygPrOwL8vi7ynwsZ1" },
    { name: "शव विच्छेदन", downloadUrl: "https://drive.google.com/uc?export=download&id=1nucxqv-G1SBLGro6txd7fVH0ATJBnzlH" },
    { name: "203mv Act", downloadUrl: "https://drive.google.com/uc?export=download&id=1ZXnivlxWhD1bWfUkUYJteq15wSb2Kw1h" },
    { name: "NOTICE 41 170Crpc", downloadUrl: "https://drive.google.com/uc?export=download&id=1-JEORkfcJmCvOFj8ezJQZx9mPAeT_M7C" },
    { name: "NBW, 82 CRPC, 83 CRPC PRAROP", downloadUrl: "https://drive.google.com/uc?export=download&id=1KeR8HczsKL6pAKsHg8SrOdFR3abglljA" },
    { name: "NDPS विधि विज्ञान प्रयोगशाला", downloadUrl: "https://drive.google.com/uc?export=download&id=1V3ZxO8Bmp9nAwCJucPO2mu78gzdF1EGK" },
    { name: "praroop vahan talas वाहन तलाश गस्ती", downloadUrl: "https://drive.google.com/uc?export=download&id=1rme6e_M-YnejMT9ZoTfVTOoJ3YbgrMM8" },
    { name: "prarup 34 police act", downloadUrl: "https://drive.google.com/uc?export=download&id=1LALRBuR3F4vo1uK2-k940VR9ewi8QEg8" },
    { name: "अंगुष्ठ छाप ब्यूरो प्रारुप", downloadUrl: "https://drive.google.com/uc?export=download&id=16MDJm7nqKCKU5wff9scnMq8wAXGam1-v" },
    { name: "जमानत मुचलका", downloadUrl: "https://drive.google.com/uc?export=download&id=1jLFGUB7vIgVTFxsEN8UinYNwsRfRXNpU" },
    { name: "डोजियर प्रारूप", downloadUrl: "https://drive.google.com/uc?export=download&id=1mgNrMUU7L-zvfhoIg8VMhGAlcGm5vukt" },
    { name: "नया प्रारूप जाँच प्रार्थना पत्र", downloadUrl: "https://drive.google.com/uc?export=download&id=1XRgFPnuBng1M_WhAGIh70X7mdlTxErd0" },
    { name: "पुलिस कार्मिक का विवरण", downloadUrl: "https://drive.google.com/uc?export=download&id=1kFAfncMgCuU2xfu9bp77fDDr9TPG0IvV" },
    { name: "पुलिस शब्दावली", downloadUrl: "https://drive.google.com/uc?export=download&id=1tljLnh0ZTSNdO4FfH87R5zHCtYiQRhV4" },
    { name: "बीट बुक", downloadUrl: "https://drive.google.com/uc?export=download&id=1mcvlOujvuj9to0yVYz4yY3qutQmspcur" },
    { name: "यात्रा दैनिक भत्ता आदेश", downloadUrl: "https://drive.google.com/uc?export=download&id=1NaB8w1cqIEBSdPCIZeKM5iyMVMtWvrPE" }
  ],
  thana: [
    { name: "Canteen Smart Card Application Form", downloadUrl: "https://drive.google.com/uc?export=download&id=13nXopfS5E5WYdNNJLfwqEc3ZWaZ0bCuL" },
    { name: "पुलिस परिचय पत्र", downloadUrl: "https://drive.google.com/uc?export=download&id=1IlR3z0Iqd3HypnftAreGIGA6Q-BjVP7i" },
    { name: "CDR सीडीआर", downloadUrl: "https://drive.google.com/uc?export=download&id=1Wc8JOl4iN0uAvQb1JX0GwBSYvdGRVwG2" },
    { name: "गैर हाजिरी सवाल जवाब", downloadUrl: "https://drive.google.com/uc?export=download&id=1fldxu01H9yBumSHURuoiQpXDAHhQwoaM" },
    { name: "चिठ्ठी मजरुबी medical praroop", downloadUrl: "https://drive.google.com/uc?export=download&id=1nNIVikzUJFbblEKKoK2qqmkY0iIE_KD5" },
    { name: "जीपनेट वाहन चोरी प्रारूप", downloadUrl: "https://drive.google.com/uc?export=download&id=1GPMzdxYnPUp4v9JZnZZv2Q6Fr6VCY7Ri" },
    { name: "तनकी प्रारूप", downloadUrl: "https://drive.google.com/uc?export=download&id=1GbxcOA5B5RzvsokzzsHen_e8JCaGXX_d" },
    { name: "नक्शा रिवार्ड", downloadUrl: "https://drive.google.com/uc?export=download&id=18mlQ5QYXlxIxC23fTtfALCgPpmIVJPg-" },
    { name: "पर्यवेक्षण आख्या", downloadUrl: "https://drive.google.com/uc?export=download&id=1ujY7Sj4mOFDOCyE8aD42Ne2Mxg_sWFf5" },
    { name: "पूछताछ आख्या डोजियर", downloadUrl: "https://drive.google.com/uc?export=download&id=1eJg8rRTmRhOLjQ_NXAMwu4a6aq40lqhR" },
    { name: "स्थानान्तरण प्रारूप अनुकम्पा के आधार पर", downloadUrl: "https://drive.google.com/uc?export=download&id=17eiwmiJ_piziVcAL_zFvHjknjL82Nk-z" },
    { name: "Pension gratuity", downloadUrl: "https://drive.google.com/uc?export=download&id=1ZhF9zDmhRsB6ybbaniSQrO60_PCLLDp8" },
    { name: "All police Station No", downloadUrl: "https://drive.google.com/uc?export=download&id=1j-zpXPhTgllN6aktx9YlST4znfXsZWeD" },
    { name: "Awakash yatra suvidha LTC", downloadUrl: "https://drive.google.com/uc?export=download&id=1LSS7zyAKagXK6MOMclZReVHHQhDNEooB" },
    { name: "citizen charter board", downloadUrl: "https://drive.google.com/uc?export=download&id=1WGo5dgtxfy9nKL3LFxff0iklGZ_Cduzi" },
    { name: "Cashless Hospital UP-1", downloadUrl: "https://drive.google.com/uc?export=download&id=1K1Br43I5EKqKryR-CypTBB9dCLwYpzU9" },
    { name: "Constable rules", downloadUrl: "https://drive.google.com/uc?export=download&id=1DbDLym-3J_Z5jtZeK-6SPiLu_-Op0elL" },
    { name: "CL के मध्य में पड़ने वाले अकार्य दिवस", downloadUrl: "https://drive.google.com/uc?export=download&id=1mfqFvXUMO53jhrlnGrnfHrg_n0nmhc3-" },
    { name: "constable niymavali", downloadUrl: "https://drive.google.com/uc?export=download&id=1G-R97Xve2y5rEBDgRJKaila_3BRqYXZ9" },
    { name: "EL NAKSHA", downloadUrl: "https://drive.google.com/uc?export=download&id=1z7ynymsgeGl6M90hrMGkzteyIIfEE_B7" },
    { name: "FCR Naksha", downloadUrl: "https://drive.google.com/uc?export=download&id=1amPB0g2UnIpLqGv1jZTlJzvH-Lv0MgSi" },
    { name: "Flag code झण्डा तिरंगा नियम", downloadUrl: "https://drive.google.com/uc?export=download&id=1R35lheVqMvSrwA67B5tKRLCQsJ8dvLuJ" },
    { name: "FORM NO", downloadUrl: "https://drive.google.com/uc?export=download&id=1qFxbJPIKehR1G-qMDUuqCpZt_4skRY-f" },
    { name: "group insurance", downloadUrl: "https://drive.google.com/uc?export=download&id=1l8SdIw2l7jw4FUVzIZdFoutu0uiwPfJg" },
    { name: "Home district change rule", downloadUrl: "https://drive.google.com/uc?export=download&id=1A50BNIjtKbiDODBPV8Dh4guew9M95TZ_" },
    { name: "HRA 2022", downloadUrl: "https://drive.google.com/uc?export=download&id=1vdgcU-Wcbl6lygR9cCcVeu6RCTSVGcNT" },
    { name: "IMPORTANT FORMS", downloadUrl: "https://drive.google.com/uc?export=download&id=1PPTuFzVlEHKwAmtiATP5CdOHpwacTo04" },
    { name: "medical proforma sg pgi", downloadUrl: "https://drive.google.com/uc?export=download&id=13mhwHQedsRYP8H369AiPCrBAwsSD6iZl" },
    { name: "night pass नाईट पास", downloadUrl: "https://drive.google.com/uc?export=download&id=1FV6CwT-kOzK-CPbixte5OIG06NWzzaPg" },
    { name: "Police shiksha Nidhi", downloadUrl: "https://drive.google.com/uc?export=download&id=1KJ9SAMe5IeDZ9BjAWVRdp7mYMdyebE0c" },
    { name: "Police welfare fund", downloadUrl: "https://drive.google.com/uc?export=download&id=1OJdjjT1Fxv85iGs3aPCG_U3CMh69i17k" },
    { name: "Praroop Reminder", downloadUrl: "https://drive.google.com/uc?export=download&id=17w8wBLxYx7hcU3eVlnP7FdKX4Os57U8a" },
    { name: "praroop vahan talas वाहन तलाश गस्ती", downloadUrl: "https://drive.google.com/uc?export=download&id=1rme6e_M-YnejMT9ZoTfVTOoJ3YbgrMM8" },
    { name: "prarup 34 police act", downloadUrl: "https://drive.google.com/uc?export=download&id=1LALRBuR3F4vo1uK2-k940VR9ewi8QEg8" },
    { name: "PVR Questionnaire CA new", downloadUrl: "https://drive.google.com/uc?export=download&id=11qdlwT_9kM6zGrG2a8PxuDgAEW5NxiGU" },
    { name: "PVR Questionnaire CA PA 5 Years new", downloadUrl: "https://drive.google.com/uc?export=download&id=1-lggtFImjldal7SG4Ngu9xLbT-BMZQfc" },
    { name: "Retired ID Card", downloadUrl: "https://drive.google.com/uc?export=download&id=1qt_hB-Ph_pPe0j8imJA0bCF1IELE0SBj" },
    { name: "RTI सूचना पुलिस ड्यूटी के सम्बन्ध में", downloadUrl: "https://drive.google.com/uc?export=download&id=1BFcyASdta3pXodRXm9LJA-i5Er0sSHOJ" },
    { name: "Scholarship Police Welfare Fund", downloadUrl: "https://drive.google.com/uc?export=download&id=117dZSm8HtbgB7aV2c5Uk2xKX0iSfH8cy" },
    { name: "TA DA नक्शा नागरिक पुलिस", downloadUrl: "https://drive.google.com/uc?export=download&id=1YPssf36MxEVOcTvPHAg2p2AKIqzssLlA" },
    { name: "TOTAL BLANK PRAROOP 2020", downloadUrl: "https://drive.google.com/uc?export=download&id=10K-pWcmZGugUqiFl0_Db19znYlXKbT3d" },
    { name: "आर्थिक सहायता हेतु Sc ST", downloadUrl: "https://drive.google.com/uc?export=download&id=1_QZIsl9xnLV3IdnPzD2hzzhJ2xEmxGQZ" },
    { name: "75 जनपदों एवं कमिश्नरी के सीए, बड़े बाबू, पेशकार का CUG नं0", downloadUrl: "https://drive.google.com/uc?export=download&id=1xP4zVBYgCcLYMGB33hioCk01sbQ0zE8L" },
    { name: "डोजियर प्रारूप", downloadUrl: "https://drive.google.com/uc?export=download&id=1mgNrMUU7L-zvfhoIg8VMhGAlcGm5vukt" },
    { name: "दण्ड और अपील", downloadUrl: "https://drive.google.com/uc?export=download&id=1ZzD4pJsgrdjEywU-atuNYxNoEUNxjUqr" },
    { name: "नया प्रारूप जाँच प्रार्थना पत्र", downloadUrl: "https://drive.google.com/uc?export=download&id=1XRgFPnuBng1M_WhAGIh70X7mdlTxErd0" },
    { name: "पुलिस कार्मिक का विवरण", downloadUrl: "https://drive.google.com/uc?export=download&id=1kFAfncMgCuU2xfu9bp77fDDr9TPG0IvV" },
    { name: "पुलिस शब्दावली", downloadUrl: "https://drive.google.com/uc?export=download&id=1tljLnh0ZTSNdO4FfH87R5zHCtYiQRhV4" },
    { name: "बीट बुक", downloadUrl: "https://drive.google.com/uc?export=download&id=1mcvlOujvuj9to0yVYz4yY3qutQmspcur" },
    { name: "यात्रा दैनिक भत्ता आदेश", downloadUrl: "https://drive.google.com/uc?export=download&id=1NaB8w1cqIEBSdPCIZeKM5iyMVMtWvrPE" }
  ]
};

/* --- New Function: Generate File List HTML for a Folder --- */
function generateFilesHTMLForFolder(folderId) {
  let files = folderFiles[folderId] || [];
  let html = "";
  files.forEach(file => {
    const previewUrl = getPreviewUrl(file.downloadUrl);
    html += `
      <li class="list-group-item" data-file-name="${file.name}" data-file-tags="template, form, sample">
        <div class="d-flex justify-content-start">
          <button class="btn btn-sm btn-info mr-2" onclick="previewFile('${previewUrl}')">Preview</button>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-2">
          <span>${file.name}</span>
          <span>
            <a href="${file.downloadUrl}" class="btn btn-sm btn-success" target="_blank">Download</a>
            <button class="btn btn-sm btn-secondary" onclick="printFile('${previewUrl}')">Print</button>
          </span>
        </div>
      </li>
    `;
  });
  return html;
}

/* --- Build Fuse.js Data from All Folder Files --- */
function buildFilesDataFromFolders() {
  let filesData = [];
  for (let folder in folderFiles) {
    folderFiles[folder].forEach(file => {
      let previewUrl = getPreviewUrl(file.downloadUrl);
      filesData.push({
        name: file.name,
        tags: "template, form, sample",
        element: `
          <li class="list-group-item" data-file-name="${file.name}" data-file-tags="template, form, sample">
            <div class="d-flex justify-content-start">
              <button class="btn btn-sm btn-info mr-2" onclick="previewFile('${previewUrl}')">Preview</button>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-2">
              <span>${file.name}</span>
              <span>
                <a href="${file.downloadUrl}" class="btn btn-sm btn-success" target="_blank">Download</a>
                <button class="btn btn-sm btn-secondary" onclick="printFile('${previewUrl}')">Print</button>
              </span>
            </div>
          </li>
        `
      });
    });
  }
  return filesData;
}

var fuse; // Fuse search instance

$(document).ready(function() {
  // Initialize Fuse.js with the new files data
  let fuseFilesData = buildFilesDataFromFolders();
  fuse = new Fuse(fuseFilesData, { keys: ["name", "tags"], threshold: 0.4 });
  
  // Build the datalist for search suggestions
  let suggestionsSet = new Set();
  fuseFilesData.forEach(item => {
    suggestionsSet.add(item.name);
  });
  let suggestionsList = Array.from(suggestionsSet).filter(s => s && s.length);
  let optionsHTML = suggestionsList.map(s => `<option value="${s}">`).join('');
  $('#fileSuggestions').html(optionsHTML);
  
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

/* --- Navigation --- */
function showSection(section) {
  $('#homeSection, #updatesSection, #categorySection').hide();
  if (section === 'home') {
    $('#homeSection').show();
  } else if (section === 'updates') {
    $('#updatesSection').show();
  } else if (section === 'category') {
    $('#categorySection').show();
    $('#folderListView').show();
    $('#folderDetailView').hide();
  }
  $("#searchResultsList").empty();
  $("#searchResults").hide();
}

/* --- Search Functionality --- */
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

/* --- Age Calculator --- */
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
  
  const ageResultEl = document.getElementById("ageResult");
  ageResultEl.innerHTML = `
    Age: ${years} years, ${months} months, ${days} days | Total Days: ${totalDays}
  `;
  ageResultEl.classList.add("shake");
  setTimeout(() => ageResultEl.classList.remove("shake"), 500);
}

/* --- Converter Functions --- */
async function fetchIPCtoBNSData() {
  const sheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSuDAxvhH2oEOrQgMk93bECt-FOPzJME4m6dARFxicpI2RMfM7xd7jdHAM86V2C-RRRqZVPrbc_e9pr/pub?gid=625416711&single=true&output=csv";
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
    resultField.classList.add("shake");
    setTimeout(() => resultField.classList.remove("shake"), 500);
    return;
  }
  const ipcData = await fetchIPCtoBNSData();
  const bnsEquivalent = ipcData[inputIPC];
  if (bnsEquivalent) {
    resultField.innerText = bnsEquivalent;
  } else {
    resultField.innerText = "No matching BNS section found.";
  }
  resultField.classList.add("shake");
  setTimeout(() => resultField.classList.remove("shake"), 500);
}

async function fetchCrPCtoBNSSData() {
  const sheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSuDAxvhH2oEOrQgMk93bECt-FOPzJME4m6dARFxicpI2RMfM7xd7jdHAM86V2C-RRRqZVPrbc_e9pr/pub?gid=216325542&single=true&output=csv";
  try {
    const response = await fetch(sheetUrl);
    const data = await response.text();
    const rows = data.split("\n").map(row => row.split(","));
    let crpcToBnssMap = {};
    rows.slice(1).forEach(row => {
      let crpc = row[0].trim();
      let bnss = row[1] ? row[1].trim() : "";
      if (crpc && bnss) {
        crpcToBnssMap[crpc] = bnss;
      }
    });
    return crpcToBnssMap;
  } catch (error) {
    console.error("Error fetching CrPC-to-BNSS data:", error);
    return {};
  }
}

async function convertCrPcToBNSS() {
  const inputCrpc = document.getElementById('crpcInput').value.trim();
  const resultField = document.getElementById('crpcResult');
  if (!inputCrpc) {
    resultField.innerText = "Please enter a CrPC value.";
    resultField.classList.add("shake");
    setTimeout(() => resultField.classList.remove("shake"), 500);
    return;
  }
  const crpcData = await fetchCrPCtoBNSSData();
  const bnssEquivalent = crpcData[inputCrpc];
  if (bnssEquivalent) {
    resultField.innerText = bnssEquivalent;
  } else {
    resultField.innerText = "No matching BNSS section found.";
  }
  resultField.classList.add("shake");
  setTimeout(() => resultField.classList.remove("shake"), 500);
}

/* --- Folder View & Other Functions --- */
$(document).on('click', '.folder-card', function() {
  var folderId = $(this).data('folder-id');
  var folderNames = {
    'avkaash': 'अवकाश',
    'medical': 'मेडिकल',
    'vivechak': 'विवेचक फाईल',
    'thana': 'थाना कार्यालय',
    'notice': 'अन्य'
  };
  var folderName = folderNames[folderId] || '';
  $('#folderTitle').text(folderName);
  $('#folderDetailList').html(generateFilesHTMLForFolder(folderId));
  $('#folderListView').hide();
  $('#folderDetailView').show();
});

$('#backToFolders').on('click', function() {
  $('#folderDetailView').hide();
  $('#folderListView').show();
});

$('#darkModeToggle').on('click', function() {
  $('body').toggleClass('dark-mode');
});

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

async function updateGoldPrices() {
  const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key.
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
