const liRefs = document.querySelectorAll(".item");
console.log(`Number of categories: ${liRefs.length}`);

[...liRefs].forEach((liRef) => {
  console.log(`Category: ${liRef.querySelector("h2").textContent}`);
  console.log(`Elements: ${liRef.querySelectorAll("li").length}`);
});
