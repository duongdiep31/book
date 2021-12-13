import store from "../Store";
import instance from "./instance";
export const getAll = (page) => {
    const url = `/api/book/list?page=${page.page}&limit=${page.limit}`
    return instance.get(url)
}
export const getAllPrd = () => {
    const url = `/api/book/list`
    return instance.get(url)
}

export const get = (id) => {
    const url = `/api/book/detail/${id}` 
    return instance.get(url)
}
export const remove = (id )=> {
    const url = `/api/book/remove/${id}`
    return instance.delete(url)
}
export const insert = (product) => {
    const url = '/api/book/create/'
    const token = store.getState().auth.auth.token
    return instance.post(url, product, {
        headers: {
            "Authorization": "Bearer " + token}
    }
        )
}
export const update = (id, product) => {
    const url = `/api/book/update/${id}`;
    return instance.patch(url, product)
}