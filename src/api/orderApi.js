import store from "../Store";
import instance from "./instance";
export const getAllOrderApi = (page) => {
    const token = store.getState().auth.auth.token
    const url = `/api/listOrder?page=${page.page}&limit=${page.limit}`
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
    const token = store.getState().auth.auth.token
    const url = '/api/addOrder/'
    return instance.post(url, product, {
        headers: {
            "Authorization": "Bearer " + token}
    })
}
export const updateOrder = (data) => {
    const token = store.getState().auth.auth.token
    const url = `/api/updateOrder/${data.id}`;
    return instance.patch(url, data.user, {
        headers: {
            "Authorization": "Bearer " + token}
    })
}