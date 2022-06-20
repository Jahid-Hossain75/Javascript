//javascript
const loginForm = document.querySelector('#login_form');
const registerForm = document.querySelector('#register_form');
const forgotForm = document.querySelector('#forgot_form');
const btn = document.querySelector('#btn');
const btnColor = document.querySelector('.login_button');
const btnColor2 = document.querySelector('.register_button');
const passLink = document.querySelector('.pass_link');

btnColor2.addEventListener('click',function(){
    loginForm.style.left = '450px';
    registerForm.style.left = '30px';
    btn.style.left = '100px';
    forgotForm.style.left = '-450px';
    btnColor2.style.color = '#fff';
    btnColor.style.color = '#000';
});
btnColor.addEventListener('click',function(){
    loginForm.style.left = '30px';
    registerForm.style.left = '450px';
    btn.style.left = '0px';
    forgotForm.style.left = '-450px';
    btnColor.style.color = '#fff';
    btnColor2.style.color = '#000';
});
passLink.addEventListener('click',function(){
    loginForm.style.left = '-450px';
    forgotForm.style.left = '30px';
});