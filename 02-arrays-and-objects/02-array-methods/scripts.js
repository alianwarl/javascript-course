let x;

const arr = [34, 55, 95, 20, 15];

// arr.push(100);

// arr.pop();

// arr.unshift(99); // add to beginning

// arr.shift(); // remove from beginning

// arr.reverse();

x = arr.includes(200); // checks if value is in array

x = arr.indexOf(95); // -1 if value doesn't exist

x = arr.slice(1, 4); // stop before the 2nd argument (i.e., 2)

// x = arr.splice(1, 4); // changing the array by removing the defined values

// x = arr.splice(1, 3);

x = arr.splice(1, 4).reverse().toString().charAt(0);

// [34, 55, 95, 20, 15] // splice(1, 4)
// [55, 95, 20, 15] // splice result
// [15, 20, 95, 55] // reverse
// [15] // charAt(0)

console.log(x);
