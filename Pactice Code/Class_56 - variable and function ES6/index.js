
// variable and function ES6

// ES5
var x = 5;
if(true){
    var x = 6;
}
console.log(x);



//  ES6
let y = 7;
if(true){
    let y = 5;
}
console.log(y);

// ES6 using let
let z = 10;
for(let z=1; z<=5; z++){
    console.log(z);
}
console.log(z);


// ES6 using const = will not change the value
// const r = 10;
// if(true){
//     r = 12;
// }
// console.log(r);



// string concatenation ES6 = step 1
let firstName ="Jahid";
let lastName = "Hossain";
console.log(`Full Name is ${firstName + ` ` + lastName}`);


// string concatenation ES6 = step 2
let fullName = `Jahid Hossain`;
let message = `Hi, I'm ${fullName} a professional frontend web developer`;
console.log(message);



// ES5 function declarations
function add(a, b){
    var sum2 = a + b;
    console.log(sum2);
}
add(20, 30);




// ES6 function declarations = step 1
const add3 = (f,g) => {
    let sum3 = f+g;
    console.log(sum3);
};
add3(10, 15);


// ES6 function declarations = step 2
const add4 = (i, j) => {
    let sum4 = i + j;
    return sum4;
}
console.log(add4(20, 20));