export default function CartReducer(state = { cart: [], requesting: false }, action) {
    switch(action.type){
        case "START_NEW_CART":
            return {...state, requesting: true}
        case "NEW_CART_ITEM":
            return {...state, cart: action.payload, requesting: false}
        default:
            return state
    }
}