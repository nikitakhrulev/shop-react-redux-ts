import { combineReducers } from "redux";
import { trendingReducer } from "./trending/trending-reducer";
import { categoriesReducer } from "./categories/categories-reducer";
import { cheapReducer } from "./cheap/cheap-reducer";
import { cartReducer } from "./cart/cart-reducer";

export const rootReducer = combineReducers({
    trending: trendingReducer,
    categories: categoriesReducer,
    cheap: cheapReducer,
    cart: cartReducer,
})