import instance from "./instance";
export const getAllUser = (token) => {
    const url = '/api/users'
    return instance.get(url, {
        headers: {
            "Authorization": "Bearer " + token}
    }
    )
}
export const getUser = (id,token) => {
    const url = `/api/users/${id}` 
    return instance.get(url, {
        headers: {
            "Authorization": "Bearer "+ token       }
    })
}
export const removeUser = (id,token )=> {
    const url = `/api/users/${id}`
    return instance.delete(url, {
        headers: {
            "Authorization": "Bearer "+ token       }
    })
}
export const updateUser = (id, product,token) => {
    const url = `/api/users/${id}`;
    return instance.patch(url, product, {
        headers: {
            "Authorization": "Bearer " + token      }
    })
}