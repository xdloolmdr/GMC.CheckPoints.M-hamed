document.addEventListener("DOMContentLoaded", () => {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  // Function to generate a random hex color
  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  // Event listener for button click
  changeColorBtn.addEventListener("click", () => {
    colorBox.style.backgroundColor = getRandomColor();
  });
});
