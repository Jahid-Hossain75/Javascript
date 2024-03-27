
// Event Object - Drag

// 1. ondragstart
// 2. ondrag
// 3. ondragend
// 4. ondragenter
// 5. ondragleave
// 6. ondragover
// 7. ondrop


const dragBox = document.querySelector("#div1");
const para = document.querySelector("#para");

// dragenter
para.addEventListener("dragstart", function(e) {
    e.dataTransfer.setData("Text", e.target.id);
});

// dragover
dragBox.addEventListener("dragover", function(e) {
    e.preventDefault();
});

// drop
dragBox.addEventListener("drop", function(e) {
    const id = e.dataTransfer.getData("Text");
    dragBox.appendChild(document.getElementById(id));
});