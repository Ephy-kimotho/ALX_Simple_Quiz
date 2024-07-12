const resultSpan = document.getElementById("calculation-result")
const buttons = document.querySelectorAll("#calculator-container button")


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const operator = button.textContent
        let result = null;

        const number1 = parseFloat(document.getElementById('number1').value) || 0;
        const number2 = parseFloat(document.getElementById('number2').value) || 0;

        switch (operator) {
            case "+":
                result = add(number1, number2)
                resultSpan.textContent = result
                break;
                onsole.log(resultSpan);
            case "-":
                result = subtract(number1, number2)
                resultSpan.textContent = result
                break;

            case "*":
                result = multiply(number1, number2)
                resultSpan.textContent = result
                break;

            case "/":
                result = divide(number1, number2)
                resultSpan.textContent = result
                break;
        }
    })
})


function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return  number1 / number2;
}