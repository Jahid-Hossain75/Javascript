
// Object literals
// function using Object - normal function
function studentInfo(name, age){
    return{
        name:name,
        age:age
    }
}
console.log(studentInfo("Jahid Hossain", 22));



// ES6 Object literals functions
function student(name, age){
    return{
        name,
        age
    }
}
console.log(student("Jahid Hossain", 22));




// Normal object functions
let message = {
    myMessage : function(){
        return `Hi, I'm Object function.`;
    }
}
console.log(message.myMessage());




// ES6 Object functions literals - step 1
let text = {
    myText(){
        return `Hi, I'm ES6 Object function.`;
    }
}
console.log(text.myText());




// ES6 Object functions literals - step 2
let text_2 = {
    'my text'(){
        return `Hi, I'm ES6 Object function step 2.`;
    }
}
console.log(text_2['my text']);