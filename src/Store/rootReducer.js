import { combineReducers } from "redux";
import categoriesReducer from "./reducer/categories";
import productReducer from "./reducer/products";

const rootReducer = combineReducers({
    product: productReducer,
    category: categoriesReducer
})
export default rootReducer