import { getProdFromLS } from "./getCardProd";
import { updateCartProdTotal } from "./updateCartProdTotal";


export const incrementDecrement = (e, id, stock, price) => {
    const currCardEle = document.querySelector(`#card${id}`);
    const prodQuantity = currCardEle.querySelector(".productQuantity");
    const prodPrice = currCardEle.querySelector(".productPrice");

    let quantity = 1;
    let lsPrice = 0;
    let lsData = getProdFromLS();
    let existingProd = lsData.find((curProd) => curProd.id === id);
    if (existingProd) {
        quantity = existingProd.quantity;
        lsPrice = existingProd.price;
    } else {
        lsPrice = price;
        price = price;
    }

    if (e.target.className === "cartIncrement") {
        if (quantity < stock)
            quantity++;
        else if (quantity === stock) {
            quantity = stock;
            lsPrice = price * stock;
        }
    }
    if (e.target.className === "cartDecrement") {
        if (quantity > 1)
            quantity--;
    }
    lsPrice = price * quantity;
    lsPrice = Number(lsPrice.toFixed(2));
    let updatedCart = { id, quantity, price: lsPrice };
    updatedCart = lsData.map((curProd) => {
        return curProd.id === id ? updatedCart : curProd;
    });
    localStorage.setItem("cartProdLS", JSON.stringify(updatedCart));
    prodQuantity.textContent = quantity;
    prodPrice.textContent = `₹${lsPrice}`;
    updateCartProdTotal();
};