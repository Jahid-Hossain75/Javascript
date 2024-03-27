
// Browser Object Model - Timing events
// setTimeOut(), setInterval()

// step - 1
// setTimeout function
setTimeout(() => {
    console.log("Hi");
}, 2000);



// step - 2
// setTimeout function
function display(){
    console.log("HI Jahid");
}
setTimeout (display, 3000);



// SetTimeout function using button
let btn = document.querySelector("#btn");
let message = document.querySelector(".message");

btn.addEventListener("click", function(){
    message.textContent = "User Registration Successful";
    message.style.padding = "5px";
    setTimeout(() => {
        message.textContent = "";
        message.style.padding = "0px";
    }, 2000);
});





// SetInterval function using button
let btn2 = document.querySelector("#btn2");
let message2 = document.querySelector(".message2");
let message3 = document.querySelector(".message3");

btn2 = addEventListener("click", function(){
    let count = 1;
    message2.textContent = count;

    // set interval
    setInterval(() => {
        count++;
        message2.textContent = count;
    }, 1000);
})