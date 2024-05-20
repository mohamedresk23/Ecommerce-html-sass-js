// swiper sidebar
var swiper = new Swiper(".slider-swp", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullests:true,
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
  });

// swiper sale
var swiper = new Swiper(".sale-sec", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullests:true,
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
  });