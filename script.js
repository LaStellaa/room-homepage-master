"use strict";

const hamburgerIcon = document.querySelector(".nav__hamburger--mobile");
const closeIcon = document.querySelector(".nav__close--mobile");
const navListContainer = document.querySelector(".nav__list-container");
const navLogoContainer = document.querySelector(".nav__logo-container");

hamburgerIcon.addEventListener("click", () => {
  navListContainer.style.display = "flex";
  navLogoContainer.style.visibility = "hidden";
});

closeIcon.addEventListener("click", () => {
  navListContainer.style.display = "none";
  navLogoContainer.style.visibility = "visible";
});

const slides = document.querySelectorAll(".carousel__slide");
const slideContainer = document.querySelector(".carousel__slides");
const prevButtons = document.querySelectorAll(".carousel__btn--prev");
const nextButtons = document.querySelectorAll(".carousel__btn--right");

let currentSlide = 0;
const totalSlides = slides.length;

function updateCarousel() {
  const offset = -currentSlide * 100;
  slideContainer.style.transform = `translateX(${offset}%)`;
}

nextButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  })
);

prevButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
  })
);

// Init
updateCarousel();
