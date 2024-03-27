
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
            var audio = new Audio("audio/a.mp3");
            audio.play();

            setTimeout(function() {
                audio.pause();
            }, 1500);
            break;
    
        case "B":
            audio.pause();
            var audio = new Audio("audio/b.mp3");
            audio.play();

            setTimeout(function() {
                audio.pause();
            }, 1500);
            break;

        case "C":
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
    var selectButton = document.querySelector("."+text);
    selectButton.classList.add("anima");

    setTimeout(function() {
        selectButton.classList.remove("anima");
    }, 1500);
}