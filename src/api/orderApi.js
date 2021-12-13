import instance from "./instance";
export const getAllOrderApi = () => {
    const url = '/api/listOrder'
    return instance.get(url)
}
export const getOrder = (id) => {
    const url = `/api/detailOrder/${id}` 
    return instance.get(url)
}
export const remove = (id )=> {
    const url = `/api/book/remove/${id}`
    return instance.delete(url)
}
export const addOrder = (product) => {
    const url = '/api/addOrder/'
    return instance.post(url, product)
}
export const updateOrder = (id, product) => {
    const url = `/api/updateOrder/${id}`;
    return instance.patch(url, product)
}