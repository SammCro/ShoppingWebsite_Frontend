import { actionsName } from "./actionsNameHolder";

export function addToCart(product){
    return {
        type : actionsName.ADD_TO_CART,
        payload : product
    }
}

export function removeFromCart(product){
    return{
        type:actionsName.REMOVE_FROM_CART,
        payload : product
    }
}