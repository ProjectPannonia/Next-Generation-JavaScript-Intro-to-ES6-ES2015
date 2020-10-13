////////////////////////////////////////////////////////////////////////
// Lecture: Maps

// Create new map
const question = new Map();

// Add items to the hashmap
question.set('question','What is the official name of he latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2,'ES6');
question.set(3,'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer:D');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));
console.log(question.size);

// Delete an item by key
if(question.has(4)) {
    question.delete(4);
}

// Delete all items
//question.clear();

//question.forEach((value, key) => console.log(`This is ${key}, ant it's set to ${value}`));

/*
for(let [key, value] of question.entries()) {
    (value, key) => console.log(`This is ${key}, ant it's set to ${value}`);
}*/

for(let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}:${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
