import store from "../Store";
import instance from "./instance";
export const addToCart = (data) => {
    const url = '/api/addCart'
    const token = store.getState().auth.auth.token
    return instance.post(url, data,
        {
            headers: {
                "Authorization": "Bearer " + token}
        })
}
export const getAllcart = () => {
    const url = `/api/listCart/` 
    return instance.get(url)
}
export const deleteCart = (id )=> {
    const url = `/api/deleteCart/${id}`
    return instance.delete(url)
}
export const insert = (product) => {
    const url = '/api/book/create/'
    return instance.post(url, product,
        )
}
export const updateCart = (id, product) => {
    const url = `/api/updateCart/${id}`;
    const token = store.getState().auth.auth.token
    return instance.patch(url, product,
        {
            headers: {
                "Authorization": "Bearer " + token}
        })
}