const prodContainer = document.querySelector("#productContainer");
const prodTemplate = document.querySelector("#productTemplate");
import { homeQuantityToggle } from "./homeQuantityToggle";
import { addToCart } from "./addToCart";

export const showProductContainer = (products) => {
    if (!products) return;
    products.forEach((curEle) => {
        const { brand, category, description, id, image, name, price, stock } = curEle;
        const prodClone = document.importNode(prodTemplate.content, true);
        prodClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        prodClone.querySelector(".productName").textContent = name;
        prodClone.querySelector(".productImage").src = image;
        prodClone.querySelector(".productImage").alt = name;
        prodClone.querySelector(".productDescription").innerText = description;
        prodClone.querySelector(".productStock").innerText = stock;
        prodClone.querySelector(".productPrice").textContent = `₹${price}`;
        prodClone.querySelector(".productActualPrice").textContent = `₹${price * 2}`;

        prodClone.querySelector(".stockElement").addEventListener("click", (e) => {
            homeQuantityToggle(e, id, stock);
        });
        prodClone.querySelector(".add-to-cart-button").addEventListener("click", (e) => {
            addToCart(id);
        })
        prodContainer.append(prodClone);
    });
}