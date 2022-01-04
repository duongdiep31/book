import { createSlice } from "@reduxjs/toolkit";
import { addtoWishlist, getAllWishlist, removeWishlist } from "../action/wishlistAction";
 const wishListSlice = createSlice({
    name: 'wishlist',
    initialState: {
        wishlist: [], loading: false
    },
    extraReducers: (builder) => {
                        builder.addCase(getAllWishlist.fulfilled, (state, action) => {
                            state.wishlist = action.payload
                        } )
                        builder.addCase(addtoWishlist.fulfilled, (state, action) => {
                            state.wishlist += action.payload
                        })
                        builder.addCase(removeWishlist.fulfilled, (state, action) => {
                            state.wishlist = state.wishlist.filter((item)=> item._id !== action.payload)
                        } )
    }
  })
  export default wishListSlice