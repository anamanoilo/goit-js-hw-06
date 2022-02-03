function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  input: document.querySelector('[type="number"]'),
  box: document.querySelector("#boxes"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
};

refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = refs.input.value;
  const arrayOfDivStrings = [];

  let counter = 20;
  for (let i = 0; i < amount; i += 1) {
    let div = `<div style='background-color: ${getRandomHexColor()}; width: ${(counter += 10)}px; height: ${(counter += 10)}px;'></div>`;
    arrayOfDivStrings.push(div);
  }
  refs.box.insertAdjacentHTML("afterbegin", arrayOfDivStrings.join(""));
}

function destroyBoxes() {
  refs.box.innerHTML = "";
}
