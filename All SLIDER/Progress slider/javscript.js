//Javascript

var slider = document.querySelector(".slider");
var selector = document.querySelector(".selector");
var selectValue = document.querySelector(".selectValue");
var progressbar = document.querySelector(".progressbar");

selectValue.innerHTML = slider.value;

slider.oninput = function(){
    selectValue.innerHTML = this.value;
    selector.style.left = this.value + "%";
    progressbar.style.width = this.value + "%";
}



















