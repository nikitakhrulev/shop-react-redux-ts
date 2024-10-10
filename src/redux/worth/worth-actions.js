import { ADD_WORTH } from "../constants";

export const addWorth = (worth) => ({
    type: ADD_WORTH,
    payload: worth
})


export const getWorth = () => (dispatch) => {
    fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=5&categoryId=4')
        .then(response => response.json())
        .then(data => dispatch(addWorth(data)))
}