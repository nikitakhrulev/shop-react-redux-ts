import { ADD_CHEAP } from "../constants"


export const cheapReducer = (cheap = [], action) => {
    switch(action.type) {
        case ADD_CHEAP:
            return action.payload;
        default: 
            return cheap;
    }
}