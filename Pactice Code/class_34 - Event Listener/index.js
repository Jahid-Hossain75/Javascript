// find id
var mybtn_func = document.getElementById("mybtn");
// click event
mybtn_func.addEventListener("click", myfunction);
function myfunction(){
    mybtn_func.classList.add("my_btn");
}



// find id
var bangladesh_text = document.getElementById("bangladesh");
// mouseover event
bangladesh_text.addEventListener("mouseover", function(){
    bangladesh_text.classList.add("bangladesh");
});

// mouseout event
bangladesh_text.addEventListener("mouseout", function(){
    bangladesh_text.classList.remove("bangladesh");
});