import { isAuthenticate } from "../ultis";
import instance from "./instance";
const token = isAuthenticate().token
console.log('token',token);
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
    return instance.delete(url, {
        headers: {
            "Authorization": "Bearer " + token       }
    })
}
export const updateUser = (id, product) => {
    const url = `/api/users/${id}`;
    return instance.patch(url, product)
}