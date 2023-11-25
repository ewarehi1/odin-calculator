const display = document.querySelector('#display');

const buttons = document.querySelectorAll('.number, .operator');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.textContent)
        display.textContent += button.textContent;
    });
})

const submit = document.querySelector('#submit')