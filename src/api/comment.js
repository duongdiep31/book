import store from "../Store"
import instance from "./instance"
export const getAllcomment = () => {
    const url = '/api/comment'
    return instance.get(url)
}
export const createComment = (data) => {
    const url = '/api/comment'
    const token = store.getState().auth.auth.token
    return instance.post(url, data, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}
export const deleteComment = (id) => {
    const url = `/api/comment/${id}`
    const token = store.getState().auth.auth.token
    return instance.post(url, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}
export const updateComment = (id, data) => {
    const url = `/api/comment/${id}`
    const token = store.getState().auth.auth.token
    return instance.post(url, data, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}