import { toast } from "react-toastify"
import { getAll, insert, remove, update } from "../../api/product"

export const getAllproduct = async (dispatch) => {
            const {data}  = await getAll()
            dispatch({
                type: "getAllproduct",
                payload: data
            })
}
export const addPrd =  (product) => async (dispatch) => {
            const {data} = await insert(product)
            dispatch({
                type: "addprd",
                payload: data
            })

}
export const deletePrd = (id) => async (dispatch) => { 
    try {
        await remove(id)
        toast.success("Delete Successfully")
        dispatch({
           type: 'deleteprd',
           payload: id
       }
       )

   } catch (error) {
           toast.error(error)
   }
       

}
export const changePrd = (product) => async (dispatch) => {
    try {
        const {data} = await update(product._id,product)
        toast.success("Change successfully")
        dispatch({
            type: "changePrd",
            payload: data
        })
    } catch (error) {
            toast.error('Error')
    }
}