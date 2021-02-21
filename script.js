console.log('connected');
//  String, numbers,Boolean,null,


// const card = {
//  name:'Peter',
//  age:25,
//  driving: true,
//  rating: 4.5,
// }
// const hello = `My name is ${name} and I am ${age}`;

// console.log(hello);

const word = 'Hello world'

console.log(word.length);
// 11

console.log(word[0]);
// H

console.log(word[10]);
// d

console.log(word.substring(0,5))
// Hello


// Arrays  = variables that hold multiple values

const numbers = (1,2,3,4,5,6)

console.log(numbers);
// 6

const fruits = ['apples','oranges','pears']


console.log(fruits[1])
// oranges

console.log(fruits.length)
// 3

// To find if an item is in array

console.log(Array.isArray(fruits))


// Objects loiterals

const person = {
    firstName: 'Kevin',
    lastName:'Tri',
    age: 25,
    hobbies: ['music','movies','sports','swimming'],
    // indeded Object,
    home: {
        street: '5th Ave st',
        city: 'Los-Angeles',
        stata: 'Ca',

    }
};

// Destructuring Method formula

 person.email = 'kevintri@gmail.com';

console.log(person);


// Accessing a single value

console.log(person.age);
// 25

console.log(person.hobbies);

// music,movies,sports,swimming





