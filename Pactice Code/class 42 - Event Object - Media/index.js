
// Media Event
// All Media Event Name
// canplay, play, pause, playing, waiting, ended, volumechange, progress,
// =================================

const video = document.querySelector("video");
// canplay media event
video.addEventListener("canplay", function(e){
    console.log("Canplay");
});


// Play media event
video.addEventListener("play", function(e) {
    console.log("Play");
});


// playing media event
video.addEventListener("playing", function(e) {
    console.log("Playing");
});


// Pause media event
video.addEventListener("pause", function(e) {
    console.log("Pause");
});


// waiting media event
video.addEventListener("waiting", function(e) {
    console.log("Waiting");
});


// ended media event
video.addEventListener("ended", function(e) {
    console.log("Thank for watching");
});


// volumechange media event
video.addEventListener("volumechange", function(e) {
    console.log("volumechange");
});