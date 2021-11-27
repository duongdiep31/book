import instance from "./instance";
export const getAll = () => {
    const url = '/api/book/list'
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
    return instance.post(url, product)
}
export const update = (id, product) => {
    const url = `/api/book/update/${id}`;
    return instance.patch(url, product)
}