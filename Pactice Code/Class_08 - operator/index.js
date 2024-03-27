// Assignment Operators

var num1, num2, num3, num4, show;
// right shift assignment >
num1 = 30;
num2 = 25;
show = num1 > num2;
document.write("Right shift assignment: "+show + "<br><br>");



// left shift assignment <
show = num1 < num2;
document.write("Left shift assignment: "+show + "<br><br>");



// right shift equal assignment >=
show = num1 >= num2;
document.write("Right shift equal assignment: " + show + "<br><br>");



// left shift equal assignment <=
show = num1 <= num2;
document.write("Left shift equal assignment: " + show + "<br><br>");



// equal assignment ==
show = num1 == num2;
document.write("Equal assignment: " + show + "<br><br>");



// Equal assignment ===
show = num1 === num2;
document.write("Equal assignment: " + show + "<br><br>");



// Not equal assignment !=
show = num1 != num2;
document.write("Not Equal assignment: " + show + "<br><br>");



// Not equal assignment !==
show = num1 !== num2;
document.write("Not Equal assignment: " + show + "<br><br><br><br>");








// Logical Assignment Operators
num3 = 20;
num4 = 15;

// AND logical assignment &&
show = num1 > num2 && num3 < num4;
document.write("And Logical Assignment: " + show + "<br><br>");




// OR logical assignment ||
show = num1 > num2 || num3 < num4 || num2 < num3;
document.write("OR Logical Assignment: " + show + "<br><br>");



// not true !true
show = num1 > num2;
document.write("Not True Logical Assignment: " + !(show) + "<br><br>");



// not false !false
show = num3 < num4;
document.write("Not false Logical Assignment: " + !(show) + "<br><br>");