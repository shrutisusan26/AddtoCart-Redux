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
