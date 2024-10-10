import { ADD_CHEAP } from "../constants";

export const addCheap = (cheap) => ({
    type: ADD_CHEAP,
    payload: cheap,
})


export const getCheap = () => (dispatch) => {
    fetch('https://api.escuelajs.co/api/v1/products?categoryId=2&offset=0&limit=5')
        .then(response => response.json())
        .then(data => dispatch(addCheap(data)))
}