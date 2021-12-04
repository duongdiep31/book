import instance from "./instance";
export const addToCart = (data) => {
    const url = '/api/addCart'
    return instance.post(url, data)
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
    return instance.post(url, product)
}
export const update = (id, product) => {
    const url = `/api/book/update/${id}`;
    return instance.patch(url, product)
}