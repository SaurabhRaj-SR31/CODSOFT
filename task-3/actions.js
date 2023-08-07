let input = document.getElementById('result');
let expression = '';

function appendNumber(number) {
    expression += number;
    input.value = expression;
}

function appendOperator(operator) {
    expression += ' ' + operator + ' ';
    input.value = expression;
}

function clearResult() {
    expression = '';
    input.value = '';
}

function calculate() {
    try {
        let result = eval(expression);
        input.value = result;
        expression = result.toString();
    } catch (error) {
        input.value = 'Error';
        expression = '';
    }
}
function appendSquareRoot() {
  const resultField = document.getElementById('result');
  const currentValue = parseFloat(resultField.value);
  if (currentValue >= 0) {
    const result = Math.sqrt(currentValue);
    resultField.value = result;
    expression = result.toString();
  } else {
    resultField.value = 'Error';
    expression = '';
  }
}

function appendPercentage() {
  const resultField = document.getElementById('result');
  const currentValue = parseFloat(resultField.value);
  if (!isNaN(currentValue)) {
    const result = currentValue / 100;
    resultField.value = result;
    expression = result.toString();
  } else {
    resultField.value = 'Error';
    expression = '';
  }
}

function calculate() {
  const resultField = document.getElementById('result');
  const expression = resultField.value;

  try {
    const result = eval(expression); 
    resultField.value = result;
  } catch (error) {
    resultField.value = 'Error';
  }
}