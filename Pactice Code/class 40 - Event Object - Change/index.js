// <input/> -- text, number, password, email, color, radio, checkbox, search, time, date, datetime, week, month, url, tel, file,
// <select>, <textarea>,

// console clear for using
console.clear();

// change event using input - type="text"
const input = document.querySelector("input[name=name]");
input.addEventListener("change", function(e){
    // console.log("chenged");
    // console.log(e);
    // console.log(e.type);
    // console.log(e.target);
    // console.log(e.target.className);
    // console.log(e.target.id);
    // console.log(e.target.value.length);
    console.log(e.target.value);
});


// change event using input - type="checkbox"
const input_checkbox = document.querySelectorAll("input[name=program]");
Array.from(input_checkbox).map((program) => {
    program.addEventListener("change", function(ee){
        if(ee.target.checked){
            console.log(ee.target.value);
        }else{
            console.log("Unchecked " + ee.target.value);
        }
    });
});



// change event using select input
const select_input = document.getElementById("department");
select_input.addEventListener("change", function(select_cc){
    console.log(select_cc.target.value);
});
