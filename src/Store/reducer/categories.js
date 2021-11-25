const initialState = {
    categories: []
}
const categoriesReducer = (state = initialState, aciton) => {
switch(aciton.type){
    case "getAllcate":
        return { ...state, categories: aciton.payload };
    case "addcate":
        return { ...state, categories: [...state.categories, aciton.payload] };
    case "deletecate":
        return{...state, categories: state.categories.filter((item) => item.id != aciton.payload)}
    case "changecate":
            return{...state, categories: state.categories.map((item) => item.id === aciton.payload.id ? aciton.payload : item  ) }                
    default :
    return state
}
}
export default categoriesReducer