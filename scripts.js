

function operation(operand, num1, num2) {
    switch (operand) {
        case "+":
            return parseFloat(num1) + parseFloat(num2);
        case "-":
            return parseFloat(num1) - parseFloat(num2);
        case "x":
            return parseFloat(num1) * parseFloat(num2);
        case "/":
            return parseFloat(num1) / parseFloat(num2);
        default:
            break;
    }
}

const buttons = document.querySelectorAll(".btn");
const screen = document.querySelector("#screen");

let operand = "";
let firstNumber = "0";
let secondNumber = "";

[...buttons].forEach(btn => {
    btn.addEventListener("click", (e) => {
        const buttonId = e.target.querySelector("h1").id;
        if ("0123456789".includes(buttonId)) {
            firstNumber === "0" ? firstNumber = buttonId : secondNumber += buttonId;
        } else if ("/x-+".includes(buttonId) && screen.innerText.at(-1) != operand) {
            operand === "" ? operand = buttonId : firstNumber = operation(operand, firstNumber, secondNumber);
            operand = buttonId;
            secondNumber = "";
        } else if (buttonId === "=") {
            firstNumber = operation(operand, firstNumber, secondNumber);
            operand = "";
            secondNumber = "";
        } else {
            operand = "";
            firstNumber = "0";
            secondNumber = "";
        }
        screen.innerText = firstNumber + operand + secondNumber;
    })
})