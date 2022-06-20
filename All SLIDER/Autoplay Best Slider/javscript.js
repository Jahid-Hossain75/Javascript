//Javascript

const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicator = document.querySelector(".indicator");
let index = 0;

//prevSlide
prev.addEventListener("click",function(){
    prevSlide();
    updateCircleIndicator();
    resetTimer();
})

//nextSlide
next.addEventListener("click",function(){
    nextSlide();
    updateCircleIndicator();
    resetTimer();
})

//prevSlide
function prevSlide(){
    if(index==0){
        index=slides.length-1;
    }
    else{
        index--;
    }
    changeSlide();
}

//nextSlide
function nextSlide(){
    if(index==slides.length-1){
        index=0;
    }
    else{
        index++;
    }
    changeSlide();
}

//changeSlide
function changeSlide(){
    for(let i=0; i< slides.length; i++){
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}

//creat circle indicators
function circleIndicator() {
    for(let i = 0; i < slides.length; i++) {
        const div = document.createElement("div");
        div.innerHTML = i + 1;
        div.setAttribute("onclick", "indicateSlider(this)")
        if (i == 0) {
            div.className = "active";
        }
        indicator.appendChild(div);
    }
}
circleIndicator();

function indicateSlide(element){
    index = element.id;
    changeSlide();
    updateCircleIndicator();
    resetTimer();
}

//update circle Indicator
function updateCircleIndicator(){
    for(let i=0; i< indicator.children.length; i++){
        indicator.children[i].classList.remove("active");
    }
    indicator.children[index].classList.add("active");
}

//autoPlay
function autoPlay(){
    nextSlide();
    updateCircleIndicator();
}

let timer=setInterval(autoPlay,5000);

function resetTimer(){
    clearInterval(timer);
    timer=setInterval(autoPlay,5000);
}




