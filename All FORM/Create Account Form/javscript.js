//Javascript
const createAccount = document.querySelector('.create_account');
const socailLink = document.querySelector('.socail_link');
const parsonalInfo = document.querySelector('.parsonal_info');

const btnTab = document.querySelector('.button_tab');
const createNextBtn = document.querySelector('.create_nextbtn');
const socailBackBtn = document.querySelector('.socail_backbtn');
const socailNextBtn = document.querySelector('.socail_nextbtn');
const parsonalBackBtn = document.querySelector('.parsonal_backbtn');

const stepColor1 = document.querySelector('.head_btn_1');
const stepColor2 = document.querySelector('.head_btn_2');
const stepColor3 = document.querySelector('.head_btn_3');

createNextBtn.addEventListener('click',function(){
    btnTab.style.width = '66.666%';
    createAccount.style.left = '-445px';
    socailLink.style.left = '0px';
    stepColor1.style.color = '#000';
    stepColor2.style.color = '#fff';
    stepColor3.style.color = '#000';
});
socailBackBtn.addEventListener('click',function(){
    btnTab.style.width = '33.333%';
    createAccount.style.left = '-0px';
    socailLink.style.left = '445px';
    stepColor1.style.color = '#fff';
    stepColor2.style.color = '#000';
    stepColor3.style.color = '#000';
});
socailNextBtn.addEventListener('click',function(){
    btnTab.style.width = '104%';
    socailLink.style.left = '-445px';
    parsonalInfo.style.left = '0px';
    stepColor1.style.color = '#000';
    stepColor2.style.color = '#000';
    stepColor3.style.color = '#fff';
});
parsonalBackBtn.addEventListener('click',function(){
    btnTab.style.width = '66.666%';
    socailLink.style.left = '0px';
    parsonalInfo.style.left = '445px';
    stepColor1.style.color = '#000';
    stepColor2.style.color = '#fff';
    stepColor3.style.color = '#000';
});

