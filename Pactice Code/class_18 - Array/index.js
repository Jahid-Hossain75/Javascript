
// Array 1
var names = new Array(5);
names[0] = "jahid";
names[1] = "Rana";
names[2] = "Sakib";
names[3] = "Abid";
names[4] = "Rakib";
document.write(names[2]);
document.write("<br>")



// Array 2
var names2 = ["Razu", " Saju", " Musfik", " Shimul"];
document.write(names2[1]);
document.write("<br>");
names2.push(" Asik");


document.write(names2);
document.write("<br>");
names2.pop();
document.write(names2);
document.write("<br><br>");




// Array 3
var country1 = ["Bangladesh", "India"];
var country2 = ["Pakistan", "Nepal"];

var country = country1.concat(country2);
document.write(country);