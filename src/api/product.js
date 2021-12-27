import store from "../Store";
import instance from "./instance";
export const getAll = (page) => {
    const url = `/api/book/list?page=${page.page}&limit=${page.limit}`
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
export const search = (page) => {
    const url = `/api/book/search?page=${page.page}&limit=${page.limit}&name=${page.value}`;
    return instance.post(url)
}
export const related = (id) => {
    const url = `/api/related/${id}`
    return instance.post(url)
}   
export const trending = () => {
    const url = `/api/trending`
    return instance.get(url)
}   