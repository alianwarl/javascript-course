function number(...numbers) {
  return numbers;
}

const number_results = number(1, 2, 3, 4, 5);
console.log(number_results);

function registerUser(credentials) {
  return `Thank you for registering. Your username is ${credentials.username} and id is ${credentials.id}`;
}

const credentials = {
  username: 'alianwar',
  id: 1,
};

const user = registerUser(credentials);
console.log(user);

// get a random number from array you pass in
// 1.) create a function and pass an array of numbers
// 2.) get a random number from the array
// 3.) return the random number

function getRandomNum(...numbers) {
  let randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[randomIndex];
}

const randomNumberResult = getRandomNum(1, 5, 8, 9);
console.log(randomNumberResult);
