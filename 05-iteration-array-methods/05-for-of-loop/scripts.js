// loop through arrays
items = ['keys', 'watch', 'jacket', 'book'];
names = [
  { name: 'Brad' },
  { name: 'Kate' },
  { name: 'Steve' },
  { name: 'Tom' },
];

// for (const item of items) {
//   console.log(item);
// }

for (const name of names) {
  console.log(name.name);
}

// loop through strings
const state = 'Mississippi';

for (const index in state) {
  console.log(state[index]);
}

// loop through Maps
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
  console.log(key, value);
}
