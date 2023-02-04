import { actionsName } from "./actionsNameHolder";

export function addToCart(product){
    return {
        type : actionsName.ADD_TO_CART,
        payLoad : product
    }
}

export function removeFromCart(product){
    return{
        type:actionsName.REMOVE_FROM_CART,
        payLoad : product
    }
}