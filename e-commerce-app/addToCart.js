import { updateCartVal } from "./updateCartVal";
import { getProdFromLS } from "./getCardProd";
import { showToast } from "./showToast";

document.addEventListener("DOMContentLoaded", () => {
    getProdFromLS();
});

export const addToCart = (id) => {
    let arrProductLS = getProdFromLS();
    const currProdEle = document.querySelector(`#card${id}`);
    let quantity = currProdEle.querySelector(".productQuantity").innerText;
    let price = currProdEle.querySelector(".productPrice").innerText;

    price = price.replace("₹", "");
    let existingProd = arrProductLS.find((curProd) => curProd.id === id);
    if (existingProd && quantity > 1) {
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price * quantity);
        let updatedCart = { id, quantity, price };
        updatedCart = arrProductLS.map((curProd) => {
            return curProd.id === id ? updatedCart : curProd;
        });
        localStorage.setItem("cartProdLS", JSON.stringify(updatedCart));
        showToast("add", id);
    }
    if (existingProd) return false;

    price = Number(price * quantity);
    quantity = Number(quantity);


    arrProductLS.push({ id, quantity, price });
    localStorage.setItem("cartProdLS", JSON.stringify(arrProductLS));

    updateCartVal(arrProductLS);
    showToast("add", id);
};