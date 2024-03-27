
// for of and for in loop

// for of loop
const number = [30, 20, 10];
for(let num of number) {
    console.log(num);
}




// for in loop
let students = {
    name : "Jahid",
    age : 22,
    cgpa : 3.80,
    subject : ['bangla', 'english']
}
for(let x in students){
    console.log(x); // print variable
    // console.log(students[x]); // print value
    // console.log(`${x} : ${students[x]}`); // print variable with value
}