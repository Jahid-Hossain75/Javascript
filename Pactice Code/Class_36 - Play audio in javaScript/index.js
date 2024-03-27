
var all_btn = document.querySelectorAll(".mybutton").length;
for(var i=0; i<all_btn; i++){
    document.querySelectorAll(".mybutton")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        
        switch (text) {
            case "A":
                var audio = new Audio("audio/a.mp3");
                audio.play();
                break;
        
            case "B":
                var audio = new Audio("audio/b.mp3");
                audio.play();
                break;

            case "C":
                var audio = new Audio("audio/c.mp3");
                audio.play();
                break;
        }
    });
}

