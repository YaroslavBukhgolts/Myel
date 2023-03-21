"use strict";

// Change language

let langEn = document.getElementById('En');
let langFr = document.getElementById('Fr');

langEn.addEventListener('click', function(){
    if(!langEn.classList.contains('header__languageLink_active')){
        langFr.classList.remove('header__languageLink_active');
        langEn.classList.add('header__languageLink_active');
    }
});

langFr.addEventListener('click', function(){
    if(!langFr.classList.contains('header__languageLink_active')){
        langEn.classList.remove('header__languageLink_active');
        langFr.classList.add('header__languageLink_active');
    }
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.sliderNew__next',
      prevEl: '.sliderNew__per',
    },
  });

const swiperCat = new Swiper('.swiperCat', {
  // Optional parameters
  spaceBetween: 30,
  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 3,

  pagination: {
    el: '.sliderCat__pagination',
    type: 'bullets',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.sliderCategories__next',
    prevEl: '.sliderCategories__per',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
