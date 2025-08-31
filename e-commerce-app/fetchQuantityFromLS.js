import { getProdFromLS } from "./getCardProd";
export const fetchQuantityFromLS = (id, price) => {
    let lsData = getProdFromLS();
    let existingProd = lsData.find((curProd) => curProd.id === id);
    let quantity = 1;
    if (existingProd) {
        quantity = existingProd.quantity;
        price = existingProd.price;
    }
    return { quantity, price };
};