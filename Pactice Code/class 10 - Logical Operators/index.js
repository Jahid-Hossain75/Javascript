
// Logical Operator

var marks = 70;

if(marks > 100 || marks < 0){
    document.write("Invalid Marks");
}
else if(marks >= 80 && marks <= 100){
    document.write("A+");
}
else if(marks >= 70 && marks <= 79){
    document.write("A");
}
else if(marks >= 60 && marks <= 69){
    document.write("A-");
}
else if(marks >= 50 && marks <= 59){
    document.write("B");
}
else if(marks >= 40 && marks <= 49){
    document.write("C");
}
else if(marks >= 33 && marks <= 39){
    document.write("D");
}
else{
    document.write("Fail");
}
document.write("<br><br><br>");






// Logical AND operator &&
// var num1 = prompt("Enter num1: ");
var num1 = 25;
var num2 = 20;
var num3 = 25;

if(num1 > num2 && num1 > num3){
    document.write("Large Number: " + num1);
}
else if(num2 > num1 && num2 > num3){
    document.write("Large Number: " + num2);
}
else{
    document.write("Large Number: " + num3);
}

document.write("<br><br><br>");





// Logical OR Operator ||
var letter = prompt("Enter a letter: ");
letter = letter.toLocaleLowerCase();
if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
    document.write("Vowel");
}else{
    document.write("Consonant");
}