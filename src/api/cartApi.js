import store from "../Store";
import instance from "./instance";
export const addToCart = (data) => {
    const url = '/api/addCart'
    return instance.post(url, data)
}
export const getAllcart = () => {
    const token = store.getState().auth.auth.token
    const url = `/api/listCart/` 
    return instance.get(url,{
        headers: {
            "Authorization": "Bearer " + token}
    })
}
export const deleteCart = (id )=> {
    const token = store.getState().auth.auth.token
    const url = `/api/deleteCart/${id}`
    return instance.delete(url,{
        headers: {
            "Authorization": "Bearer " + token}
    })
}
export const insert = (product) => {
    const url = '/api/book/create/'
    return instance.post(url, product
        )
}
export const updateCart = (id, product) => {
    const token = store.getState().auth.auth.token
    const url = `/api/updateCart/${id}`;
    return instance.patch(url, product,{
        headers: {
            "Authorization": "Bearer " + token}
    })
}