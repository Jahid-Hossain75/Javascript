//form validetion
var userName = document.forms['form']['username'];
var emailAddress = document.forms['form']['email'];
var password = document.forms['form']['password'];
var con_password = document.forms['form']['conpassword'];
var phonen = document.forms['form']['phone'];

var userError = document.querySelector('.user_error');
var emailError = document.querySelector('.email_error');
var passError = document.querySelector('.pass_error');
var con_passError = document.querySelector('.conpass_error');
var phoneError = document.querySelector('.phone_error');

userName.addEventListener('textInput', user_verify);
emailAddress.addEventListener('textInput', email_verify);
password.addEventListener('textInput', password_verify);
con_password.addEventListener('textInput', conpass_verify);
phonen.addEventListener('textInput', phone_verify);

const showBtn3 = document.querySelector(".show_btn3");
const showBtn4 = document.querySelector('.show_btn4');

function validetion() {
    //User Name=======
    if (userName.value.length == "") {
        userName.style.border = '1px solid red';
        userError.style.display = 'block';
        //userError.textContent = "please fill the username field";
        userName.focus();
        return false;
    }
    if (userName.value.length < 2) {
        userName.style.border = '1px solid red';
        userError.style.display = 'block';
        userError.textContent = "username length mast between short";
        userName.focus();
        return false;
    }
    if (userName.value.length > 20) {
        userName.style.border = '1px solid red';
        userError.style.display = 'block';
        userError.textContent = "username length mast between long";
        userName.focus();
        return false;
    }

    //Email Address =============
    if (emailAddress.value.length == "") {
        emailAddress.style.border = '1px solid red';
        emailError.style.display = 'block';
        emailAddress.focus();
        return false;
    }
    if (emailAddress.value.length < 12) {
        emailAddress.style.border = '1px solid red';
        emailError.style.display = 'block';
        emailError.textContent = "email length mast between short";
        emailAddress.focus();
        return false;
    }

    //password=============
    if (password.value.length == "") {
        password.style.border = '1px solid red';
        passError.style.display = 'block';
        //passError.textContent = "please fill the password field";
        password.focus();
        return false;
    }
    if (password.value.length < 6) {
        password.style.border = '1px solid red';
        passError.style.display = 'block';
        passError.textContent = "password length mast between short";
        password.focus();
        return false;
    }
    if (password.value.length > 20) {
        password.style.border = '1px solid red';
        passError.style.display = 'block';
        passError.textContent = "password length mast between lang";
        password.focus();
        return false;
    }

    //Conform password=============
    if (con_password.value.length == "") {
        con_password.style.border = '1px solid red';
        con_passError.style.display = 'block';
        con_password.focus();
        return false;
    }
    if (password.value.length !== con_password.value.length) {
        con_password.style.border = '1px solid red';
        con_passError.style.display = 'block';
        showBtn3.style.display = 'none';
        showBtn4.style.display = 'block';
        con_passError.textContent = "password not mached";
        con_password.focus();
        return false;
    }

    //Phone Number==========
    if (phonen.value.length == "") {
        phonen.style.border = '1px solid red';
        phoneError.style.display = 'block';
        //phoneError.textContent = "please fill the password field";
        phonen.focus();
        return false;
    }
    if (phonen.value.length < 11) {
        phonen.style.border = '1px solid red';
        phoneError.style.display = 'block';
        phoneError.textContent = "password length mast between short";
        phonen.focus();
        return false;
    }
    if (phonen.value.length > 11) {
        phonen.style.border = '1px solid red';
        phoneError.style.display = 'block';
        phoneError.textContent = "password length mast between lang";
        phonen.focus();
        return false;
    }
};

function user_verify() {
    if ((userName.value.length >= 1) || (userName.value.length <= 20)) {
        userName.style.border = '1px solid green';
        userError.style.display = 'none';
        userError.textContent = "";
        return true;
    }
};

function email_verify() {
    if (emailAddress.value.length >= 10) {
        emailAddress.style.border = '1px solid green';
        emailError.style.display = 'none';
        emailError.textContent = "";
        return true;
    }
};

function password_verify() {
    if (password.value.length > 4) {
        password.style.border = '1px solid green';
        passError.style.display = 'none';
        passError.textContent = "";
        return true;
    }
};

function conpass_verify() {
    if (password.value.length === con_password.value.length) {
        con_password.style.border = '1px solid green';
        con_passError.style.display = 'none';
        showBtn3.style.display = 'block';
        showBtn4.style.display = 'none';
        con_passError.textContent = "";
        return true;
    }
};

function phone_verify() {
    if (phonen.value.length >= 10) {
        phonen.style.border = '1px solid green';
        phoneError.style.display = 'none';
        phoneError.textContent = "";
        return true;
    }
};


const pass_field = document.querySelector(".password");
const conpass_field = document.querySelector(".con_password");
const showBtn = document.querySelector(".show_btn");
const showBtn2 = document.querySelector(".show_btn2");

showBtn.addEventListener("click", function () {
    if (pass_field.type === "password") {
        pass_field.type = "text";
        showBtn.style.display = "none";
        showBtn2.style.display = "block";
    }
});
showBtn2.addEventListener("click", function () {
    if (pass_field.type === "text") {
        pass_field.type = "password";
        showBtn.style.display = "block";
        showBtn2.style.display = "none";
    }
});
showBtn3.addEventListener("click", function () {
    if (conpass_field.type === "password") {
        conpass_field.type = "text";
        showBtn3.style.display = "none";
        showBtn4.style.display = "block";
    }
});
showBtn4.addEventListener("click", function () {
    if (conpass_field.type === "text") {
        conpass_field.type = "password";
        showBtn3.style.display = "block";
        showBtn4.style.display = "none";
    }
});