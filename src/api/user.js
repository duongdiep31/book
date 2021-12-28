import store from "../Store";
import instance from "./instance";
export const getAllUser = (page) => {
    const token = store.getState().auth.auth.token
    const url = `/api/users?page=${page.page}&limit=${page.limit}`
    return instance.get(url, {
        headers: {
            "Authorization": "Bearer " + token}
    }
    )
}
export const getUser = (id) => {
    const token = store.getState().auth.auth.token
    const url = `/api/user/${id}` 
    return instance.get(url, {
        headers: {
            "Authorization": "Bearer "+ token }
    })
}
export const removeUser = (id )=> {
    const token = store.getState().auth.auth.token
    const url = `/api/users/${id}`
    return instance.delete(url, {
        headers: {
            "Authorization": "Bearer "+ token }
    })
}
export const updateUser = (id, product) => {
    const token = store.getState().auth.auth.token
    const url = `/api/users/${id}`;
    return instance.patch(url, product, {
        headers: {
            "Authorization": "Bearer " + token }
    })
}