import { ADD_CATEGORIES } from "../constants"


export const categoriesReducer = (categories = [], action) => {
    switch(action.type) {
        case ADD_CATEGORIES:
            return action.payload;
        default:
            return categories
    }
} 