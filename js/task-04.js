let counterValue = 0;
const refs = {
  decBtn: document.querySelector("[data-action='decrement']"),
  incBtn: document.querySelector("[data-action='increment']"),
  value: document.querySelector("#value"),
};

refs.decBtn.addEventListener("click", () => {
  counterValue -= 1;
  refs.value.textContent = counterValue;
});
refs.incBtn.addEventListener("click", () => {
  counterValue += 1;
  refs.value.textContent = counterValue;
});
