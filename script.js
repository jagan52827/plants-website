// script.js

document.getElementById('plantForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById('plantName').value;
  const sciName = document.getElementById('scientificName').value;
  const uses = document.getElementById('plantUses').value;
  const imageInput = document.getElementById('imageUpload');
  const previewSection = document.getElementById('previewSection');

  // Show text
  document.getElementById('previewName').innerText = name;
  document.getElementById('previewScientific').innerText = sciName;
  document.getElementById('previewUses').innerText = uses;

  // Show image
  const file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      document.getElementById('previewImage').src = event.target.result;
    };
    reader.readAsDataURL(file);
  }

  // Show preview section
  previewSection.classList.remove('hidden');

  // Optionally clear form:
  // document.getElementById('plantForm').reset();
});
