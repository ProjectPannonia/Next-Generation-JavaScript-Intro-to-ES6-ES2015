///////////////////////////////////////////
// Lecture: Strings

let firstName = 'john';
let lastName = 'Smith';
const yearOfBirth = 1998;

function calculateAge(year) {
    return 2016 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calculateAge(yearOfBirth) + ' years old.');

// ES6(back-tick)
console.log(`This is ${firstName}  ${lastName}. He was born in ${yearOfBirth}. Today he is ${calculateAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith("J"));
console.log(n.endsWith("th"));
console.log(firstName.repeat(5));