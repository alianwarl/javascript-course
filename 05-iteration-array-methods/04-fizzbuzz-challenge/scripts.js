// 1.) log numbers 1 to 100
// 2.) if number is a multiple of 3, log 'Fizz'
// 3.) if number is a multiple of 5, log 'Buzz'
// 4.) if number is a multiple of 3 and 5, log 'FizzBuzz'

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz');
  } else if (i % 3 == 0) {
    console.log('Fizz');
  } else if (i % 5 == 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
