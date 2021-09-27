const h1 = document.querySelector("div.hello:first-child h1");

function handleTitlsClick() {
  const clickedClass = "clicked sexy-font";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}
h1.addEventListener("click", handleTitlsClick);
