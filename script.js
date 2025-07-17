// script.js
const input = document.getElementById('imageUpload');
input.addEventListener('change', async () => {
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    document.getElementById('plantImage').src = reader.result;
    identifyPlant(reader.result);
  };
  reader.readAsDataURL(file);
});

async function identifyPlant(base64) {
  // Call AI API like plant.id
  const response = await fetch('/api/identify', { 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ image: base64 })
  });
  const data = await response.json();
  // Example response: { common: "", scientific: "", uses: "" }
  document.getElementById('commonName').innerText = data.common;
  document.getElementById('scientificName').innerText = data.scientific;
  document.getElementById('usage').innerText = data.uses;
  document.getElementById('result').classList.remove('hidden');
}
