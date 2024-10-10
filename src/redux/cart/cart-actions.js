import { ADD_TO_CART } from "../constants";
import { REMOVE_FROM_CART } from "../constants";


export const addToCard = (item) => ({
    type: ADD_TO_CART,
});
export const removeToCard = (item) => ({
    type: REMOVE_FROM_CART,
});