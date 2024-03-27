
// Event Listeners with multiple elements
document.querySelectorAll(".myButton")[0].addEventListener("click", function(){
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + " is Clicked";
});

document.querySelectorAll(".myButton")[1].addEventListener("click", function(){
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + " is Clicked";
});

document.querySelectorAll(".myButton")[2].addEventListener("click", function(){
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + " is Clicked";
});




// second step
var all_btn = document.querySelectorAll(".my_Button").length;
for(var i=0; i<all_btn; i++){
    document.querySelectorAll(".my_Button")[i].addEventListener("click", function(){
        var text2 = this.innerHTML;
        document.querySelector(".second_tag").innerHTML = text + " is Clicked";
    });
}