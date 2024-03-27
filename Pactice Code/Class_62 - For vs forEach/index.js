// for vs forEach

// for loop
var numbers = [10, 30, 20, 40];
for(var i = 0; i<numbers.length; i++) {
    console.log(numbers[i]);
}



// forEach loop = step 1
var names = ["Jahid", "Sakib", "Abid", "Rabiul"];
names.forEach(myFunction);
function myFunction(x){
    console.log(x);
}



// forEach loop = step 2
var num = [15, 25, 35, 45];
num.forEach(function(y){
    console.log(y);
});




// square forEach array number
var num_2 = [3, 6, 9, 12];
var square_num = [];
num_2.forEach(function(j){
    square_num.push(j*j);
});
console.log(square_num);





// forEach array number items +5
var number_arr = [1, 2, 3, 4, 5];
number_arr.forEach(function(k,index,arr){
    arr[index] = k+5;
});
console.log(number_arr);