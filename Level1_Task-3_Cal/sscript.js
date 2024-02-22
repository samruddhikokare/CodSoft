const display = document.getElementById("result");

const numberButtons = document.querySelectorAll(".btn:not(#clear):not(#equals)");

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.textContent;
    });
});

document.getElementById("clear").addEventListener("click", () => {
    display.value = "";
});

document.getElementById("equals").addEventListener("click", () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
});
