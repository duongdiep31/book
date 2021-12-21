import store from "../Store";
import instance from "./instance";
export const getAllWishlistApi = () => {
    const token = store.getState().auth.auth.token
    const url = `/api/wishList`
    return instance.get(url, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}
export const removeWishlistApi = (id) => {
    const token = store.getState().auth.auth.token
    const url = `/api/wishList/${id}`
    return instance.delete(url, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}
export const insertWishlistApi = (product) => {
    const url = '/api/wishList'
    const token = store.getState().auth.auth.token
    return instance.post(url, product, {
        headers: {
            "Authorization": "Bearer " + token
        }
    }
    )
}