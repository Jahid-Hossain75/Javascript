// Callback and higher order functions

function square(x){
    console.log(`Square of ${x}: ${x * x}`);
}
// call function
square(5);

function higherOrderFunction(num, callback){
    callback(num);
}

higherOrderFunction(10, square);






// callback function
function taskOne(callback){
    console.log("Task 1");
    callback();
}

function taskTwo(callback){
    setTimeout(() => {
        console.log("Task 2");
        callback();
    }, 2000);
    
}

function taskThree(callback){
    console.log("Task 3");
    callback();
}

function taskFour(){
    console.log("Task 4");
}


taskOne(() => {
    taskTwo(() => {
        taskThree(() =>{
            taskFour();
        });
    });
});
