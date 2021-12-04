import { createAsyncThunk } from "@reduxjs/toolkit";
import { addToCart, deleteCart, getAllcart } from "../../api/cartApi";
export const getAllCartApi = createAsyncThunk(
    'auth//getAllCart',
    async () => {
        const {data} = await getAllcart()
        return data
    }
)
export const addtocartApi = createAsyncThunk(
    'cart/addtocart',
    async (cartItems) => {
             const {data} = await addToCart(cartItems)
             return data   
    }
)
export const removeCart = createAsyncThunk(
    'cart/removecart',
    async (id) => {
        const {data} = await deleteCart(id)
        console.log(data);
     return id
    }
)