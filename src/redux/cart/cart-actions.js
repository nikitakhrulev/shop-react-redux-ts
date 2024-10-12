import { ADD_TO_CART } from "../constants";
import { REMOVE_FROM_CART } from "../constants";


export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item,
});
export const removeToCart = (item) => ({
    type: REMOVE_FROM_CART,
    payload: item,
});