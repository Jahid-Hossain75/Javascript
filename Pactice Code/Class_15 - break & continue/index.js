
//  break statement
document.write("<b>Break Statement</b> <br>");
for (var i = 1; i <= 10; i++) {
    if(i == 5){
        break;
    }
    document.write(" " +i);
}

document.write("<br><br>");



// continue statement
document.write("<b>Continue Statement</b> <br>");
for (var i = 1; i <= 10; i++) {
    if(i == 5 || i == 7){
        continue;
    }
    document.write(" " +i);
}