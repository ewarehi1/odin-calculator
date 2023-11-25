const display = document.querySelector('#display');

const buttons = document.querySelectorAll('.number, .operator');

buttons.forEach(button => {
    button.addEventListener('click', () => {

        display.textContent += button.textContent;
    });
})

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    display.textContent = '';
})

function add(initial, addend) {
    return Number(initial) + Number(addend);
}

function subtract(initial, subtrahend) {
    return Number(initial) - Number(subtrahend);
}

function multiply(initial, multiplier) {
    return Number(initial) * Number(multiplier);
}

function divide(initial, divisor) {
    return Number(initial) / Number(divisor);
}

const submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
    const arr = display.textContent.split(' ');
    console.log(arr);
    display.textContent = operate(arr);
});

function operate(arr) {
    total = arr[0];
    for ( let i = 1; i < arr.length; ) {
        if (arr[i] == '+') {
            total = add(total, arr[i + 1])
        } else if (arr[i] == '-') {
            total = subtract(total, arr[i + 1])
        } else if (arr[i] == '×') {
            total = multiply(total, arr[i + 1])
        } else if (arr[i] == '÷') {
            total = divide(total, arr[i + 1])
        }
        i += 2;
    }
    return total;
};