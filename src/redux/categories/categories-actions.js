import { ADD_CATEGORIES } from "../constants"

export const addCategories = (categories) => ({
    type: ADD_CATEGORIES,
    payload: categories,
})


export const getCategories = () => (dispatch) => {
    fetch('https://api.escuelajs.co/api/v1/categories')
        .then(response => response.json())
        .then(data => dispatch(addCategories(data)))
}
