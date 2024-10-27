// && will return the first falsey value or last value
let a = 10 && 20; // 20
let b = 10 && '' && 20; // ''
let c = 10 && 15 & 0 && 30; // 0

console.log(a, b, c);

// use case
const posts = [];
posts.length > 0 && console.log('Posts have values'); // since posts.length is false, it will not evaluate the right operant

// || will return the first truthy value or last value
let d = 10 || 20;
let e = 0 || 20;
let f = 0 || null || '' || undefined;

// ?? will return right side operant when left side is null or undefined
let g = undefined ?? 20;
let h = null ?? 30;
let i = 0 ?? 40;
console.log(g, h, i);
