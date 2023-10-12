import {cart, removeFromCart} from "../data/cart.js";
import {products} from '../data/products.js'
import { formatCurrency } from "./utils/money.js";
let cartSummaryHTML = '';

cart.forEach((item) => {
    const productId = item.productId;

    let matchingProduct = {};

    for(let i = 0; i < products.length; i++){
        
        if(products[i].id === productId){
            matchingProduct = products[i];
            console.log(products[i].id);
            break;
        }
    }
    cartSummaryHTML += `
    <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${formatCurrency(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${item.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span data-product-id="${matchingProduct.id}" class="delete-quantity-link link-primary js-delete-quantity-link">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option"> 
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `;
    // console.log(cartSummaryHTML);

});
document.querySelector(".js-order-summary")
    .innerHTML = cartSummaryHTML;
  
document.querySelectorAll(".js-delete-quantity-link")
  .forEach((item, index) => {
    item.addEventListener("click", () => {
      const productId = item.dataset.productId;
      removeFromCart(productId);
      document.querySelector(`.js-cart-item-container-${productId}`)
        .remove();
      console.log(cart);
    });
  })
