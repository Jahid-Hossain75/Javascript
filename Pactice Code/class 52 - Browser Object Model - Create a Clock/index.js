

// Browser Object Model - Create a Clock

const button = document.querySelector("#mybtn");
const message = document.querySelector(".message");

button.addEventListener("click", startClock);

function startClock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = formateTime(hours);
    minutes = formateTime(minutes);
    seconds = formateTime(seconds);

    let time = hours + ":" + minutes + ":" + seconds;

    message.textContent = time;
    setInterval(startClock, 1000);
}

// time formate function
function formateTime(value){
    if(value < 10){
        value = "0" + value;
    }
    return value;
}




