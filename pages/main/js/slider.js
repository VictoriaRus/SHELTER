"use strict"
let offset = 0;//смещение от левого края

let sliderLine = document.querySelector('.slider-line');
let sliderWidth = sliderLine.offsetWidth;//2070 ширина линии - все карточки с растояниями между ними 

let cardWidth = document.querySelector('.card').offsetWidth;//270 ширина карточки
let cardWithMargin = document.querySelectorAll('.card')[1].offsetLeft;//90 ширина карточки

let sliderWindow = document.querySelector('.slider-window').offsetWidth;//ширина окна видемой прокрутки

let buttonNext = document.getElementById('button-next');
let buttonPrev = document.getElementById('button-prev');

buttonNext.addEventListener('click', sliderLeft);
buttonPrev.addEventListener('click', sliderRight);

buttonDisabled(buttonPrev);

function sliderLeft(){
    offset += cardWithMargin; // offset+=270;
    buttonActive(buttonPrev);
    if(offset >(sliderWidth-sliderWindow-cardWidth)){//1080//990
        //offset = 0;
        buttonDisabled(buttonNext);
    }
    sliderLine.style.left = -offset + 'px';
}

function sliderRight(){
    buttonActive(buttonNext);
    offset -= cardWithMargin; // offset-=270;
    /*if(offset < 0){
        offset = 720;//1080
    }*/
    if(offset < cardWithMargin){
        //offset = 720;//1080
        buttonDisabled(buttonPrev);
    }
    sliderLine.style.left = -offset + 'px';
}

function buttonActive(button){
    button.classList.remove('tag-disabled');
    button.classList.add('tag');
    button.disabled = false;
}
function buttonDisabled(button){
    button.classList.remove('tag');
    button.classList.add('tag-disabled');
    button.disabled = true;
}