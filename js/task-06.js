const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", () => {
  if (inputRef.value.length === Number(inputRef.dataset.length)) {
    changeFirstClassToSecond("invalid", "valid");
    return;
  }
  changeFirstClassToSecond("valid", "invalid");
});

function changeFirstClassToSecond(class1, class2) {
  inputRef.classList.remove(class1);
  inputRef.classList.add(class2);
}
