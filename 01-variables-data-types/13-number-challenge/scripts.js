const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;

const difference = x - y;
const differenceOutput = `${x} - ${y} = ${difference}`;

const product = x * y;
const productOutput = `${x} * ${y} = ${product}`;

const quotient = x / y;
const quotientOutput = `${x} / ${y} = ${quotient}`;

const rm = x % y;
const rmOutput = `${x} % ${y} = ${rm}`;

console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(rmOutput);