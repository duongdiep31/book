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
    const url = `/api/categories/${id}`
    return instance.delete(url)
}
export const insertcate = (product) => {
    const url = '/api/addCategories/'
    return instance.post(url, product)
}
export const updatecate = (id, product) => {
    const url = `/api/categories/${id}`;
    return instance.patch(url, product)
}