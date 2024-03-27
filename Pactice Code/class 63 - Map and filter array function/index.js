// Map and filter array function

// map function
var numbers = [5, 10, 15];
var squareNum = numbers.map(function (x){
    return x*x;
});
console.log(squareNum);





// filter function
var num = [10, 13, 15, 18, 20, 21, 22];
var newNumber = num.filter(function(i){
    // return greater than 15
    return i>15;
});
console.log(newNumber);