import { getProdFromLS } from "./getCardProd";
import { updateCartProdTotal } from "./updateCartProdTotal";
import { updateCartVal } from "./updateCartVal";
import { showToast } from "./showToast";
export const removeProdFromCart = (id) => {
    let lsData = getProdFromLS();
    lsData = lsData.filter((curProd) => curProd.id !== id);
    localStorage.setItem("cartProdLS", JSON.stringify(lsData));

    let removeDiv = document.getElementById(`card${id}`);
    if (removeDiv) {
        removeDiv.remove();
        showToast("delete", id);
    };
    updateCartVal(lsData);
    updateCartProdTotal();
}