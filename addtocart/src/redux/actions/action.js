export const ADD = (item) =>{
    return {
        type: "ADD_CART",
        payload: item
    };
}
// remove items from card
export const REMOVE = (id) =>{
    return {
        type: "REMOVE_FROM_CART",
        payload: id
    }
}

export const REMOVE_ITEM = (item) =>{
    return {
        type: "REMOVE_IDV_FROM_CART",
        payload: item
    }
}