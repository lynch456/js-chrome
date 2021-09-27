const h1 = document.querySelector("div.hello:first-child h1");

function handleTitlsClick() {
  const clickedClass = "clicked";
  h1.classList.toggle(clickedClass);
}
h1.addEventListener("click", handleTitlsClick);

// className 모든 클래스 교체
// classList 선택한 클래스 교체
// classList.toggle classList에 클래스가 있는지 확인해서
// 클래스가 있다면 제거해주고 존재하지 않는다면 classList에 class추가
