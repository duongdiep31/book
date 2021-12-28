import { createAsyncThunk } from "@reduxjs/toolkit"
import { createComment, deleteComment, getAllcomment, updateComment } from "../../api/comment"

export const listCommentAction = createAsyncThunk(
    'comment/listComment',
    async () => {
        const {data} = await getAllcomment()
        return data
    }
)
export const createCommentAction = createAsyncThunk(
    'comment/createCommentAction',
    async (e) => {
        const {data} = await createComment(e)
        console.log(data)
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
        const {data} = await updateComment(e._id, e)
        return data
    }
)