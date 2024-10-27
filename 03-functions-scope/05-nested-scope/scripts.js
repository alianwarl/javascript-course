function add(num1, num2) {
  const add_number = num1 + num2;

  const exponent_result = exponent(add_number, 2);

  function exponent(add_number, exponent_num) {
    return add_number ** exponent_num;
  }

  return exponent_result;
}

const result = add(3, 4);
console.log(result);
