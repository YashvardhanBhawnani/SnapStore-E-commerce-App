export const homeQuantityToggle = (e, id, stock) => {
    const currCardEle = document.querySelector(`#card${id}`);
    const prodQuantity = currCardEle.querySelector(".productQuantity");
    let quantity = parseInt(prodQuantity.getAttribute("data-quantity")) || 1;
    if (e.target.className === "cartIncrement") {
        if (quantity < stock)
            quantity += 1;
        else if (quantity === stock)
            quantity = stock;
    }
    if (e.target.className === "cartDecrement") {
        if (quantity > 1)
            quantity -= 1;
    }
    prodQuantity.innerText = quantity;
    prodQuantity.setAttribute("data-quantity", quantity.toString());
    return quantity;
};