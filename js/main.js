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


let all_products_json;

let items_in_cart = document.querySelector(".items-in-cart");
let product_cart=[];
const addToCart = (id,btn) => {
    product_cart.push(all_products_json[id]);
    btn.classList.add("active");
    getCartItems();
    console.log(product_cart);
}

const getCartItems = () => {
    let items_cart ="";
    for (let i = 0; i < product_cart.length; i++) {
        items_cart += `
        <div class="item-cart">
        <img src="${product_cart[i].img}" alt="product">
        <div class="containt">
          <h4>"${product_cart[i].name}</h4>
          <div class="price">"${product_cart[i].price}$</div>
        </div>
        <button class="delete"><i class="fa-regular fa-trash-can"></i></button>
      </div>`
        
    }
    items_in_cart.innerHTML = items_cart;
}
