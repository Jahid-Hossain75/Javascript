
// ES6 modules and class
import {text, setText} from './module.js';
console.log(text);
setText("Hello Google!");
console.log(text);




// create class

class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // set function
    set studentName(name){
        this.name = name;
    }
    // get function
    get studentInfo(){
        return this.name + " " + this.age;
    }
}

let student_1 = new Student("Jahid", 22);
console.log(student_1); // print student details
console.log(student_1.name); // print student name
console.log(student_1.age); // print student age;

// set function
student_1.studentName = "Hossain";
console.log(student_1.name); // print student name

// call get function
console.log(`Student Info: ${student_1.studentInfo}`);