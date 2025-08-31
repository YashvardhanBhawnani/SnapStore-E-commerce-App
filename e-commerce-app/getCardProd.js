import { updateCartVal } from "./updateCartVal";

export const getProdFromLS = () => {
    let cartProd = localStorage.getItem("cartProdLS");
    if (!cartProd) return [];
    cartProd = JSON.parse(cartProd);
    updateCartVal(cartProd);
    return cartProd;
};