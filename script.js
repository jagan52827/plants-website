document.getElementById('identifyButton').addEventListener('click', () => {
  const fileInput = document.getElementById('imageUpload');
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select an image first.");
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    const base64 = reader.result;
    document.getElementById('plantImage').src = base64;

    identifyPlant(base64); // Simulated or real API call
  };
  reader.readAsDataURL(file);
});

function identifyPlant(base64) {
  // Simulate AI result for now (replace with real API later)
  document.getElementById('commonName').innerText = "Neem";
  document.getElementById('scientificName').innerText = "Azadirachta indica";
  document.getElementById('usage').innerText = "Used for its antibacterial and medicinal properties.";
  document.getElementById('result').classList.remove('hidden');
}
