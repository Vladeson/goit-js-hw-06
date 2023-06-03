function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const randomColorBtn = document.querySelector(".change-color");
const body = document.querySelector("body")
const colorText = document.querySelector('.color')

const handleClick = () => {
  body.style.backgroundColor = getRandomHexColor();
  colorText.textContent = getRandomHexColor();
}

randomColorBtn.addEventListener("click", handleClick)

