import { getAllcate, insertcate, removecate, updatecate } from "../../api/categories"
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
export const getAllcategory = async (dispatch) => {
            const {data}  = await getAllcate()
            dispatch({
                type: "getAllcate",
                payload: data
            })
}
export const addcate =  (category) => async (dispatch) => {
            const {data} = await insertcate(category)
            toast.success("Add Category successfully")
            dispatch({
                type: "addcate",
                payload:  data
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
    console.log(category._id);
    try {
        const {data} = await updatecate(category._id,category)
        toast.success("Update successfully")
        dispatch({
            type: "changecate",
            payload: data
        })
    } catch (error) {
        
    }
}