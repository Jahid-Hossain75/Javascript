
// Array Library Methods
var names = ['jahid', 'sakib', 'rana'];
document.write(names);
document.write("<br><br>");


// shift opposite of pop
names.shift();
document.write(names);
document.write("<br><br>");


// unshift opposite of push
names.unshift("Rakib");
document.write(names);
document.write("<br><br>");



// splice methods
// adding elements using splice
names.splice(1, 0, 'Jahid', 'Abid');
document.write(names);
document.write("<br><br>");


// removing elements using splice
names.splice(1, 2);
document.write(names);
document.write("<br><br>");


// adding elements using splice
names.splice(1, 0, 'Jahid', 'Abid');
document.write(names);
document.write("<br><br>");



// sorting array name
var sortArray = names.sort();
document.write("<b>Sorting array Name: </b>" + sortArray);
document.write("<br><br>");



// sorting array number
var numbers = [15, 12, 20, 25, 23, 50];
numbers.sort(function(a, b){
    return a-b;
})
document.write("<b>Sorting array Number: </b>"+numbers);
