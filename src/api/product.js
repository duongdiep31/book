import store from "../Store";
import instance from "./instance";
export const getAll = (page) => {
    const url = `/api/book/list?page=${page}`
    return instance.get(url)
}

export const get = (id) => {
    const url = `/api/book/detail/${id}`
    return instance.get(url)
}
export const remove = (id) => {
    const token = store.getState().auth.auth.token
    const url = `/api/book/remove/${id}`
    return instance.delete(url, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}
export const insert = (product) => {
    const url = '/api/book/create/'
    const token = store.getState().auth.auth.token
    return instance.post(url, product, {
        headers: {
            "Authorization": "Bearer " + token
        }
    }
    )
}
export const update = (id, product) => {
    const token = store.getState().auth.auth.token
    const url = `/api/book/update/${id}`;
    return instance.patch(url, product, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}
export const search = (value) => {
    const url = `/api/book/search?name=${value}`;
    return instance.post(url)
}