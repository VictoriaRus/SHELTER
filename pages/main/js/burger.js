"use strict"

let parent = document.getElementById('header');
let navigation = document.getElementById('navigation-list');
let burger = document.getElementById('burger');

parent.addEventListener('click', onBurger);

function onBurger(e) {
    let link = e.target.nodeName;

    if (link === 'IMG') {

        if (!burger.classList.contains("burger-active")) {
            burger.classList.add("burger-active");
            navigation.classList.add("navigation-burger");
            document.body.style.overflow = 'hidden';
        } else {
            burger.classList.remove("burger-active");
            navigation.classList.remove("navigation-burger");
            navigation.classList.add("navigation-close");
            document.body.style.overflow = '';
        }

    }
    
    if (link === "A" || link === "H1") {
        document.body.style.overflow = '';
        navigation.classList.remove("navigation-burger");
        burger.classList.remove("burger-active");
        navigation.classList.add("navigation-close");
    }
}