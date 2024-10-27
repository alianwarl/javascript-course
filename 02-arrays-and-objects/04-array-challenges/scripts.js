// Challenge 1
const arr = [1, 2, 3, 4, 5];
arr.unshift(0);
arr.push(6);
arr.reverse();
console.log(arr);

// Challenge 2
let arr3;
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

arr1.splice(4, 1);
arr3 = [...arr1, ...arr2];
console.log(arr3);

// Challenge 3
