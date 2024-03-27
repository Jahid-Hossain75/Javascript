

// Array Loop = 1
var num = [5, 10, 15, 20, 25];
var sum = 0;
for(var i=0; i<5; i++){
    document.write(num[i]+ ", ");
    sum = sum + num[i];
}
document.write("<br>");
document.write("Sum = "+sum);
document.write("<br><br><br>");




// Array Loop = 2
var num2 = new Array();
sum2 = 0;
for(var i=0; i<5; i++){
    num2[i] = parseInt(prompt("Enter a number: "));
}

for(var j=0; j<5; j++){
    document.write(num2[j]+ ", ");
    sum2 = sum2 + num2[j];
}
document.write("<br>")
document.write("Sum = "+sum2);