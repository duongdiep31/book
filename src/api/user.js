import instance from "./instance";
export const getAllUser = () => {
    const url = '/api/users'
    return instance.get(url)
}
export const getUser = (id) => {
    const url = `/api/users/${id}` 
    return instance.get(url)
}
export const removeUser = (id )=> {
    const url = `/api/users/${id}`
    return instance.delete(url)
}
export const updateUser = (id, product) => {
    const url = `/api/users/${id}`;
    return instance.patch(url, product)
}