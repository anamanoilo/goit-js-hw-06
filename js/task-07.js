const inputRef = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
inputRef.addEventListener("input", () =>
  text.setAttribute("style", `font-size: ${inputRef.value}px;`)
);
