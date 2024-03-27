
// creating html element
// add html element
var heading = document.createElement("h1");
var text = document.createTextNode("This is heading 1");
heading.appendChild(text);
var my_div = document.getElementById("mydiv").appendChild(heading);


// remove html element
var heading2 = document.getElementsByTagName("h1")[0];
var my_div2 = document.getElementById("mydiv").removeChild(heading2);



// creating html element (top)
var heading5 = document.createElement("h1");
var text5 = document.createTextNode("This is heading 5");
heading5.appendChild(text5);

// find
var findTag = document.getElementsByTagName("h1")[0];
var my_div5 = document.getElementById("mydiv").insertBefore(heading5,findTag);




// create class name
document.getElementById("mydiv").classList.add("myclass");

// remove class name
document.getElementById("mydiv").classList.remove("myclass");

// view class name
document.getElementById("mydiv").classList;