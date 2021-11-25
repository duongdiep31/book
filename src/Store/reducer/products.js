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
            return{...state, products: state.products.filter((item) => item.id != aciton.payload )}    
            case "changePrd":
                return{...state, products: state.products.map((item) => item.id === aciton.payload.id ? aciton.payload : item  ) }                
        default :
        return state
    }
}
export default productReducer