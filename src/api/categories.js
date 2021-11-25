import instance from "./instance";
export const getAllcate = () => {
    const url = '/categories/'
    return instance.get(url)
}
export const getcate = (id) => {
    const url = `/categories/` + id
    return instance.get(url)
}
export const removecate = (id )=> {
    const url = `/categories/${id}`
    return instance.delete(url)
}
export const insertcate = (product) => {
    const url = '/categories/'
    return instance.post(url, product)
}
export const updatecate = (id, product) => {
    const url = `/categories/${id}`;
    return instance.patch(url, product)
}