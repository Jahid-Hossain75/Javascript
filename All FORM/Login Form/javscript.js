//Javascript
const loginForm = document.querySelector('.login_form');
const sigupForm = document.querySelector('.sigup_form');
const forgotForm = document.querySelector('.forgot_form');
const loginBtn = document.querySelector('.login_slide');
const sigupBtn = document.querySelector('.sigup_slide');
const loginText = document.querySelector('.login_text');
const sigupText = document.querySelector('.sigup_text');
const forgotText = document.querySelector('.forgot_text');
const sigupLink = document.querySelector('.sigup_link');
const passLink = document.querySelector('.pass_link');
const slideTab = document.querySelector('.slide_tab');

sigupBtn.onclick = (()=>{
    loginForm.style.marginLeft = '-100%';
    loginText.style.marginLeft = '-58%';
});
loginBtn.onclick = (()=>{
    loginForm.style.marginLeft = '0%';
    loginText.style.marginLeft = '0%';
});
sigupLink.onclick = (()=>{
    sigupBtn.click();
    return false;
});
passLink.onclick = (()=>{
    loginForm.style.marginLeft = '-150%';
    loginText.style.marginLeft = '-108%';
});