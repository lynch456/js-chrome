const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitlsClick() {
  title.style.color = "blue";
  console.log("title was clicked!");
}
function handleMouseEnter() {
  title.innerText = "mouse is here";
  console.log("mouse is here");
}
function handleMouseLeave() {
  title.innerText = "mouse is gone";
  console.log("mouse is gone");
}
title.addEventListener("click", handleTitlsClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
