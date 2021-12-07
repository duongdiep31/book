import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addtocartApi, getAllCartApi, removeCart } from "../action/cartAction";
 const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        cartApi: [], loading: false
    },
    reducers: {
        addtocart(state, action){
                try {
            const newProduct = action.payload;
            const existProduct = state.cart.find(item => item._id === newProduct._id);
            if (!existProduct) {
                state.cart.push(newProduct)
            } else {
                existProduct.quantity += newProduct.quantity
            }
                toast.success("Successfully")
                } catch (error) {
                    toast.error(error)
                }
        },
        increaseCart(state, action) {
                 state.cart.find(item => item._id === action.payload).quantity++;
        },
        decreaseCart(state, action) {
            const items = state.cart.find(item => item._id === action.payload);
            items.quantity--;
            if (items.quantity < 1) {
                state.cart = state.cart.filter(item => item._id !== items._id);
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            state.cart = state.cart.filter(item => item._id !== id);
        },

    },
    extraReducers: (builder) => {
            builder.addCase(addtocartApi.pending, (state, action) => {
                state.loading = true
            })
            builder.addCase(getAllCartApi.fulfilled, (state, action) => {
                state.cartApi = action.payload
            })
            builder.addCase(addtocartApi.fulfilled, (state, action) => {
                state.cartApi.push(action.payload)
                state.loading = false
            })
            builder.addCase(removeCart.fulfilled, (state, action) => {
                state.cartApi = state.cartApi.filter(item => item._id !== action.payload)
            })
    }
 
  })
  export const {addtocart, increaseCart,decreaseCart,removeItemFromCart} = cartSlice.actions
  export default cartSlice