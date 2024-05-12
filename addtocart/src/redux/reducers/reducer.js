const INIT_STATE = {
    carts : []
}

export const cartReducer = (state = INIT_STATE, action ) =>{
    switch(action.type){
        case 'ADD_CART':
            return {
                ...state, // spread operator
                carts: [...state.carts, action.payload] 
            }
        case 'REMOVE_FROM_CART':
            const data = state.carts.filter((e)=>{
                return e.id !== action.payload;
            })
            return {
                ...state,
                carts : data
            }
        default:
            return state;
    }
}