
// BOM (Browser Object Model)
// window object
// location object

console.clear();

// location
// console.log(location);

// href
// console.log(location.href);

// protocol
// console.log(location.protocol);

// hostname
// console.log(location.hostname);

//  port
// console.log(location.port);

//  pathname
// console.log(location.pathname);





// find div
const box = document.querySelector('.location_div');
console.log(box);

//href
const p1 = box.children[0];
p1.textContent = location.href;

//protocol
const p2 = box.children[1];
p2.textContent = location.protocol;

// hostname
const p3 = box.children[2];
p3.textContent = location.hostname;

// port
const p4 = box.children[3];
p4.textContent = location.port;

// pathname
const p5 = box.children[4];
p5.textContent = location.pathname;




// find button 
const button = document.querySelector( 'button' );

// add event listener to the button
button.addEventListener('click', function() {
    location.assign("https://jahidhossin06.com/");
});