const cartValue = document.querySelector("#cartValue");
export const updateCartVal = (cartProd) => {
    return cartValue.innerHTML = ` <i class="fa-solid fa-cart-shopping cart-item-count"> ${cartProd.length} </i>`;
} 