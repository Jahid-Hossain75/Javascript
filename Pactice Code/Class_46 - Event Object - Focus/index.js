
// Event Object - Focus
// not acceptable html element for focus event:
// <br>, <head>, <title>, <html>, <iframe>, <meta>, <param>, <script>, <style>, <base>, <bdo>,

// 1. onblur
// 2. onfocus
// 3. onfocusin
// 4. onfocusout


const input = document.querySelector("input");
input.addEventListener("blur", function (e) {
    console.log("blur is occured");
    input.style.backgroundColor = "transparent";
    input.style.padding = "0";
    input.value = e.target.value.toUpperCase();
    console.log(e.target.value);
});

input.addEventListener("focus", function () {
    console.log("focus is occured");
    input.style.backgroundColor = "orange";
    input.style.padding = "0.5em";
});

input.addEventListener("focusin", function () {
    console.log("focusin is occured");
});

input.addEventListener("focusout", function () {
    console.log("focusout is occured");
});