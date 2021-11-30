import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../api/product";
export const setCartitem = createAsyncThunk(
    'cart/setCartitem',
    async (cart) => {
         localStorage.setItem('cart', JSON.stringify(cart))
    }
)
export const getCartitem = createAsyncThunk(
    'cart/getCartitem',
    async() => {
        const cartItems = localStorage.getItem("cart") ?
        JSON.parse(localStorage.getItem("cart")) : []
        return cartItems
    }
)
export const addtocart = createAsyncThunk(
    'cart/addtocart',
    async (id) => {
        const itemCart = localStorage.getItem("cart") ?
        JSON.parse(localStorage.getItem("cart")) : []
        const {data} = await get(id)
        const cartItems = {
            ...data,
            quantity: 1
        }
    const existProduct = itemCart.find(product => product._id === data._id);
    if (existProduct) {
        existProduct.quantity++
    } else {
        cartItems = [...itemCart, cartItems]
    }
     localStorage.setItem('cart',JSON.stringify(cartItems))
     return cartItems
    }
)
export const removeCart = createAsyncThunk(
    'cart/removecart',
    async (id) => {
     return id
    }
)