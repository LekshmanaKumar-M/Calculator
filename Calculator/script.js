let display = document.querySelector('.display');

function appendNumber(number) {
  display.value += number;
}

function appendOperation(operation) {
  display.value += operation;
}

function appendDot() {
  if (!display.value.includes('.')) {
    display.value += '.';
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function clearDisplay() {
  display.value = '';
}
