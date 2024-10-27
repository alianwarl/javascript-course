// ||= assigns the right side value only if the left side is falsey

let a = false;

// if (!a) {
//   a = 10;
// }

a = a || 10;
a ||= 10;

console.log(a);

// &&= asigns the right side value only if the left side is truthy
let b = true;

// if (!b) {
//   b = 10;
// }

b = b && 20;
b &&= 20;

console.log(b);

// ??= assigns the right side value only if the left side is null or undefined
let c = null;

// if (c === null || c === undefined) {
//   c = 20;
// }

c = c ?? 30; // since c is null it will return 30

console.log(c);
