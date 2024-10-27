// function expression
const calculator = (num1, num2, operator) => {
  if (operator == '+') {
    return num1 + num2;
  } else if (operator == '-') {
    return num1 - num2;
  } else if (operator == '*') {
    return num1 * num2;
  } else if (operator == '/') {
    return num1 / num2;
  } else if (operator == '&') {
    return `error - invalid operator`;
  }
};

let result = calculator(3, 4, '/');
console.log(result);

// switch case
const calculatorCase = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    case '&':
      return `error - invalid operator`;
  }
};

result = calculatorCase(3, 4, '&');
console.log(result);
