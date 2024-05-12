const INIT_STATE = {
    carts : []
}

export const cartReducer = (state = INIT_STATE, action ) =>{
    switch(action.type){
        case 'ADD_CART':
            // find the index of the item in card ( if already present );
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
            if(itemIndex >= 0 ){
                const updatedCarts = state.carts.map((element, key) =>{
                    if(key === itemIndex){
                        return { ...element, qnty: element.qnty + 1};
                    }
                    return element;
                })
                return { ...state, carts: updatedCarts};
            }
            else{
                const temp = {...action.payload, qnty:1}
                
                return {
                ...state, // spread operator
                carts: [...state.carts, temp] 
                }
            }
            
        case 'REMOVE_FROM_CART':
            const data = state.carts.filter((e)=>{
                return e.id !== action.payload;
            })
            return {
                ...state,
                carts : data
            }
        case 'REMOVE_IDV_FROM_CART':
            const iIndex = state.carts.findIndex((item) => item.id === action.payload.id);
            if(state.carts[iIndex].qnty >= 1){
                const updatedCarts = state.carts.map((element, key) =>{
                    if(key === iIndex){
                        return { ...element, qnty: element.qnty - 1};
                    }
                    return element;
                });
                return { ...state, carts: updatedCarts};
            }
        default:
            return state;
    }
}