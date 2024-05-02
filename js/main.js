// open & close car
let cart_dev=document.querySelector(".cart");
let icon_cart = document.querySelector(".icon-cart");
let close_icon = document.querySelector(".close-icon");
const openCart = () => {
    cart_dev.classList.add("active")
}
const closeCar= () => {
    cart_dev.classList.remove("active")
}
icon_cart.addEventListener("click",openCart);
close_icon.addEventListener("click",closeCar);
