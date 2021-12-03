import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
export const addtocart = createAsyncThunk(
    'cart/addtocart',
    async (cartItems) => {
        console.log(...cartItems);
    }
)
export const removeCart = createAsyncThunk(
    'cart/removecart',
    async (id) => {
     return id
    }
)