import { createAsyncThunk } from "@reduxjs/toolkit";
import { addToCart, deleteCart, getAllcart, updateCart } from "../../api/cartApi";
export const getAllCartApi = createAsyncThunk(
    'cartApi/getAllCart',
    async () => {
        const { data } = await getAllcart()
        return data
    }
)
export const addtocartApi = createAsyncThunk(
    'cartApi/addtocart',
    async (cartItems) => {
        const { data } = await getAllcart()
        const exitsUser = data.filter((item) => item.idUser._id === cartItems.idUser)
        if (exitsUser) {
            const existProduct = exitsUser.find((item) => item.idBook._id === cartItems.idBook)
            if (existProduct) {
                const count = {
                    quantity: existProduct.quantity + cartItems.quantity
                }
                const response = await updateCart(existProduct._id, count)
                return response.data
            } else {
                const response = await addToCart(cartItems)
                return response.data
            }
        } else {
            const response = await addToCart(cartItems)
            return response.data
        }
    }
)
export const removeCart = createAsyncThunk(
    'cartApi/removecart',
    async (id) => {
        const { data } = await deleteCart(id)
        return data._id
    }
)
export const increaseCartApi = createAsyncThunk(
    'cartApi/increaseCartApi',
    async (quantity) =>{
        console.log(quantity)
    }
)