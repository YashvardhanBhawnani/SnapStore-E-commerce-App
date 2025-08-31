import products from "./api/products.json";
import { getProdFromLS } from "./getCardProd";
import { fetchQuantityFromLS } from "./fetchQuantityFromLS"
import { removeProdFromCart } from "./removeProdFromCart";
import { incrementDecrement } from "./incrementDecrement";
import { updateCartProdTotal } from "./updateCartProdTotal";

let cartProd = getProdFromLS();
let filterProd = products.filter((curProd) => {
    return cartProd.some((curEle) => curEle.id === curProd.id);
});

const cartEle = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProd = () => {
    filterProd.forEach((curProd) => {
        const { brand, category, description, id, image, name, price, stock } = curProd;
        const prodClone = document.importNode(templateContainer.content, true);

        const lsActualData = fetchQuantityFromLS(id, price);
        prodClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        prodClone.querySelector(".category").textContent = category;
        prodClone.querySelector(".productName").textContent = name;
        prodClone.querySelector(".productImage").src = image;

        prodClone.querySelector(".productPrice").textContent = `₹${lsActualData.price}`;
        prodClone.querySelector(".productQuantity").textContent = lsActualData.quantity;

        prodClone.querySelector(".remove-to-cart-button").addEventListener("click", () => removeProdFromCart(id));
        prodClone.querySelector(".stockElement").addEventListener("click", (e) => {
            incrementDecrement(e, id, stock, price);
        });


        cartEle.appendChild(prodClone);
    });
}
showCartProd();
updateCartProdTotal();