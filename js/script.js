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


// Set default selected category
    function setDefaultCategory() {
        const defaultCategory = document.querySelector('[data-category="Milk"] div');
        const defaultTextSpan = defaultCategory.querySelector('span');
        defaultCategory.classList.add('bg-[#25818c]', 'hover:bg-[#1e6b74]');
        defaultCategory.classList.remove('bg-white', 'hover:bg-gray-100');
        defaultTextSpan.classList.add('text-white');
        defaultTextSpan.classList.remove('text-gray-700');
    }

    // Handle click events
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            resetCategories();
            const div = item.querySelector('div');
            const textSpan = item.querySelector('span');
            div.classList.add('bg-[#25818c]', 'hover:bg-[#1e6b74]');
            div.classList.remove('bg-white', 'hover:bg-gray-100');
            textSpan.classList.add('text-white');
            textSpan.classList.remove('text-gray-700');
        });
    });
  // Initialize default category
    setDefaultCategory();

 

    let scrollAmount = 0;
    const scrollStep = slider.offsetWidth / 2;

    prevBtn.addEventListener("click", () => {
        scrollAmount -= scrollStep;
        slider.style.transform = `translateX(${-scrollAmount}px)`;
    });

    nextBtn.addEventListener("click", () => {
        scrollAmount += scrollStep;
        slider.style.transform = `translateX(${-scrollAmount}px)`;
    });