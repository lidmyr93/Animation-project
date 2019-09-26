
let s4 = anime.timeline({
  easing: "linear",
  duration: 500
});
s4.add(
  {
    targets: ".section-4 .text-wrapper",
    opacity: [0, 1]
  },
  5000
);
s4.add(
  {
    targets: ".image-wrapper-one",
    opacity: [0, 1]
  },
  10000
);
s4.pause();

let s5 = anime.timeline({
  easing: "linear",
  duration: 750
});
s5.add(
  {
    targets: ".s5",
    opacity: [0, 1]
  },
  2000
);
s5.add(
  {
    targets: ".image-two",
    opacity: [0, 1]
  },
  2000
);
s5.pause();

function checkForVisibility() {
  var sectionFour = document.querySelector(".section-4");
  var sectionFive = document.querySelector(".section-5");

  if (isElementInViewport(sectionFour)) {
    s4.play();
  }
  if (isElementInViewport(sectionFive)) {
    s5.play();
  }

  var headers = document.querySelectorAll(".delay");
  headers.forEach(function(header) {
    if (isElementInViewport(header)) {
     return header.classList.add("delay--enter");
  }
     
  });

  let sectionText = document.querySelector(".section-6-text");
  let sectionImg = document.querySelectorAll(".imgAni");
  let swiperSlide = document.querySelectorAll(".swiper-slide");

  if (isElementInViewport(sectionText)) {
    sectionText.classList.add("sectionVisible");
  }

  let delayAdmission = 0;
  sectionImg.forEach(function(img) {
    if (isElementInViewport2(img)) {
      setTimeout(function() {
        img.classList.add("imgVisible");
      }, (delayAdmission += 500));
    }
  });

  let delayCarousel = 0;
  swiperSlide.forEach(function(slide) {
    if (isElementInViewport2(slide)) {
      setTimeout(function() {
        slide.classList.add("slideVisible");
      }, (delayCarousel += 500));
    }
  });
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  let middle = rect.top + (rect.bottom - rect.top) / 2;

  return (
    rect.top >= 0 &&
    middle <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function isElementInViewport2(el) {
  var rect = el.getBoundingClientRect();
  let middle = rect.top + (rect.bottom - rect.top) / 4;

  return (
    rect.top >= 0 &&
    middle <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", checkForVisibility, false);
  addEventListener("load", checkForVisibility, false);
  addEventListener("scroll", checkForVisibility, false);
}

//Slider carousel

var mySwiper = new Swiper(".swiper-container", {
  initialSlide: 0,
  autoHeight: false,

  direction: "horizontal",
  loop: false,
  autoplay: false,
  pagination: ".swiper-pagination",
  effect: "slide",
  spaceBetween: 70,
  slidesPerView: 3,
  centeredSlides: false,
  slidesOffsetBefore: 0,
  grabCursor: true
});

/* Emmi JS*/

const myAnimation = anime({
    targets: '.section-1-img',
    scale: 1.2,
    duration: 16000,
    direction: 'alternate',
    easing: 'linear',
    loop: true,
})

const myTextAnimation = anime({
    targets: '.section-1-text .section-1-word',
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 8000,
    delay: function(el, i) {
        return 700*i;}
})  


/*
const myLineAnimation = anime ({
    targets: '.section-1-line-top',
    translateY: [0, 100],
    easing: "linear",
    duration: 6000, 
    delay: function(el, i) {
        return 800*i;}
})

*/
