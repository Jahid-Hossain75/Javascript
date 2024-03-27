
// Default and rest parameters

// function - step 1
function message(){
    console.log("Message 1: Hi Everyone!");
}
// call function
message();



// function - step 2
function message_2(text){
    console.log("Message 2: " + text);
}
// call function
message_2("Hello Everyone!");



// function - step 3
function message_3(text){
    console.log(`Message 3: ${text}`);
}
// call function
message_3("Hello Everybody!");




// function - step 4
// default parameters
function message_4(text = "Hello this is default parameters."){
    console.log(`Message 4: ${text}`);
}
// call function
message_4();




// function - step 5
// default parameters
function message_5(text = "Hello this is default parameters."){
    console.log(`Message 5: ${text}`);
}
// call function
message_5("No Default Parameters.");




// function - step 6
// rest parameters
function message_6(x, y, ...z){
    console.log(`x = ${x}, y = ${y}, z = ${z}`);
}
// call function
message_6(10, 10, 10, 10, 10);