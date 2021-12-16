import store from "../Store";
import instance from "./instance";
export const getAllcate = () => {
    const url = '/api/categories/'
    return instance.get(url)
}
export const getcate = (id) => {
    const url = `/api/categories/${id}` 
    return instance.get(url)
}
export const removecate = (id )=> {
    const token = store.getState().auth.auth.token
    const url = `/api/categories/${id}`
    return instance.delete(url, {
        headers: {
            "Authorization": "Bearer " + token}
    })
}
export const insertcate = (product) => {
    const token = store.getState().auth.auth.token
    const url = '/api/addCategories/'
    return instance.post(url, product, {
        headers: {
            "Authorization": "Bearer " + token}
    })
}
export const updatecate = (id, product) => {
    const token = store.getState().auth.auth.token
    const url = `/api/categories/${id}`;
    return instance.patch(url, product, {
        headers: {
            "Authorization": "Bearer " + token}
    })
}