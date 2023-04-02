let screen = document.getElementById('screen');
let operation = '';

function insert(value) {
    operation += value;
    screen.value = operation;
}

function calculate() {
    screen.value = eval(operation);
    operation = '';
}

function clearScreen() {
    screen.value = '';
    operation = '';
}

function back() {
    operation = operation.slice(0, -1);
    screen.value = operation;
}