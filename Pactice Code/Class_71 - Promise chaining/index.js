// Promise chaining

// Promise One
const taskOne = () =>{
    return new Promise((resolve, reject) =>{
        resolve("Task 1 is Completed");
    })
}

// Promise two
const taskTwo = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Task 2 is Completed");
        }, 2000)
    })
}

// Promise three
const taskThree = () =>{
    return new Promise((resolve, reject) =>{
        resolve("Task 3 is Completed");
    })
}

// Promise four
const taskFour = () =>{
    return new Promise((resolve, reject) =>{
        resolve("Task 4 is Completed");
    })
}


// call the callback function - step 1
// taskOne()
// .then((res) => console.log(res))
// .then(taskTwo)
// .then((res) => console.log(res))
// .then(taskThree)
// .then((res) => console.log(res))
// .then(taskFour)
// .then((res) => console.log(res))
// .catch((err) => console.log(err));



// call the callback function - step 1
async function callAllTask(){
    try{
        const res1 = await taskOne();
        const res2 = await taskTwo();
        const res3 = await taskThree();
        const res4 = await taskFour();
        console.log(res1);
        console.log(res2);
        console.log(res3);
        console.log(res4);
    }catch(err){
        console.log(err);
    }
}
// call function
callAllTask();


console.log("By");