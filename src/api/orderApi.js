import store from "../Store";
import instance from "./instance";
export const getAllOrderApi = () => {
    const token = store.getState().auth.auth.token
    const url = '/api/listOrder'
    return instance.get(url, {
        headers: {
            "Authorization": "Bearer " + token}
    })
}
export const getOrder = (id) => {
    const token = store.getState().auth.auth.token
    const url = `/api/detailOrder/${id}` 
    return instance.get(url, {
        headers: {
            "Authorization": "Bearer " + token}
    })
}
export const remove = (id )=> {
    const token = store.getState().auth.auth.token
    const url = `/api/book/remove/${id}`
    return instance.delete(url, {
        headers: {
            "Authorization": "Bearer " + token}
    })
}
export const addOrder = (product) => {
    const url = '/api/addOrder/'
    return instance.post(url, product)
}
export const updateOrder = (id, product) => {
    const token = store.getState().auth.auth.token
    const url = `/api/updateOrder/${id}`;
    return instance.patch(url, product, {
        headers: {
            "Authorization": "Bearer " + token}
    })
}