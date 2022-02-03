const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");
inputRef.addEventListener("input", () => {
  const inputValue = inputRef.value.trim();
  outputRef.textContent = inputValue || "Anonymous";
});
