// Error handling -> try, catch, finally, throw
// try ... catch handle run time errors (program which is not work)
// Error object
// The finally statement -> execute code, after try and catch statement.


// Error
// console.log("Hi Everyone");
// console.log(x); // error x variable
// console.log("Bye Everyone");

// try and catch
try {
    console.log("Hi Everyone");
    console.log(x);
    console.log("Bye Everyone");
}catch (error) {
    // print 
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}finally{
    console.log("THis is Program");
}


document.querySelector("#Check").addEventListener("click", function(){
    var number = document.querySelector("#numText").value;
    var message_p = document.querySelector(".error");

    // if (number <= 5 && number >= 10) {
    //     message_p.textContent = "Perfect";
    //     message_p.style.padding = "4px";
    //     message_p.style.color = "green";
    // }

    // try and catch
    try {
        if(number < 5){
            // throw
            throw "Input is too short";
        }else if(number > 10){
            // throw
            throw "Input is too long";
        }
    } catch (error) {
        message_p.textContent = error;
        message_p.style.padding = "4px";
    }
    console.log(number);
});