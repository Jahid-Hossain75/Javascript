// Array Methods
// find (callback, value) return the value of the first element that pass certain condition
// findIndex(callback, value) return the index of the first element that pass certain condition



// find method - array
let numbers = [11, 13, 16, 19, 22];
let firstEvenNumber = numbers.find(x => x%2 === 0);
console.log(`Find Even Number: ${firstEvenNumber}`);


// findIndex method - array
let numbers2 = [11, 13, 16, 19, 22];
let firstEvenNumberIndex = numbers2.findIndex(x => x % 2 == 0);
console.log(`Find Index Number: ${firstEvenNumberIndex}`);



// find method - object

let student = [
    { id: 101, age: 18 },
    { id: 102, age: 23 },
    { id: 103, age: 19 },
    { id: 103, age: 21 }
];
console.log(student.find(x => x.age >= 20));
console.log(student.findIndex(y => y.age >= 20));