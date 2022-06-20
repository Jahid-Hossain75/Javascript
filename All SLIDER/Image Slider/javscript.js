//Javascript
const slides = document.querySelector('.slide_item').children;
const nextBtn = document.querySelector('.nextbtn');
const prevBtn = document.querySelector('.prevbtn');
const totalSlider = slides.length;
var index = 0;

nextBtn.onclick = function () {
    next("next");
}

prevBtn.onclick = function () {
    next("prev");
}

function next(direction) {
    if (direction == "next") {
        index++;
        if (index == totalSlider) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = totalSlider - 1;
        } else {
            index--;
        }
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}

