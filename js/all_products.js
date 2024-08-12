let products_div = document.getElementById("products_div");

fetch("js/items.json")
.then(res => res.json())
.then(data => {
    all_products_json = data;
    data.forEach(product => {
      let old_price = product.old_price ? `<p class="old-price">$${product.old_price}</p>`: "";
      let percent_disk = product.old_price ? `<span class="sale-pers">${Math.floor(((product.old_price - product.price)/ product.old_price)*100)}%</span>`: "";
        
          console.log(data)
          products_div.innerHTML += `
        <div class="product ">
        ${percent_disk}
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
            ${old_price}
          </div>
        </div>
      </div>
        `
    
    });

})