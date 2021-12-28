import { createSlice } from "@reduxjs/toolkit";
import { createCommentAction,  listCommentAction, removeCommentAction, updateCommentAction } from "../action/comment";
const commentSlice = createSlice({
    name: 'comment',
    initialState: {
        comment: []
    },
    extraReducers: (builder) => {
        builder.addCase(listCommentAction.fulfilled, (state, action) => {
            state.comment = action.payload
        })
        builder.addCase(createCommentAction.fulfilled, (state, action) => {
            state.comment += action.payload

        })
        builder.addCase(removeCommentAction.fulfilled, (state, action) => {
            state.comment = state.comment.list.filter(item => item._id !== action.payload._id)
        })
        builder.addCase(updateCommentAction.fulfilled, (state, action) => {
            state.comment += action.payload
        })
       

    }
})
export default commentSlice