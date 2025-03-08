$('#updatesSection').show().load('news.html #newsContent');

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
  { "name": "अवकाश नियम", "downloadUrl": "https://drive.google.com/uc?export=download&id=1er1TpVE4aljixxrsG0cC51PwLYzAoLQ3" },
  { "name": "night pass नाईट पास", "downloadUrl": "https://drive.google.com/uc?export=download&id=1FV6CwT-kOzK-CPbixte5OIG06NWzzaPg" },
  { "name": "Awakash yatra suvidha LTC", "downloadUrl": "https://drive.google.com/uc?export=download&id=1LSS7zyAKagXK6MOMclZReVHHQhDNEooB" },
  { "name": "CL के मध्य में पड़ने वाले अकार्य दिवस", "downloadUrl": "https://drive.google.com/uc?export=download&id=1mfqFvXUMO53jhrlnGrnfHrg_n0nmhc3-" },
  { "name": "EL NAKSHA", "downloadUrl": "https://drive.google.com/uc?export=download&id=1ExzRweXZmSvJQrpwVYIabRzyGr4oqEaU" }
],
  medical: [
  { "name": "A CATEGORY MEDICAL", "downloadUrl": "https://drive.google.com/uc?export=download&id=1r3lb21IQYujsVJ2cOqTSk5B6zrW0kU6h" },
  { "name": "A category medical certificate", "downloadUrl": "https://drive.google.com/uc?export=download&id=1P3KZZ5BheQJZ1oy0yJDxIme6_YyGh97U" },
  { "name": "Cashless Hospital UP-1", "downloadUrl": "https://drive.google.com/uc?export=download&id=1K1Br43I5EKqKryR-CypTBB9dCLwYpzU9" },
  { "name": "group insurance", "downloadUrl": "https://drive.google.com/uc?export=download&id=1l8SdIw2l7jw4FUVzIZdFoutu0uiwPfJg" },
  { "name": "medical proforma sg pgi", "downloadUrl": "https://drive.google.com/uc?export=download&id=13mhwHQedsRYP8H369AiPCrBAwsSD6iZl" },
  { "name": "Medical Reimbursment. Medical Claim", "downloadUrl": "https://drive.google.com/uc?export=download&id=1qLkufZh8eBE6qIWInDBORdBgh4BRdKlS" },
  { "name": "चिकित्सा प्रतिपूर्ति प्रपत्र मेडिकल का पैसा. Medical Claim", "downloadUrl": "https://drive.google.com/uc?export=download&id=1ViLhXctGZdyzu3G0UMhL-t0If_kOC3Wy" },
  { "name": "चिठ्ठी मजरुबी medical praroop", "downloadUrl": "https://drive.google.com/uc?export=download&id=1lMEa6IRN6lSCIaLdRKWVSQ5XdvnAOn8S" },
  { "name": "मजरूबी चिट्ठी. Medical", "downloadUrl": "https://drive.google.com/uc?export=download&id=1jVJNeZEM8LAGUnrpfU7EbJ1J7ONq62GA" }
],
  vivechak: [
  { name: "आयु मेमो", downloadUrl: "https://drive.google.com/uc?export=download&id=1Cx_EswLmY-QsK_6rWuaqRpCXNKGHEBeZ" },
  { name: "किशोर न्याय आदर्श नियम 2016", downloadUrl: "https://drive.google.com/uc?export=download&id=1G6G4soL3Qm83Ble06w6kV8UWhTm30C6m" },
  { name: "विधि विज्ञान प्रयोगशाला अग्रसारण", downloadUrl: "https://drive.google.com/uc?export=download&id=1SVc8Kp5ma-amnhSH6zpb6Vcqnwf81blC" },
  { name: "प्रमाण पत्र पक्षकार साक्ष्य अधिनियम", downloadUrl: "https://drive.google.com/uc?export=download&id=1KywrRb9wWWPl9bPuMQcUX8_hpUfo6yaD" },
  { name: "179 BNSS", downloadUrl: "https://drive.google.com/uc?export=download&id=1Z72of1VHJU-Gkr8Pks-hVuHkpNDfVhFn" },
  { name: "94 BNSS", downloadUrl: "https://drive.google.com/uc?export=download&id=1njIFIb45o2QZ_51ksehSi2H2SP6HL9Ou" },
  { name: "35 BNSS", downloadUrl: "https://drive.google.com/uc?export=download&id=1NNb8GDw4Dou8hEc2y7JYBGcbSJEBj73G" },
  { name: "35(3) BNSS", downloadUrl: "https://drive.google.com/uc?export=download&id=1lYZ1spaMoC3RI4csor_OdV-yZDXVB63i" },
  { name: "शांति बनाये हेतु 125,126 BNSS", downloadUrl: "https://drive.google.com/uc?export=download&id=13wBf3NzwDtYbmdi7cIsfZN64oBS9O65M" },
  { name: "प्रमाण पत्र 63(4) ग साक्ष्य अधिनियम", downloadUrl: "https://drive.google.com/uc?export=download&id=16px4Q0fThFyBWO4gJHHor-c2yhRzAEwu" },
  { name: "चिकित्सीय परीक्षण 51,52,184 BNSS", downloadUrl: "https://drive.google.com/uc?export=download&id=1AKGE5S7OJKkUoYVcHf3U9Z1yWTXI3QMc" },
  { name: "नोटिस 195 BNSS", downloadUrl: "https://drive.google.com/uc?export=download&id=1Cr3k9dHJ04AfrT4QCXExvhGS41iahCfW" },
  { name: "बालक चिकित्सीय परीक्षण", downloadUrl: "https://drive.google.com/uc?export=download&id=1DwXG4PQdFKznwUqFKb1WGpT9m0biyltW" },
  { name: "193(3)(ii) BNSS", downloadUrl: "https://drive.google.com/uc?export=download&id=1Kf_sgCmtncEqyeoVe3UTqE9KqZxgTqya" },
  { name: "तलाशी 49 BNSS", downloadUrl: "https://drive.google.com/uc?export=download&id=1RX55FNOzgKMm_5xvfHtrZBtr4Gd6mgeJ" },
  { name: "अभियोजन चलाने के लिए 190 BNSS", downloadUrl: "https://drive.google.com/uc?export=download&id=1SPicrWNLpvBTdcCn66OwXFTJwseo29CX" },
  { name: "प्रारुप 4 गिरफ्तारी के पश्चात जमानत पत्र 83 BNSS", downloadUrl: "https://drive.google.com/uc?export=download&id=1Ue4h950OdNd6hgbTPIo7eHYMhY2iKEUz" },
  { name: "विधि विज्ञान प्रयोगशाला हेतु", downloadUrl: "https://drive.google.com/uc?export=download&id=1WEAK2i13PGx46m8LSvPzQGO__h2btjS_" },
  { name: "वारण्ट के अधीन गिरफ्तारी 83 BNSS", downloadUrl: "https://drive.google.com/uc?export=download&id=1jXo4TW-gArPGjg1_QV3tQ_zmkXDF7RnS" },
  { name: "न्यायालय के समक्ष हाजिर प्रारुप 47", downloadUrl: "https://drive.google.com/uc?export=download&id=1r_G6omsxUTdGlXXjLyUKr52lmuNG5J0w" },
  { name: "किशोर को पकड़ने की सूचना", downloadUrl: "https://drive.google.com/uc?export=download&id=1vFKbxALuK4E1xYljdB6TXQqPonHVohsK" },
  { name: "दस्तावेज जब्ती मेमो 94 BNSS", downloadUrl: "https://drive.google.com/uc?export=download&id=1vKqECn8Rp0G46OIOsUVCFrTbX7C_ZL-4" },
  { name: "किशोर को पकड़ने के सम्बन्ध में", downloadUrl: "https://drive.google.com/uc?export=download&id=1yJ1KKo4NE7f_WDVwHR38UR_pG_9fZAgj" },
  { name: "किशोर की तलाशी मेमो", downloadUrl: "https://drive.google.com/uc?export=download&id=1yTXMLDDpVIc_So2dUywCIUHgJAsfLLMr" },
  { name: "CDR सीडीआर", downloadUrl: "https://drive.google.com/uc?export=download&id=1Wc8JOl4iN0uAvQb1JX0GwBSYvdGRVwG2" },
  { name: "जमानत मुचलका", downloadUrl: "https://drive.google.com/uc?export=download&id=1jLFGUB7vIgVTFxsEN8UinYNwsRfRXNpU" },
  { name: "नया प्रारूप जाँच प्रार्थना पत्र", downloadUrl: "https://drive.google.com/uc?export=download&id=1XRgFPnuBng1M_WhAGIh70X7mdlTxErd0" },
  { name: "नोटिस सफीना 160 CRPC", downloadUrl: "https://drive.google.com/uc?export=download&id=15QDdV3FuL_Z5jwe9rQrXAjfvfNRK9wZO" },
  { name: "नोटिस वादी", downloadUrl: "https://drive.google.com/uc?export=download&id=1sF_-6MzNgNi72Kqk5iglg-sW1oyKj7Oh" },
  { name: "prarup 34 police act", downloadUrl: "https://drive.google.com/uc?export=download&id=1piAnJm-XSbJLoAFKBx1wjoCuurbcQmfM" },
  { name: "praroop vahan talas वाहन तलाश गस्ती", downloadUrl: "https://drive.google.com/uc?export=download&id=1W5aYcFzeipzO85uO5qvNYkMmjJzXJS6e" },
  { name: "Praroop Reminder", downloadUrl: "https://drive.google.com/uc?export=download&id=1ffAKra2zf34heTL40xMVk8ai4Iur6EMi" },
  { name: "NDPS विधि विज्ञान प्रयोगशाला", downloadUrl: "https://drive.google.com/uc?export=download&id=13kt2d9yQAvTnG7-aisTqYj__BRlV9Ipn" },
  { name: "NBW, 82 CRPC, 83 CRPC PRAROP", downloadUrl: "https://drive.google.com/uc?export=download&id=1T_y3yy0LA2pMGojDVjzY_08BgKdMfRx1" },
  { name: "नोटिस 41(1)बी 41(1)B", downloadUrl: "https://drive.google.com/uc?export=download&id=1SaOQsZTDzQ0z6PYZouQ2EJ2ewiJnZTx1" },
  { name: "नोटिस 41ए 41A CRPC", downloadUrl: "https://drive.google.com/uc?export=download&id=12kzOzUfbn69tNGlvTTFsnkdlJVoFqV2J" },
  { name: "गवाह नोटिस 170 CRPC", downloadUrl: "https://drive.google.com/uc?export=download&id=1NK_nEbQzaK_0ehcIpe_aqMTl2I1eCS7L" },
  { name: "अंतिम रिपोर्ट हेतु नोटिस", downloadUrl: "https://drive.google.com/uc?export=download&id=1_F8pmZ8JmXhRxTAZOGr8N9RrOnN47uvh" },
  { name: "नोटिस अन्तर्गत धारा 160 द0प्र0सं0", downloadUrl: "https://drive.google.com/uc?export=download&id=1XkGkKWmaH-b6KcVj7xTIcVcDjgkL6Fd3" },
  { name: "203 mv Act", downloadUrl: "https://drive.google.com/uc?export=download&id=1fk1TfVRPgXMDnnN6XE9Oo0POw82zOI7j" },
  { name: "शव विच्छेदन. पंचायतनामा. पोस्टमार्टम. पीएम. PM", downloadUrl: "https://drive.google.com/uc?export=download&id=1zr8s8nB5WvN_MtTv3TuWRjwUJtOtEdgP" },
  { name: "रिमाण्ड पुलिस प्रपत्र संख्या 202. Remand", downloadUrl: "https://drive.google.com/uc?export=download&id=1kILrF5PRSRzgZEk7E8bHUFsGa2hw79Ca" },
  { name: "बी वारण्ट प्रारूप", downloadUrl: "https://drive.google.com/uc?export=download&id=1EdVGaVlYBPQZyl8DELqmV9n-wz__HWLp" },
  { name: "बी बारण्ट प्रारूप", downloadUrl: "https://drive.google.com/uc?export=download&id=14CVRe975Wj0T2qCywsDYcbmOQNixaduZ" },
  { name: "पूछताछ आख्या डोजियर", downloadUrl: "https://drive.google.com/uc?export=download&id=1giO8DWbVnUF3a-K3ykTB4ZX7sxF-Nxu2" },
  { name: "पर्यवेक्षण आख्या", downloadUrl: "https://drive.google.com/uc?export=download&id=1L872kP6Lkj85EUe5jjAqSJWDYMAIGJZI" },
  { name: "नोटिस धारा 111 सीआरपीसी", downloadUrl: "https://drive.google.com/uc?export=download&id=1-RiZIqww-cJMrTjonLIqe3otdLhEI6u1" },
  { name: "नोटिस अन्तर्गत धारा 149 द0प्र0सं0", downloadUrl: "https://drive.google.com/uc?export=download&id=16rwfxaefnh943kG6TsthW_JGwQDLIp3w" },
  { name: "तनकी प्रारूप", downloadUrl: "https://drive.google.com/uc?export=download&id=1Y4lNJ3Ifm3XTDsludT2aNdtzVaWLYH1q" },
  { name: "जीपनेट वाहन चोरी प्रारूप", downloadUrl: "https://drive.google.com/uc?export=download&id=1JGfc6tTItCnwgBxs1nBYtKWK12euMk6u" },
  { name: "रिपोर्ट चालानी 290 भादवि", downloadUrl: "https://drive.google.com/uc?export=download&id=1LmzDznh42bYrrMHrGxCPBWGnowLeh94D" },
  { name: "अंगुष्ठ छाप ब्यूरो प्रारुप", downloadUrl: "https://drive.google.com/uc?export=download&id=1R1YlfbxetHZyaBILjtxVxMUfD9gZkQWI" },
  { name: "प्रारुप धारा 65 बी साक्ष्य अधिनियम", downloadUrl: "https://drive.google.com/uc?export=download&id=1hdH6qGZgUluWU5wRM5rwyOlP5fqdTWS8" },
  { name: "फार्म न0 203ए", downloadUrl: "https://drive.google.com/uc?export=download&id=1-RdYEY-wlcuoovw9yZvyTbs0L0QXrZGX" }
],
  thana: [
  { name: "FCR Naksha.", downloadUrl: "https://drive.google.com/uc?export=download&id=1fHOJl3msbzsN5UqsVDO1K7tzVEHmU9O8" },
  { name: "Flag code झण्डा तिरंगा नियम", downloadUrl: "https://drive.google.com/uc?export=download&id=1R35lheVqMvSrwA67B5tKRLCQsJ8dvLuJ" },
  { name: "HRA 2022", downloadUrl: "https://drive.google.com/uc?export=download&id=1vdgcU-Wcbl6lygR9cCcVeu6RCTSVGcNT" },
  { name: "night pass नाईट पास", downloadUrl: "https://drive.google.com/uc?export=download&id=1TZS1K61mXUOnFFtsi1lJtGlIGotJyFnq" },
  { name: "Pension gratuity", downloadUrl: "https://drive.google.com/uc?export=download&id=1ZhF9zDmhRsB6ybbaniSQrO60_PCLLDp8" },
  { name: "Police shiksha Nidhi", downloadUrl: "https://drive.google.com/uc?export=download&id=1KJ9SAMe5IeDZ9BjAWVRdp7mYMdyebE0c" },
  { name: "Police welfare fund", downloadUrl: "https://drive.google.com/uc?export=download&id=1OJdjjT1Fxv85iGs3aPCG_U3CMh69i17k" },
  { name: "PVR Questionnaire CA new", downloadUrl: "https://drive.google.com/uc?export=download&id=11qdlwT_9kM6zGrG2a8PxuDgAEW5NxiGU" },
  { name: "PVR Questionnaire CA PA 5 Years new", downloadUrl: "https://drive.google.com/uc?export=download&id=1-lggtFImjldal7SG4Ngu9xLbT-BMZQfc" },
  { name: "Retired ID Card. सेवानिवृत", downloadUrl: "https://drive.google.com/uc?export=download&id=1qt_hB-Ph_pPe0j8imJA0bCF1IELE0SBj" },
  { name: "RTI सूचना पुलिस ड्यूटी के सम्बन्ध में", downloadUrl: "https://drive.google.com/uc?export=download&id=1BFcyASdta3pXodRXm9LJA-i5Er0sSHOJ" },
  { name: "Scholarship Police Welfare Fund", downloadUrl: "https://drive.google.com/uc?export=download&id=117dZSm8HtbgB7aV2c5Uk2xKX0iSfH8cy" },
  { name: "TA DA नक्शा नागरिक पुलिस", downloadUrl: "https://drive.google.com/uc?export=download&id=1YPssf36MxEVOcTvPHAg2p2AKIqzssLlA" },
  { name: "आर्थिक सहायता हेतु Sc ST", downloadUrl: "https://drive.google.com/uc?export=download&id=1WiaNNdydDDTpbnJnIb2t_08mPFZUuiS2" },
  { name: "गैर हाजिरी सवाल जवाब", downloadUrl: "https://drive.google.com/uc?export=download&id=1hqU5EijAxXcDFdwe1sp0AWmODvXPDY96" },
  { name: "चरित्र प्रमाण पत्र ठेकेदारी प्रमाण पत्र प्रारुप PWDT", downloadUrl: "https://drive.google.com/uc?export=download&id=124p0pzaQPAGlGuteiNufvNTrmQRKO4yl" },
  { name: "डोजियर प्रारूप", downloadUrl: "https://drive.google.com/uc?export=download&id=1Rt8zfK7SMxZgPMadSsbhgUfLepH6N-wN" },
  { name: "नक्शा रिवार्ड", downloadUrl: "https://drive.google.com/uc?export=download&id=16A1lpvFhOS_-hMRG305BiU63zuPijKvW" },
  { name: "पुलिस कार्मिक का विवरण", downloadUrl: "https://drive.google.com/uc?export=download&id=1JMqtE6bZs3SZVrEMDwAwxXd3rPokNNmF" },
  { name: "पुलिस परिचय पत्र. I card", downloadUrl: "https://drive.google.com/uc?export=download&id=1IlR3z0Iqd3HypnftAreGIGA6Q-BjVP7i" },
  { name: "यात्रा दैनिक भत्ता आदेश", downloadUrl: "https://drive.google.com/uc?export=download&id=1NaB8w1cqIEBSdPCIZeKM5iyMVMtWvrPE" },
  { name: "स्थानान्तरण प्रारूप अनुकम्पा के आधार पर. Transfer", downloadUrl: "https://drive.google.com/uc?export=download&id=1XHUH39vtT7VVCRYON8UHTlEbk3yK2uJH" },
  { name: "Home district change rule", downloadUrl: "https://drive.google.com/uc?export=download&id=1A50BNIjtKbiDODBPV8Dh4guew9M95TZ_" },
  { name: "बीट बुक", downloadUrl: "https://drive.google.com/uc?export=download&id=1mcvlOujvuj9to0yVYz4yY3qutQmspcur" }
],
anya: [
  { name: "75 जनपदों एवं कमिश्नरी के सीए, बड़े बाबू, पेशकार का CUG नं0", downloadUrl: "https://drive.google.com/uc?export=download&id=1xP4zVBYgCcLYMGB33hioCk01sbQ0zE8L" },
  { name: "All police Station No. and Email 2020", downloadUrl: "https://drive.google.com/uc?export=download&id=1j-zpXPhTgllN6aktx9YlST4znfXsZWeD" },
  { name: "Canteen Smart Card Application Form", downloadUrl: "https://drive.google.com/uc?export=download&id=13nXopfS5E5WYdNNJLfwqEc3ZWaZ0bCuL" },
  { name: "citizen charter board.docx", downloadUrl: "https://drive.google.com/uc?export=download&id=1WGo5dgtxfy9nKL3LFxff0iklGZ_Cduzi" },
  { name: "constable niymavali", downloadUrl: "https://drive.google.com/uc?export=download&id=1G-R97Xve2y5rEBDgRJKaila_3BRqYXZ9" },
  { name: "Constable rules", downloadUrl: "https://drive.google.com/uc?export=download&id=1DbDLym-3J_Z5jtZeK-6SPiLu_-Op0elL" },
  { name: "FORM NO. 54", downloadUrl: "https://drive.google.com/uc?export=download&id=1Rctls9UxYO6YrIm4gnSu7DAK5nz5Augs" },
  { name: "IMPORTANT FORMS", downloadUrl: "https://drive.google.com/uc?export=download&id=1PPTuFzVlEHKwAmtiATP5CdOHpwacTo04" },
  { name: "दण्ड और अपील", downloadUrl: "https://drive.google.com/uc?export=download&id=1ZzD4pJsgrdjEywU-atuNYxNoEUNxjUqr" },
  { name: "पुलिस शब्दावली", downloadUrl: "https://drive.google.com/uc?export=download&id=1tljLnh0ZTSNdO4FfH87R5zHCtYiQRhV4" }
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
    'anya': 'अन्य'
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
