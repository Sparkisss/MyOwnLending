"use strict"

const menuBurger = document.querySelector('.burger__point'),
      menu = document.querySelector('.point'),
      anyScroll = document.querySelector('body');

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('active');
    menu.classList.toggle('active');
    anyScroll.classList.toggle('lock');
    console.log('click');
});