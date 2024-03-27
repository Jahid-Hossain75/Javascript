
// Event Object - MouseEvent
// no work mouseEvent html element
// MouseEvent -- <html>, <head>, <meta>, <title>, <br>, <style>, <script>, <iframe>, <param>, <base>, <bdo>

// 1. onclick
// 2. ondblclick
// 3. onmousedown
// 4. onmouseup
// 5. onmouseenter
// 6. onmouseleave
// 7. onmousemove
// 8. onmouseover
// 9. onmouseout

// console clear
console.clear();
// find div
const box = document.querySelector('div');

// onclick MouseEvent
// step 1
box.addEventListener("click", function(e){
    // console.log("click");
});
// step 2
box.onclick = function (e) {
    // console.log("click");
};

// ondblclick
box.ondblclick = function (e){
    // console.log("double click");
};

// onmousedown
box.onmousedown = function(e){
    // console.log("Mouse Down");
};

// onmouseup
box.onmouseup = function(e){
    // console.log("Mouse Up");
};

// onmouseenter
box.onmouseenter = function(e){
    // console.log("Mouse enter");
};

// onmouseleave
box.onmouseleave = function(e){
    // console.log("Mouse leave");
};

// onmousemove
box.onmousemove = function(e){
    // console.log("Mouse move");
};

// onmouseover
box.onmouseover = function(e){
    // console.log("Mouse Over");
};

// onmouseout
box.onmouseout = function(e) {
    // console.log("Mouse Out");
};


// onmousemove advance
box.onmousemove  = function (event) {
    // console.log("ClientX = " + event.clientX + " ClientY = " + event.clientY);
    // console.log("OffsetX = " + event.offsetX + " OffsetY = "+ event.offsetY);
};

// onclick
box.onclick = function(event){
    // console.log("Div text = "+event.target.innerHTML);
    // console.log("Div text = "+event.target.textContent);
    console.log("Div text p tag text = "+event.target.innerText);
};










