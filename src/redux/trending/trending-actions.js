import { ADD_TRENDING } from "../constants"

export const addTrending = (trending) => ({
    type: ADD_TRENDING,
    payload: trending,
}) 

export const getTrending = () => (dispatch) => {
    fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=5')
        .then(response => response.json())
        .then(data => dispatch(addTrending(data)))
}