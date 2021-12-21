import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slice/categories";
import productSlice from "./slice/productsSlice";
import userSlice from "./slice/userReducer";
import { combineReducers } from "redux";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import authSlice from "./slice/authSlcie";
import cartSlice from "./slice/cartSlice";
import cartSliceApi from "./slice/cartSliceApi";
import orderSlice from "./slice/orderSlice";
import wishListSlice from "./slice/wishlistSlice";
  const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['product', 'category','user','cartApi','order', 'wishlist']
  }
  const rootReducer = combineReducers({
    product: productSlice.reducer,
    category: categorySlice.reducer,
    user: userSlice.reducer,
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    cartApi: cartSliceApi.reducer,
    order: orderSlice.reducer,
    wishlist: wishListSlice.reducer
  })
  const persistedReducer = persistReducer(persistConfig,rootReducer)

 const store = configureStore(
    {
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    }
)
export default store