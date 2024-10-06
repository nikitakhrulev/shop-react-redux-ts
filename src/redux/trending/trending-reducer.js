import { ADD_TRENDING } from "../constants";


export const trendingReducer = (trending = [], action) => {
    switch(action.type) {
        case ADD_TRENDING: 
            return action.payload;
        default: 
            return trending;
    }
}
