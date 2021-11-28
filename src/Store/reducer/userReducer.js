const initialState = {
    users: []
}
const usersReducer = (state = initialState, aciton) => {
switch(aciton.type){
    case "getAllusers":
        return { ...state, users: aciton.payload };
    // case "addprd":
    //     return{...state,users: [...state.products, aciton.payload]};
    case "deleteuser":
        return{...state, users: state.users.filter((item) => item._id !== aciton.payload )}    
    // case "changePrd":
    //         return{...state, users: state.products.map((item) => item._id === aciton.payload._id ? aciton.payload : item  ) }                
    default :
    return state
}
}
export default usersReducer