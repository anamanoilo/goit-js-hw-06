function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnRef = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
btnRef.addEventListener("click", () => {
  document.body.setAttribute(
    "style",
    `background-color: ${getRandomHexColor()}`
  );
  colorName.textContent = getRandomHexColor();
});
