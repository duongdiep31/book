import store from "../Store";
import instance from "./instance";
export const getAllUser = () => {
    const token = store.getState().auth.auth.token
    const url = '/api/users'
    return instance.get(url, {
        headers: {
            "Authorization": "Bearer " + token}
    }
    )
}
export const getUser = (id) => {
    const token = store.getState().auth.auth.token
    const url = `/api/users/${id}` 
    return instance.get(url, {
        headers: {
            "Authorization": "Bearer "+ token       }
    })
}
export const removeUser = (id )=> {
    const token = store.getState().auth.auth.token
    const url = `/api/users/${id}`
    return instance.delete(url, {
        headers: {
            "Authorization": "Bearer "+ token       }
    })
}
export const updateUser = (id, product) => {
    const token = store.getState().auth.auth.token
    const url = `/api/users/${id}`;
    return instance.patch(url, product, {
        headers: {
            "Authorization": "Bearer " + token      }
    })
}