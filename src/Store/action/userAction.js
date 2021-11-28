import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { getAllUser, removeUser } from "../../api/user";
export const getAlluser = async (dispatch) => {
            const {data}  = await getAllUser()
            console.log(data);
            dispatch({
                type: "getAllusers",
                payload: data
            })
}
// export const addcate =  (category) => async (dispatch) => {
//             const {data} = await insertcate(category)
//             toast.success("Add Category successfully")
//             dispatch({
//                 type: "addcate",
//                 payload:  data
//             })
// }
export const deleteuser =   (id) => async (dispatch) => { 
    try {
         await removeUser(id)
            toast.success("delete successfully")
         dispatch({
            type: 'deleteuser',
            payload: id
        })
    } catch (error) {
            toast.error(error)
    }

}
// export const changecate = (category) => async (dispatch) => {
//     console.log(category._id);
//     try {
//         const {data} = await updatecate(category._id,category)
//         toast.success("Update successfully")
//         dispatch({
//             type: "changecate",
//             payload: data
//         })
//     } catch (error) {
        
//     }
// }