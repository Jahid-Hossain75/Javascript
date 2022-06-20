//form validetion
var form = document.querySelector('form');
var userName = document.getElementById('username');
var emailAddress = document.getElementById('email');
var password = document.getElementById('password');
var con_password = document.getElementById('con_password');

var circle = document.querySelector('.circle');
var circle_2 = document.querySelector('.circle_2');
var circle_3 = document.querySelector('.circle_3');
var exclamation = document.querySelector('.exclamation');
var exclamation_2= document.querySelector('.exclamation_2');
var exclamation_3 = document.querySelector('.exclamation_3');

var userError = document.querySelector('.user_error');
var emailError = document.querySelector('.email_error');
var passError = document.querySelector('.pass_error');
var con_passError = document.querySelector('.conpass_error');

userName.addEventListener('textInput',userVerify);
emailAddress.addEventListener('textInput',emailVerify);
password.addEventListener('textInput',passwordVerify);
con_password.addEventListener('textInput', conpassVerify);

form.addEventListener('submit',(e) =>{
    e.preventDefault();
});

function validetion() {
    //User Name=======
    if (userName.value.length == "") {
        userName.style.border = '2px solid #e74c3c';
        exclamation.style.display = 'block';
        userError.style.visibility = 'visible';
        userError.textContent = "please fill the username field";
        userName.focus();
        return false;
    }
    if (userName.value.length < 2) {
        userName.style.border = '2px solid #e74c3c';
        exclamation.style.display = 'block';
        userError.style.visibility = 'visible';
        userError.textContent = "email length mast between short";
        userName.focus();
        return false;
    }
    if (userName.value.length > 20) {
        userName.style.border = '2px solid #e74c3c';
        exclamation.style.display = 'block';
        userError.style.visibility = 'visible';
        userError.textContent = "password length mast between lang";
        userName.focus();
        return false;
    }
    
    //Email Address =============
    if(emailAddress.value.length == ""){
        emailAddress.style.border = '2px solid #e74c3c';
        exclamation_2.style.display = 'block';
        emailError.style.visibility = 'visible';
        emailError.textContent = "please fill the email field";
        emailAddress.focus();
        return false;
    }
    if(emailAddress.value.length < 12){
        emailAddress.style.border = '2px solid #e74c3c';
        exclamation_2.style.display = 'block';
        emailError.style.visibility = 'visible';
        emailError.textContent = "password length mast between short";
        emailAddress.focus();
        return false;
    }
    
    //password============
    if(password.value.length == ""){
        password.style.border = '2px solid #e74c3c';
        //exclamation.style.display = 'block';
        passError.style.visibility = 'visible';
        passError.textContent = "please fill the password field";
        password.focus();
        return false;
    }
    if (password.value.length < 6) {
        password.style.border = '2px solid #e74c3c';
        passError.style.visibility = 'visible';
        passError.textContent = "password length mast between short";
        password.focus();
        return false;
    }
    if (password.value.length > 20) {
        password.style.border = '2px solid #e74c3c';
        passError.style.visibility = 'visible';
        passError.textContent = "password length mast between long";
        password.focus();
        return false;
    }
    
    //Conform password=============
    if(con_password.value.length == ""){
        con_password.style.border = "2px solid #e74c3c";
        exclamation_3.style.display = 'block';
        con_passError.style.visibility = 'visible';
        con_passError.textContent = "please fill the password field";
        con_password.focus();
        return false;
    }
    if (password.value.length !== con_password.value.length) {
        con_password.style.border = '2px solid #e74c3c';
        exclamation_3.style.display = 'block';
        con_passError.style.visibility = 'visible';
        con_passError.textContent = "password not mached";
        con_password.focus();
        return false;
    }
};

function userVerify() {
    if ((userName.value.length >= 1) || (userName.value.length <= 20)) {
        userName.style.border = '2px solid #2ecc71';
        exclamation.style.display = 'none';
        circle.style.display = 'block';
        userError.style.visibility = 'hidden';
        userError.textContent = "";
        return true;
    }
};
function emailVerify() {
    if (emailAddress.value.length >= 10) {
        emailAddress.style.border = '2px solid #2ecc71';
        exclamation_2.style.display = 'none';
        circle_2.style.display = 'block';
        emailError.style.visibility = 'hidden';
        emailError.textContent = "";
        return true;
    }
};
function passwordVerify() {
    if (password.value.length == "") {
        password.style.border = '2px solid #2ecc71';
        exclamation.style.display = 'none';
        circle.style.display = 'block';
        passError.style.visibility = 'hidden';
        passError.textContent = "";
        return true;
    }
};
function conpassVerify() {
    if (password.value.length = con_password.value.length) {
        con_password.style.border = '2px solid #2ecc71';
        exclamation_3.style.display = 'none';
        circle_3.style.display = 'block';
        con_passError.style.visibility = 'hidden';
        con_passError.textContent = "";
        return true;
    }
};


const pass_field = document.querySelector("#password");
const showbtn = document.querySelector(".eye");
const hidebtn = document.querySelector(".slash");

showbtn.addEventListener("click", function () {
    if (pass_field.type === "password") {
        pass_field.type = "text";
        showbtn.style.display = "none";
        hidebtn.style.display = "block";
    }
});
hidebtn.addEventListener("click", function () {
    if (pass_field.type === "text") {
        pass_field.type = "password";
        showbtn.style.display = "block";
        hidebtn.style.display = "none";
    }
});








