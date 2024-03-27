
// Browser Object Model - Popup boxes
// Popup boxes - alert, confirm, prompt

// confirm function
// function deleteFunction(){
//     let value = confirm("Are you sure");
//      if(value){
//          console.log('You clicked on OK');
//      }else{
//         console.log('You clicked on Cancel');
//      }
// }

// // call function
// deleteFunction();






// prompt function
function promptFunction() {
    // create h1 element
    var h1 = document.createElement("h1");
    var text;
    let name = prompt("Enter your name");
    if(name == null || name == '') {
        text = "No name Found";
    }else{
        text = "Welcome " + name;
    }

    var textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    // Added element to the body
    document.body.appendChild(h1);
}

// call the function
promptFunction();




