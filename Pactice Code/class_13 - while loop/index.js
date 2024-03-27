

// while loop - addition 1 to 5
var i = 1;
var sum = 0;
while (i <= 5) {
    sum = sum + i;
    i = i + 1;
}
document.write("Sum = " + sum);
document.write("<br><br><br>")




// Find the sum of the positive numbers between 1 and 50 that are divisible by 3 and 5 and end in 0.
var i = 1;
var sum = 0;
while (i <= 50) {
    if(i % 3 == 0 && i % 5 == 0){
        document.write(" " + i + ",");
        sum = sum + i;
    }
    i = i + 1;
}
document.write(" = " + sum);
