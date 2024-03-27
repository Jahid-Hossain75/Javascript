
for (let index = 0; index <= 10; index++) {
    document.write(" <b>" + index + "</b>");
}
document.write("<h1>"+"End"+"</h1>");
document.write("<br><br><br>");



var m = parseInt(prompt("Enter the Starting number: "));
var n = parseInt(prompt("Enter the End number: "));
var sum = 0;
for (var x = m; x <= n; x = x+1) {
    sum = sum + x;
}
document.write("<b>Sum: </b>" + sum);