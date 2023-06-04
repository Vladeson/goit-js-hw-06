const inputArea = document.querySelector("#validation-input")

inputArea.addEventListener("blur", () => {
    if (parseInt(inputArea.dataset.length) === inputArea.value.length) {
        inputArea.classList.remove("invalid")
        inputArea.classList.add("valid")
    } else {
        inputArea.classList.remove("valid")
        inputArea.classList.add("invalid")
    }
})