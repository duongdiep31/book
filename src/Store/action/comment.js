import { createAsyncThunk } from "@reduxjs/toolkit"
import {  createComment, deleteComment, getAllcomment, updateComment } from "../../api/comment"

export const listCommentAction = createAsyncThunk(
    'comment/listComment',
    async (page) => {
        const {data} = await getAllcomment(page)
        return data
    }
)
export const createCommentAction = createAsyncThunk(
    'comment/createCommentAction',
    async (e) => {
        const {data} = await createComment(e)
        return data
    }
)
export const removeCommentAction = createAsyncThunk(
    'comment/removeCommentAction',
    async (id) => {
        const {data} = await deleteComment(id)
        return data
    }
)
export const updateCommentAction = createAsyncThunk(
    'comment/updateCommentAction',
    async (e) => {
        const {data} = await updateComment(e)
        return data
    }
)
