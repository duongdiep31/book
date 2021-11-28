import { combineReducers } from "redux";
import categoriesReducer from "./reducer/categories";
import productReducer from "./reducer/products";
import usersReducer from "./reducer/userReducer";

const rootReducer = combineReducers({
    product: productReducer,
    category: categoriesReducer,
    user: usersReducer 
})
export default rootReducer