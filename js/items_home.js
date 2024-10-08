let swiper_products_sale = document.getElementById("swiper-products-sale");
let other_products_swip = document.getElementById("other-product-swiper");
let other_products_swip_2 = document.getElementById("other-product-swiper2");

fetch("js/items.json")
.then(res => res.json())
.then(data => {
    all_products_json = data;
    data.forEach(product => {
        if (product.old_price) {
          swiper_products_sale.innerHTML += `
        <div class="product swiper-slide">
        <span class="sale-pers">${Math.floor(((product.old_price - product.price)/ product.old_price)*100)}%</span>
        <div class="icons">
          <span class="add-to-cart"  onclick="addToCart(${product.id},this)">
            <i class="fa-solid fa-cart-plus "  ></i>
          </span>
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-share"></i>
        </div>
        <div class="img-product">
          <img src="${product.img}" alt="product-1">
          <img class="img-hover" src="${product.img_hover}" alt="product1">
        </div>
        <div class="containt">
          <h3 class="name-prduct">
            <a href="../item.html">
            ${product.name}
            </a> </h3>
          <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div class="price">
            <p class="new-price">$${product.price}</p>
            <p class="old-price">$${product.old_price}</p>
          </div>
        </div>
      </div>
        `
    }
    });


    data.forEach(product => {
        
          other_products_swip.innerHTML += `
        <div class="product swiper-slide">
        <div class="icons">
          <i class="fa-solid fa-cart-plus add-to-cart"  onclick="addToCart(${product.id},this)" ></i>
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-share"></i>
        </div>
        <div class="img-product">
          <img src="${product.img}" alt="product-1">
          <img class="img-hover" src="${product.img_hover}" alt="product1">
        </div>
        <div class="containt">
          <h3 class="name-prduct">
            <a href="../item.html ">
            ${product.name}
            </a> </h3>
          <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div class="price">
            <p class="new-price">$${product.price}</p>
            
          </div>
        </div>
      </div>
        `
    
    });

    data.forEach(product => {
        
      other_products_swip_2.innerHTML += `
        <div class="product swiper-slide">
        <div class="icons">
          <i class="fa-solid fa-cart-plus add-to-cart"  onclick="addToCart(${product.id},this)" ></i>
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-share"></i>
        </div>
        <div class="img-product">
          <img src="${product.img}" alt="product-1">
          <img class="img-hover" src="${product.img_hover}" alt="product1">
        </div>
        <div class="containt">
          <h3 class="name-prduct">
            <a href="../item.html ">
            ${product.name}
            </a> </h3>
          <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div class="price">
            <p class="new-price">$${product.price}</p>
            
          </div>
        </div>
      </div>
        `
    
    });

})