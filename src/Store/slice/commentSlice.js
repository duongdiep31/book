import { createSlice } from "@reduxjs/toolkit";
import { createCommentAction,  listCommentAction, removeCommentAction, updateCommentAction } from "../action/comment";
const commentSlice = createSlice({
    name: 'comment',
    initialState: {
        comment: [],
        loading: false
    },
    extraReducers: (builder) => {
        builder.addCase(listCommentAction.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(listCommentAction.fulfilled, (state, action) => {
            state.comment = action.payload
            state.loading = false
        })
        builder.addCase(createCommentAction.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(createCommentAction.fulfilled, (state, action) => {
            state.comment.list += action.payload
            state.loading = false
        })
        builder.addCase(removeCommentAction.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(removeCommentAction.fulfilled, (state, action) => {
            state.comment.list = state.comment.list.filter(item => item._id !== action.payload._id)
            state.loading = false
        })
        builder.addCase(updateCommentAction.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(updateCommentAction.fulfilled, (state, action) => {
            state.comment += action.payload
            state.loading = false
        })
       

    }
})
export default commentSlice