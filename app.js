const h1 = document.querySelector("div.hello:first-child h1");

function handleTitlsClick() {
  const clickedClass = "clicked";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}
h1.addEventListener("click", handleTitlsClick);

// className 모든 클래스 교체
// classList 선택한 클래스 교체
