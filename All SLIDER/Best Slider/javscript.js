//Javascript
//auto play slider
/*
setInterval(function () {
    if (document.getElementsByClassName("myslider")[0].classList.contains("active")) {
        document.getElementsByClassName("myslider")[1].classList.add("active");
        document.getElementsByClassName("myslider")[0].classList.remove("active");
        document.getElementsByClassName("dot")[1].classList.add("active");
        document.getElementsByClassName("dot")[0].classList.remove("active");

    } else if (document.getElementsByClassName("myslider")[1].classList.contains("active")) {
        document.getElementsByClassName("myslider")[2].classList.add("active");
        document.getElementsByClassName("myslider")[1].classList.remove("active");
        document.getElementsByClassName("dot")[2].classList.add("active");
        document.getElementsByClassName("dot")[1].classList.remove("active");

    } else if (document.getElementsByClassName("myslider")[2].classList.contains("active")) {
        document.getElementsByClassName("myslider")[3].classList.add("active");
        document.getElementsByClassName("myslider")[2].classList.remove("active");
        document.getElementsByClassName("dot")[3].classList.add("active");
        document.getElementsByClassName("dot")[2].classList.remove("active");

    } else if (document.getElementsByClassName("myslider")[3].classList.contains("active")) {
        document.getElementsByClassName("myslider")[4].classList.add("active");
        document.getElementsByClassName("myslider")[3].classList.remove("active");
        document.getElementsByClassName("dot")[4].classList.add("active");
        document.getElementsByClassName("dot")[3].classList.remove("active");

    } else if (document.getElementsByClassName("myslider")[4].classList.contains("active")) {
        document.getElementsByClassName("myslider")[0].classList.add("active");
        document.getElementsByClassName("myslider")[4].classList.remove("active");
        document.getElementsByClassName("dot")[0].classList.add("active");
        document.getElementsByClassName("dot")[4].classList.remove("active");
    }
}, 6000);


//nextBtn click slider

function nextBtn(){
    if (document.getElementsByClassName("myslider")[0].classList.contains("active")) {
        document.getElementsByClassName("myslider")[1].classList.add("active");
        document.getElementsByClassName("myslider")[0].classList.remove("active");
        document.getElementsByClassName("dot")[1].classList.add("active");
        document.getElementsByClassName("dot")[0].classList.remove("active");

    } else if (document.getElementsByClassName("myslider")[1].classList.contains("active")) {
        document.getElementsByClassName("myslider")[2].classList.add("active");
        document.getElementsByClassName("myslider")[1].classList.remove("active");
        document.getElementsByClassName("dot")[2].classList.add("active");
        document.getElementsByClassName("dot")[1].classList.remove("active");

    } else if (document.getElementsByClassName("myslider")[2].classList.contains("active")) {
        document.getElementsByClassName("myslider")[3].classList.add("active");
        document.getElementsByClassName("myslider")[2].classList.remove("active");
        document.getElementsByClassName("dot")[3].classList.add("active");
        document.getElementsByClassName("dot")[2].classList.remove("active");

    } else if (document.getElementsByClassName("myslider")[3].classList.contains("active")) {
        document.getElementsByClassName("myslider")[4].classList.add("active");
        document.getElementsByClassName("myslider")[3].classList.remove("active");
        document.getElementsByClassName("dot")[4].classList.add("active");
        document.getElementsByClassName("dot")[3].classList.remove("active");

    } else if (document.getElementsByClassName("myslider")[4].classList.contains("active")) {
        document.getElementsByClassName("myslider")[0].classList.add("active");
        document.getElementsByClassName("myslider")[4].classList.remove("active");
        document.getElementsByClassName("dot")[0].classList.add("active");
        document.getElementsByClassName("dot")[4].classList.remove("active");
    }
}


//prevBtn click slider

function prevBtn(){
    if (document.getElementsByClassName("myslider")[0].classList.contains("active")) {
        document.getElementsByClassName("myslider")[4].classList.add("active");
        document.getElementsByClassName("myslider")[0].classList.remove("active");
        document.getElementsByClassName("dot")[4].classList.add("active");
        document.getElementsByClassName("dot")[0].classList.remove("active");

    } else if (document.getElementsByClassName("myslider")[4].classList.contains("active")) {
        document.getElementsByClassName("myslider")[3].classList.add("active");
        document.getElementsByClassName("myslider")[4].classList.remove("active");
        document.getElementsByClassName("dot")[3].classList.add("active");
        document.getElementsByClassName("dot")[4].classList.remove("active");

    } else if (document.getElementsByClassName("myslider")[3].classList.contains("active")) {
        document.getElementsByClassName("myslider")[2].classList.add("active");
        document.getElementsByClassName("myslider")[3].classList.remove("active");
        document.getElementsByClassName("dot")[2].classList.add("active");
        document.getElementsByClassName("dot")[3].classList.remove("active");

    } else if (document.getElementsByClassName("myslider")[2].classList.contains("active")) {
        document.getElementsByClassName("myslider")[1].classList.add("active");
        document.getElementsByClassName("myslider")[2].classList.remove("active");
        document.getElementsByClassName("dot")[1].classList.add("active");
        document.getElementsByClassName("dot")[2].classList.remove("active");

    } else if (document.getElementsByClassName("myslider")[1].classList.contains("active")) {
        document.getElementsByClassName("myslider")[0].classList.add("active");
        document.getElementsByClassName("myslider")[1].classList.remove("active");
        document.getElementsByClassName("dot")[0].classList.add("active");
        document.getElementsByClassName("dot")[1].classList.remove("active");
    }
}

*/




const myslide = document.querySelectorAll('.myslider'),
      dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 3000);
function autoslide(){
    counter += 1;
    slidefun(counter);
}

function plusSlides(n){
    counter += n;
    slidefun(counter);
    resetTimer();
}

function currentSlide(n){
    counter = n;
    slidefun(counter);
    resetTimer();
}

function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoslide, 3000);
}

function slidefun(n){
    let i;
    for(i = 0;i<myslide.length;i++){
        myslide[i].style.display = "none";
    }
    for(i = 0;i<dot.length;i++){
        dot[i].classList.remove('active');
    }
    if(n > myslide.length){
        counter = 1;
    }
    if(n < 1){
        counter = myslide.length;
    }
    myslide[counter - 1].style.display = "block";
    dot[counter -1].classList.add('active');
}










