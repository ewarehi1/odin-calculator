const display = document.querySelector('#display');

const buttons = document.querySelectorAll('.number, .operator');

buttons.forEach(button => {
    button.addEventListener('click', () => {

        display.textContent += button.textContent;
    });
})

const submit = document.querySelector('#submit');

function add(initial, addend) {
    return initial + addend;
}

function subtract(initial, subtrahend) {
    return initial - subtrahend;
}

function multiply(initial, multiplier) {
    return initial * multiplier;
}

function divide(initial, divisor) {
    return initial / divisor;
}