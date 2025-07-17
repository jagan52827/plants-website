// script.js
function changeColor() {
  const colors = ['#f0f0f0', '#ffe4e1', '#e6ffe6', '#e0f7fa', '#fffacd'];
  const current = document.body.style.backgroundColor;
  let nextColor = colors[Math.floor(Math.random() * colors.length)];

  // Keep picking until it's a new color
  while (nextColor === current) {
    nextColor = colors[Math.floor(Math.random() * colors.length)];
  }

  document.body.style.backgroundColor = nextColor;
}
