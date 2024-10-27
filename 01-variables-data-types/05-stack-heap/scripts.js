// Values are stored on the stack
const name = 'John';
const age = 30;

// Reference values are stored on the heap
const person = {
    name: 'Brad',
    age: 40,
    gender: 'M'
};

let newName = name;
newName = 'Sarah';

let newPerson = person;
newPerson.name = 'Sarah';
newPerson.gender = 'F'

console.log(name, newName);
console.log(person, newPerson);