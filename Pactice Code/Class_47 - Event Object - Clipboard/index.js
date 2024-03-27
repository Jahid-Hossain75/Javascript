
// Event Object - Clipboard

// oncopy
// oncut
// onpaste


const input = document.querySelector("input");
const para = document.querySelector("p");

//  copy event
input.addEventListener("copy", function(e){
    para.innerText = "You have copied";
    para.style.color = "red";
});

// cut event
input.addEventListener("cut", function(e){
    para.innerText = "You have cut";
    para.style.color = "blue";
});

//  paste event
input.addEventListener("paste", function(e){
    para.innerText = "You have pasted";
    para.style.color = "green";
});