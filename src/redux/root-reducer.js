import { combineReducers } from "redux";
import { trendingReducer } from "./trending/trending-reducer";
import { categoriesReducer } from "./categories/categories-reducer";

export const rootReducer = combineReducers({
    trending: trendingReducer,
    categories: categoriesReducer,
})