let uploadedImageBase64 = null;

document.getElementById('uploadButton').addEventListener('click', () => {
  const file = document.getElementById('imageUpload').files[0];
  if (!file) {
    alert("Please select an image first.");
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    uploadedImageBase64 = reader.result;
    document.getElementById('plantImage').src = uploadedImageBase64;
    document.getElementById('previewImageContainer').classList.remove('hidden');
  };
  reader.readAsDataURL(file);
});

document.getElementById('identifyButton').addEventListener('click', () => {
  if (!uploadedImageBase64) {
    alert("Please upload an image first.");
    return;
  }

  // Simulated AI Output – replace with real API later
  const common = "Tulsi";
  const scientific = "Ocimum tenuiflorum";
  const uses = [
    "Used in Ayurvedic medicine for immunity.",
    "Helps relieve cold and cough symptoms.",
    "Natural antioxidant and antibacterial."
  ];

  document.getElementById('commonName').innerText = common;
  document.getElementById('scientificName').innerText = scientific;

  const usesList = document.getElementById('usesList');
  usesList.innerHTML = '';
  uses.forEach(use => {
    const li = document.createElement('li');
    li.textContent = use;
    usesList.appendChild(li);
  });

  document.getElementById('result').classList.remove('hidden');
});
