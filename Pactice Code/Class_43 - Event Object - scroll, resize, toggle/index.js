// Event Object
// Event Object Name
// Load, Unload, scroll, resize, toggle


// load event object
window.addEventListener("load", function(e){
    console.log('Page loaded!');
});


// unload event object
window.addEventListener( "unload", function(event) {
    console.log("Page Unload!");
});


// scroll event object
window.addEventListener( "scroll", function(event) {
    console.log("Page Scroll!");
});


// resize event object
window.addEventListener( "resize", function(event) {
    const width = window.outerWidth;
    const height = window.outerHeight;
    console.log(`height: ${height}, width: ${width}`);
});


// toggle event object
const details = document.querySelector("details");
details.addEventListener("toggle", function(e){
    // console.log(e.target.open);
    console.log("Toggle");
}); 