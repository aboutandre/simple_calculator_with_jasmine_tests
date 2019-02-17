function calculate(inputValue) {
    const expression = /\+|\-|\*|\//;
    const numbers = inputValue.split(expression);

    const numberA = parseInt(numbers[0]);
    const numberB = parseInt(numbers[1]);

    const operation = inputValue.match(expression);
    if (inputValue.length === 0) {
        updateResult('Type some numbers to calculate');
        return;
    } else if (Number.isNaN(numberA) || Number.isNaN(numberB) || operation === null) {
        updateResult('Operation not possible');
        return;
    }

    const calculator = new Calculator();

    calculator.add(numberA);

    let result;
    switch (operation[0]) {
        case '+':
            result = calculator.add(numberB);
            break;

        case '-':
            result = calculator.subtract(numberB);
            break;

        case '*':
            result = calculator.multiply(numberB);
            break;

        case '/':
            result = calculator.divide(numberB);
            break;

        default:
            break;
    }

    updateResult(result);
}

function updateResult(result) {
    const element = document.getElementById('result');

    if (element) {
        element.innerText = result;
    }

}