const inputText = document.querySelector("#name-input");


const output = document.querySelector("#name-output");


inputText.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value.trim();
    output.textContent = inputValue === "" ? "Anonymous" : inputValue;
})