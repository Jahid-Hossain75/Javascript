
const form =  document.querySelector('form');
const names = form.querySelector('div #name');
const email = form.querySelector('div #email');
const password = form.querySelector("div #password");

form.addEventListener("submit", function(event){
    // auto reload off using preventDefault();
    event.preventDefault();
    const userInfo = {
        name: names.value,
        email: email.value,
        password: password.value,
    };
    console.log(userInfo);
    names.value = "";
    email.value = "";
    password.value = "";
});