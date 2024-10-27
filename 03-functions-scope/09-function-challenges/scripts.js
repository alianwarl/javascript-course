// Challenge 1 - getCelsius
const getCelsius = (Fahrenheit) => ((Fahrenheit - 32) * 5) / 9;
console.log(`The temperature is ${getCelsius(42)}\xB0C`);

// Challenge 2 - minMax()
const minMax = (...arr) => {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return { min: min, max: max };
};

console.log(minMax(4, 19, 3));

// Challenge 3 -
((length, width) => {
  console.log(
    `The area of the rectange with a length of ${length} and width of ${width} is ${
      length * width
    }.`
  );
})(10, 5);
