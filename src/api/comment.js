import store from "../Store"
import instance from "./instance"
export const getAllcomment = (page) => {
    const url = `/api/comment?page=${page.page}&limit=${page.limit}`
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
    return instance.delete(url, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}
export const updateComment = ( data) => {
    console.log('dataApi', data);
    const url = `/api/comment/${data.id}`
    const token = store.getState().auth.auth.token
    return instance.patch(url, data.user, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}
export const commentDetail = (id) => {
    const url = `/api/comment/${id}`
    const token = store.getState().auth.auth.token
    return instance.get(url, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}