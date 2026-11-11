document.addEventListener("DOMContentLoaded", function () {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  function getRandomColor() {
    const randomNumber = Math.floor(Math.random() * 16777215);
    return "#" + randomNumber.toString(16).padStart(6, "0");
  }

  changeColorBtn.addEventListener("click", function () {
    colorBox.style.backgroundColor = getRandomColor();
  });
});