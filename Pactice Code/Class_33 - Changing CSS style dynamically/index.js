
// css style
// 1st style
// var add_btn = document.getElementById("paraId");
// function addbtn(){
//     add_btn.style.color = "red";
//     add_btn.style.fontSize = "25px";
// }
// function removebtn(){
//     add_btn.style.color = "black";
//     add_btn.style.fontSize = "16px";
// }




// second style
var add_btn = document.getElementById("paraId");
function addbtn(){
    add_btn.classList.add("para_style");
}

function removebtn(){
    add_btn.classList.remove("para_style");
}