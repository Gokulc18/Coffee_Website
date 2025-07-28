const menu_open_button = document.querySelector("#menu-open-button");
const menu_close_button = document.querySelector("#menu-close-button");
const navlinks = document.querySelectorAll(".nav-menu .nav-link");

// Toggle mobile menu visibility
menu_open_button.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
})

// Close menu when close button is clicked
menu_close_button.addEventListener("click",()=>menu_open_button.click());

// In Mobile view, Close menu when nav link is clicked
navlinks.forEach(link => {
  link.addEventListener("click", () => menu_open_button.click());
})


// For swiper functionality

// Initialize swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
//   Responsive
breakpoints: {
    0: {
        slidesPerView: 1
    },
    500: {
        slidesPerView: 2
    },
    900: {
        slidesPerView: 3
    }
}

});