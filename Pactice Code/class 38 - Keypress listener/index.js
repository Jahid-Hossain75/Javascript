
var all_btn = document.querySelectorAll(".mybutton").length;
for(var i=0; i<all_btn; i++){
    document.querySelectorAll(".mybutton")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        // call audio function
        playAudio(text);
        // call animation function
        playAnimation(text);
    });
}

// play audio function
function playAudio(text){
    // using switch loop
    switch (text) {
        case "A":
        case "a":
            var audio = new Audio("audio/a.mp3");
            audio.play();

            setTimeout(function() {
                audio.pause();
            }, 1500);
            break;
    
        case "B":
        case "b":
            var audio = new Audio("audio/b.mp3");
            audio.play();

            setTimeout(function() {
                audio.pause();
            }, 1500);
            break;

        case "C":
        case "c":
            var audio = new Audio("audio/c.mp3");
            audio.play();

            setTimeout(function() {
                audio.pause();
            }, 1500);
            break;
    }
}

// animation function
function playAnimation(text){
    switch (text) {
        case "A":
        case "B":
        case "C":
        case "a":
        case "b":
        case "c":
            var selectButton = document.querySelector("."+text);
            selectButton.classList.add("anima");
            setTimeout(function() {
                selectButton.classList.remove("anima");
            }, 1500);
            break;
    }
}


// Keypress listener
document.addEventListener("keypress", function(event){
    var text = event.key;
    playAudio(text);
    playAnimation(text);
});