// how to create an object
// how to print the value of on object

// Create Object
// 1st style = object
var student1 = {
    name : "jahid",
    age : 23,
    cgpa : 3.80,
    subject : ['bangla', 'english']
}
var student2 = {
    name : "Sakib",
    age : 24,
    cgpa : 3.50,
    subject : ['bangla', 'english']
}
console.log(student1.name);
console.log(student2.name);





// how to create an object
// how to print the value of on object
// adding a constructor

// 2nd style = object
function student(name, age, cgpa, lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;
}

var student4 = new student("Rana", 30, 3.55, ['Bangla', 'English']);
var student5 = new student("Abid", 23, 3.65, ['Bangla', 'Hindi']);
var student6 = new student("Emon", 30, 3.75, ['Hindi', 'English']);

console.log(student4.name);
console.log(student5.age);
console.log(student5.cgpa);
console.log(student6.lang);





// how to create an object
// how to print the value of on object
// adding a constructor
// adding function inside a constructor

// 3rt style = object
function All_student(name, age, cgpa, lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }
}

var student7 = new All_student("Rana", 30, 3.55, ['Bangla', 'English']);
var student8 = new All_student("Abid", 23, 3.65, ['Bangla', 'Hindi']);
var student9 = new All_student("Emon", 30, 3.75, ['Hindi', 'English']);

student8.display();