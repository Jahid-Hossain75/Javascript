// Control statement

// Even/Odd Program
var num = 5;
if(num % 2 == 0){
    document.write("Even");
}else{
    document.write("Odd");
}
document.write("<br><br>")




// If, Else If, Else
var num = 1;
if(num == 1){
    document.write("One");
}
else if(num == 2){
    document.write("Two");
}
else{
    document.write("Others");
}


document.write("<br><br><br>");





// Letter Grade
var marks = prompt("Enter your marks: ");

if(marks >= 80){
    document.write("This is marks: " + marks + " Grade Point:" + "A+");
}
else if(marks >= 70){
    document.write("This is marks: " + marks + " Grade Point:" + "A");
}
else if(marks >= 60){
    document.write("This is marks: " + marks + " Grade Point:" + "A-");
}
else if(marks >= 50){
    document.write("This is marks: " + marks + " Grade Point:" + "B");
}
else if(marks >= 40){
    document.write("This is marks: " + marks + " Grade Point:" + "C");
}
else if(marks >= 33){
    document.write("This is marks: " + marks + " Grade Point:" + "D");
}
else{
    document.write("This is marks: " + marks + " Grade Point:" + "F");
}
