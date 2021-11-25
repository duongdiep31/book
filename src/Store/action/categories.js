import { getAllcate, insertcate, removecate, updatecate } from "../../api/categories"
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
export const getAllcategory = async (dispatch) => {
            const {data}  = await getAllcate()
            console.log(data);
            dispatch({
                type: "getAllcate",
                payload: data
            })
}
export const addcate =  (category) => async (dispatch) => {
            const {data} = await insertcate(category)
            dispatch({
                type: "addcate",
                payload:data
            })

}
export const deletecate =   (id) => async (dispatch) => { 
    try {
         await removecate(id)
            toast.success("delete successfully")
         dispatch({
            type: 'deletecate',
            payload: id
        })
    } catch (error) {
            toast.error(error)
    }

}
export const changecate = (category) => async (dispatch) => {
    try {
        const {data} = await updatecate(category.id,category)
        dispatch({
            type: "changecate",
            payload: data
        })
    } catch (error) {
        
    }
}