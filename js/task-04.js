const minusOne = document.querySelector('button[data-action="decrement"]')
const plusOne = document.querySelector('button[data-action="increment"]')

const numberValue = document.querySelector("#value")

var counterValue = 0;

minusOne.addEventListener("click", () => {
    counterValue -= 1;
    numberValue.textContent = counterValue
})

plusOne.addEventListener("click", () => {
    counterValue += 1;
   numberValue.textContent = counterValue
})