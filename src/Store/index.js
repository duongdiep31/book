import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slice/categories";
import productSlice from "./slice/productsSlice";
import userSlice from "./slice/userReducer";
const store = configureStore(
    {
        reducer: {
            product: productSlice.reducer,
            category: categorySlice.reducer,
            user: userSlice.reducer
        }
    }
)
export default store