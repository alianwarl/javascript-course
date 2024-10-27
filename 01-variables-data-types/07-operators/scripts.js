// 1. Arithmetic Operators

let x;

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 7 % 5; // 5 goes into 7 once

// Concatenation
x = 'Hello' + ' ' + 'World';

// Exponent
x = 2 ** 3;

// Increment
x = 1;
// x = x + 1;
x++;

// Decrement
// x = x - 1;
x--;

// 2. Assignment Operators

x = 10;

x += 5;
x -= 5;
x *= 5;
x /= 5;
x %- 5;
x **= 5

// 3. Comparison Operators
// == does not test the type
// === does test the type
x = 2 == '2'; // assign x value 5 and compare if 5 is equal to 5.
x = 2 === '2';

x = 2 !== '2'; // true 2 is not equal to '2'
x = 2 !== 2; // false 2 is equal to 2

x = 10 > 5;
x = 10 < 5;
x = 10 <= 5;
x = 10 >= 5;

console.log(x);
