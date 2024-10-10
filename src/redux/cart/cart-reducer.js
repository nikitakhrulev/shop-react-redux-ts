import { ADD_TO_CART } from "../constants";
import { REMOVE_FROM_CART } from "../constants";

export const cartReducer = (cart = [], action) => {
    switch(action.type) {
        case ADD_TO_CART: {
            return [
                ...cart,
                {
                //   id: ++nextTodoId,  - создаем объект товара
                //   title: action.title,
                //   completed: false,
                },
              ];
        }
        /// remove from cart
        default: {
            return cart
        }
    }
}