// Promise

console.log("Welcome");


// how to create a promise in JavaScript
const promise_1 = new Promise((resolve, reject) => {
    let myPromise = true;
    if(myPromise){
        resolve("I am a resolved promise");
    }else{
        reject("I am a rejected promise");
    }
});

promise_1
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });


console.log("End");