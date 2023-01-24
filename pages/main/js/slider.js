"use strict"

let x1 = null;
let y1 = null;
let offset = 0;

let sliderLine = document.querySelector(".slider-line");
let sliderWidth = sliderLine.offsetWidth;
let cardWidth = document.querySelector(".card").offsetWidth;
let cardWithMargin = document.querySelectorAll(".card")[1].offsetLeft;
let sliderWindow = document.querySelector(".slider-window").offsetWidth;
let buttonNext = document.getElementById("button-next");
let buttonPrev = document.getElementById("button-prev");

buttonNext.addEventListener("click", sliderLeft);
buttonPrev.addEventListener("click", sliderRight);

buttonDisabled(buttonPrev);

sliderLine.addEventListener("touchstart", handleTouchStart, false);
sliderLine.addEventListener("touchmove", handleTouchMove, false);

function sliderLeft() {
    offset += cardWithMargin;
    buttonActive(buttonPrev);

    if (offset > (sliderWidth - sliderWindow - cardWidth)) {
        buttonDisabled(buttonNext);
    }

    sliderLine.style.left = -offset + "px";
}

function sliderRight() {
    buttonActive(buttonNext);
    offset -= cardWithMargin;

    if (offset < cardWithMargin) {
        buttonDisabled(buttonPrev);
    }

    sliderLine.style.left = -offset + "px";
}

function buttonActive(button) {
    button.classList.remove("tag-disabled");
    button.classList.add("tag");
    button.disabled = false;
}

function buttonDisabled(button) {
    button.classList.remove("tag");
    button.classList.add("tag-disabled");
    button.disabled = true;
}

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
}

function handleTouchMove(event) {

    if (!x1 || !y1) {
        return false;
    }

    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {

        if (xDiff > 0) {

            if (offset < cardWithMargin) {
                sliderLeft();
            }

            sliderRight();

        } else {

            if (offset > (sliderWidth - sliderWindow - cardWidth)) {
                sliderRight();
            }

            sliderLeft();

        }

    }
    
    x1 = null;
    y1 = null;
}