// swiper sidebar
let swiper_sidebar = new Swiper(".slider-swp", {
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
let swiper_sale = new Swiper(".sale-sec", {
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
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
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

// swiper product
let swiper_product = new Swiper(".product-swip", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        1200: {
          slidesPerView:3,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 3,
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

