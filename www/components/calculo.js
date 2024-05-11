// This is a JavaScript file
function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    try {
        var display = document.getElementById('display');
        display.value = eval(display.value);
    } catch (error) {
        var display = document.getElementById('display');
        display.value = 'Error';
    }
}
