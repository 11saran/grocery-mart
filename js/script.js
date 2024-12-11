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


 // Next Button Click
  nextBtn.addEventListener('click', () => {
      if (currentPosition > -(totalItems - visibleItems) * itemWidth) {
          currentPosition -= itemWidth;
          slider.style.transform = `translateX(${currentPosition}px)`;
      }
  });

  // Previous Button Click
  prevBtn.addEventListener('click', () => {
      if (currentPosition < 0) {
          currentPosition += itemWidth;
          slider.style.transform = `translateX(${currentPosition}px)`;
      }
  });

  const categoryItems = document.querySelectorAll('.category-item');

    // Function to reset all items to their default state
    function resetCategories() {
        categoryItems.forEach(item => {
            const div = item.querySelector('div');
            const textSpan = item.querySelector('span');
            div.classList.remove('bg-[#25818c]', 'hover:bg-[#1e6b74]');
            div.classList.add('bg-white', 'hover:bg-gray-100');
            textSpan.classList.remove('text-white');
            textSpan.classList.add('text-gray-700');
        });
    }


