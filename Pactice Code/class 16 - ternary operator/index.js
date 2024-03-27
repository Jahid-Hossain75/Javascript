

// ternary operator
var number = 3;
var result = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
document.write(result);
document.write("<br><br>");



// Find the largest number among the three numbers.
var firstNumber, secondNumber, thirdNumber, result2;
firstNumber = prompt("Enter your First Number: ");
secondNumber = prompt("Enter your Second Number: ");
thirdNumber = prompt("Enter your Third Number: ");

document.write("First Number: " + firstNumber + "<br>");
document.write("Second Number: " + secondNumber + "<br>");
document.write("Third Number: " + thirdNumber + "<br><br>");

result2 = firstNumber > secondNumber && firstNumber > thirdNumber ? firstNumber+" = is a Large Number" : secondNumber > firstNumber && secondNumber > thirdNumber ? secondNumber + " = is a Large Number" : thirdNumber + " = is a Large Number";

document.write(result2);