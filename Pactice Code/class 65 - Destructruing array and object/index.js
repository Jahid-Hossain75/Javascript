// array destructure
let numbers = [10, 20, 30, 40, 50];
let [num1, num2, num3, num4, num5] = numbers;
console.log(num1);
console.log(num2);




// swap variable = destructure
let a = 100;
let b = 200;
[b, a] = [a, b];
console.log(a);
console.log(b);





// object destructure
const studentInfo = {
    id: 101,
    name: "John",
    age: 20,
    cgpa: 3.5,
    language: {
        native : "English",
        spoken : "Bangla"
    }
};

const {id, name, language} = studentInfo;

console.log(id);
console.log(name);
console.log(studentInfo.age); // traditional
console.log(language); // print all language property
console.log(language.spoken); // print language spoken property







// function parameters
const studentDetails = (students) => {
    console.log(`${students.id}, ${students.fullName}`);
}

// object
const students = {
    id: 101,
    fullName: "Jahid Hossain"
}
studentDetails(students);






// destructuring function parameters

const studentDetails2 = (id, name) => {
    console.log(`${id}, ${name}`);
}

// object
const students2 = {
    id: 102,
    fullName: "MD Jahid Hossain"
}
studentDetails(students2);