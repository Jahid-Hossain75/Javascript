
// normal function - step 1
function addNumber(x, y, z){
    return x + y + z;
}
let numbers = [2,3,5];
console.log(addNumber(numbers[0], numbers[1], numbers[2]));




// normal function - step 2
let r = [0, 1, 2];
let t = [3, 4, 5];
let i = r.concat(t);
console.log(i);




// Spread operator - step 1
function addNumber_2(a, b, c){
    return a + b + c;
}
let numbers_2 = [4,3,5];
console.log(addNumber_2(...numbers_2));




// Spread operator - step 2
let num1 = [1,2,3];
let num2 = [4, 5,6];
let num3 = [...num1, ...num2];
console.log(num3);




// Spread operator - step 3
let num4 = [7, ...num1, 8, 9, ...num2];
console.log(num4);




// Spread operator and object
let p = {
    name: 'Peter',
    age: 25,
};
let q = {
    city: 'Dhaka',
    nationality: 'Bangladesh'
};
let g = {...p, ...q};
console.log(g);

