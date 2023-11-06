"use strict"
const slides = document.querySelectorAll(".testimation__slider"),
      point = document.querySelectorAll(".testimation__nav"),
      sliderWrapper = document.querySelector('.offer__testimation-slider'),
      one = document.querySelector(".testimation__nav-one"),
      two = document.querySelector(".testimation__nav-two"),
      three = document.querySelector(".testimation__nav-thre");
let slideIndex = 1;

showSlides(slideIndex);

function showSlides() {
    slides.forEach(item => {
        item.classList.add('hidden');
    });

    slides[slideIndex - 1].classList.remove('hidden');
};

function snowActivePoint(n) {
    one.classList.remove('active');
    two.classList.remove('active');
    three.classList.remove('active');
    n.classList.add('active');
};
slides.forEach(item => {
    item.addEventListener('click', (e) => {
        console.log(e.target);
    })
})
one.addEventListener('click', () => {
    console.log('d');
    slideIndex = 1;
    showSlides();
    snowActivePoint(one);
    
});

two.addEventListener('click', () => {
    console.log('d');
    slideIndex = 2;
    showSlides();
    snowActivePoint(two);
    
});

three.addEventListener('click', () => {
    console.log('d');
    slideIndex = 3;
    showSlides();
    snowActivePoint(three);
    
});

