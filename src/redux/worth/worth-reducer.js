import { ADD_WORTH } from "../constants";

export const worthReducer = (worth = [], action) => {
    switch(action.type) {
        case ADD_WORTH:
            return action.payload
        default:
            return worth
    }
}