// open & close cart
let cart_dev=document.querySelector(".cart");
let icon_cart = document.querySelector(".icon-cart");
let close_icon = document.querySelector(".top-cart .close-icon");
const openCart = () => {
    cart_dev.classList.add("active")
}
const closeCar= () => {
    cart_dev.classList.remove("active")
}
icon_cart.addEventListener("click",openCart);
close_icon.addEventListener("click",closeCar);


// add products to cart
let all_products_json;

let items_in_cart = document.querySelector(".items-in-cart");
let product_cart=[];
const addToCart = (id,btn) => {
    product_cart.push(all_products_json[id]);
    btn.classList.add("active");
    getCartItems();
    console.log(product_cart);
}
let countItemHead = document.querySelector(".count-item");
    let tottlePriceHead = document.querySelector(".price-cart-head");
    let countItemCart = document.querySelector(".count-item-cart");
    let tottlePriceCart = document.querySelector(".price-cart-total");
const getCartItems = () => {
    let totlePrice =0;
    let items_cart ="";
    for (let i = 0; i < product_cart.length; i++) {
        items_cart += `
        <div class="item-cart">
        <img src="${product_cart[i].img}" alt="product">
        <div class="containt">
          <h4>"${product_cart[i].name}</h4>
          <div class="price">"${product_cart[i].price}$</div>
        </div>
        <button onclick="removeItemFromCart(${i})" class="delete"><i class="fa-regular fa-trash-can"></i></button>
      </div>`
        
      totlePrice += product_cart[i].price;
    }
    items_in_cart.innerHTML = items_cart;
    tottlePriceHead.innerHTML = `$${totlePrice}`;
    countItemHead.innerHTML =  product_cart.length;
    tottlePriceCart.innerHTML = `$${totlePrice}`;
    countItemCart.innerHTML = `(${product_cart.length} Item in Cart)`;
}



// remove item from cart
const removeItemFromCart = (index) => {
    product_cart.splice(index, 1);
    getCartItems();

    let addToCartButtons = document.querySelectorAll('.add-to-cart');
    console.log(addToCartButtons);
    for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].classList.remove('active');

        product_cart.forEach((product) => {
            if (product.id == i) {
                addToCartButtons[i].classList.add('active');
            }
        })
    }
}

// back To Top btn
const backToTop = document.querySelector(".backToTop");
backToTop.addEventListener("click",() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})


// open & close menu Links
let openIcone = document.querySelector(".open-icone");
let closeIcone = document.querySelector(".close-icon");
let ulLinks = document.querySelector(".links ul");

openIcone.addEventListener("click",() => {
    ulLinks.classList.add("open");
});
closeIcone.addEventListener("click",() => {
    ulLinks.classList.remove("open");
    
});
