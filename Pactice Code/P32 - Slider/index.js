

// slider
var sliderImage = ["image/img-1.jpg", "image/img-2.jpg", "image/img-3.jpg"]
var img_tag = document.querySelector("img");

var count = 0;
function next_btn(){
    count++;
    if(count >= sliderImage.length){
        count=0;
        img_tag.src = sliderImage[count];
    }else{
        img_tag.src = sliderImage[count];
    }
}

function previous_btn(){
    count--;
    if(count < 0){
        count=sliderImage.length - 1;
        img_tag.src = sliderImage[count];
    }else{
        img_tag.src = sliderImage[count];
    }
}