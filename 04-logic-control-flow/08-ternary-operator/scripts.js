const age = 19;

// Ternary operator
// 1.) Condition -> age >= 18
// 2.) If statement -> console.log('You can vote')
// 3.) else statement -> console.log('You cannot vote')
age >= 18 ? console.log('You can vote') : console.log('You cannot vote');

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote!' : 'You cannot vote';
console.log(canVote);
console.log(canVote2);

// Multiple statements
const auth = true;

const redirect = auth
  ? (alert('Welcome to the dashboard'), '/dashboard')
  : (alert('Access denied'), '/login');

auth && console.log('Welcome to the dashboard');
