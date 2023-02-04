import { cartItems } from "../initialStates/cartItems";
import { actionsName } from "../actions/actionsNameHolder";

const initalState = {
  cartItems: cartItems,
};

export default function cartReducer(state = initalState, { type, payLoad }) {
  switch (type) {
    case actionsName.ADD_TO_CART:
      let productThatExist = state.cartItems.find(
        (productLabel) => productLabel.product.id === payLoad.id
      );
      if (productThatExist) {
        productThatExist.quantity++;
        return { ...state };
      } else {
        return { ...state,
                cartItems : [...state.cartItems,{quantity:1,product:{payLoad}}]   
        };
      }
    case actionsName.REMOVE_FROM_CART:
        return {
            ...state,
            cartItems : state.cartItems.filter(productThatRemove => productThatRemove.product.id === payLoad.id)
        }
    default:
      return state
  }
}
