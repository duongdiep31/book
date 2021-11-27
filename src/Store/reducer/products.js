const initialState = {
        products: []
}
const productReducer = (state = initialState, aciton) => {
    switch(aciton.type){
        case "getAllproduct":
            return { ...state, products: aciton.payload };
        case "addprd":
            return{...state,products: [...state.products, aciton.payload]};
        case "deleteprd":
            return{...state, products: state.products.filter((item) => item._id !== aciton.payload )}    
        case "changePrd":
                return{...state, products: state.products.map((item) => item._id === aciton.payload._id ? aciton.payload : item  ) }                
        default :
        return state
    }
}
export default productReducer