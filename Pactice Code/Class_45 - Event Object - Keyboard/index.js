
// Event Object - Keyboard
// 1. keydown - pressing a key, can repeat
// 2. keypress (may not supported by some browsers)
// 3. keyup
// some properties - key, keyCode, code, shiftKey, ctlKey, repeat

const textarea = document.querySelector("textarea");
textarea.addEventListener("keydown", function(){
    console.log("Keydown");
});

textarea.addEventListener("keypress", function(){
    console.log("Keypress");
});

textarea.addEventListener("keyup", function(e){
    console.log("Keyup");
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(e.code);
    // console.log(e.shiftKey);
    // console.log(e.ctrlKey);
    // console.log(e.repeat);
});