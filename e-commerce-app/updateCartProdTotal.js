import { getProdFromLS } from "./getCardProd"

export const updateCartProdTotal = () => {
    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");

    let lsData = getProdFromLS();
    let initVal = 0;
    let totalProdPrice = lsData.reduce((total, curEle) => {
        let prodPrice = parseInt(curEle.price) || 0;
        return total + prodPrice;
    }, initVal);
    console.log(totalProdPrice);
    if (totalProdPrice === 0) {
        productSubTotal.textContent = "₹0";
        productFinalTotal.textContent = "₹0";
    } else {
        productSubTotal.textContent = `₹${totalProdPrice}`;
        productFinalTotal.textContent = `₹${totalProdPrice + 5}`
    }
}