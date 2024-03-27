// traditional function step - 1
function myFunction(){
    console.log("I am a traditional function");
}
myFunction();



// traditional function step - 2
function myFunction2(){
    return "I am a traditional function 2";
}
console.log(myFunction2());





// pass the parameter using traditional function step - 3
function myFunction3(num1, num2){
    return num1 + num2;
}
console.log(myFunction3(20, 10));




// traditional function object data step - 4
var studentDetails = [
    { id: 1, name: 'John', age: 20, gpa: 3.25 },
    { id: 2, name: 'Jane', age: 18, gpa: 3.25},
    { id: 3, name: 'Oliver', age: 23, gpa: 3},
    { id: 4, name: 'Mary', age: 19, gpa: 2.54},
    { id: 5, name: 'Peter', age: 22, gpa: 2.88},
    { id: 6, name: 'Lisa', age: 21, gpa: 2.99},
    { id: 7, name: 'Sarah', age: 19, gpa: 3.52 },
    { id: 8, name: 'Nancy', age: 20, gpa: 3.89 }
];

// function
function studentData(){
    return studentDetails.filter(function(x){
        return x.gpa >= 3;
    }).map(function(y){
        return y.name;
    });
}
// call the function
console.log(studentData());




//  arrow function - step 1
const arrowFunction = () =>{
    console.log("I am a arrow function");
}
arrowFunction();



// arrow function for 1 statement - step 2
const arrowFunction2 = () => console.log("I am a arrow function 2");
arrowFunction2();




// arrow function step 3
const arrowFunction3 = () =>{
    return "I am a arrow function 3";
}

console.log(arrowFunction3());




// arrow function not using return keyword step - 4
const arrowFunction4 = () =>
"I am a arrow function 4";
console.log(arrowFunction4());





// pass the parameter using arrow function step - 5
const arrowFunction5 = (number1, number2) => {
    return number1 + number2;
}
console.log(arrowFunction5(5, 7));





// arrow function with filter and map
// array
var student = [
    { id: 1, name: 'John', age: 20, gpa: 3.25 },
    { id: 2, name: 'Jane', age: 18, gpa: 3.25},
    { id: 3, name: 'Oliver', age: 23, gpa: 3},
    { id: 4, name: 'Mary', age: 19, gpa: 2.54},
    { id: 5, name: 'Peter', age: 22, gpa: 2.88},
    { id: 6, name: 'Lisa', age: 21, gpa: 2.99},
    { id: 7, name: 'Sarah', age: 19, gpa: 3.52 },
    { id: 8, name: 'Nancy', age: 20, gpa: 3.89 }
];

function studentName(){
    return student.filter((x) => x.gpa >= 3).map((y)=> y.name);
}
// call the function
console.log(studentName());