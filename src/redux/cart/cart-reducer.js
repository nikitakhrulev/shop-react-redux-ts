import { ADD_TO_CART } from "../constants";
import { REMOVE_FROM_CART } from "../constants";

export const cartReducer = (cart = [], action) => {
    switch(action.type) {
        case ADD_TO_CART: {
            return [
                ...cart,
               action.payload
              ];
        }
        /// remove from cart
        default: {
            return cart
        }
    }
}