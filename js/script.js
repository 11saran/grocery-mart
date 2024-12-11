document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector("#menu-toggle");
  const menu = document.querySelector("#menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});

const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileNav = document.getElementById("mobile-nav");

hamburgerBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
});

const slider = document.getElementById("categoriesSlider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentPosition = 0;
const itemWidth = slider.children[0].offsetWidth;
const visibleItems = 6;
const totalItems = slider.children.length;


