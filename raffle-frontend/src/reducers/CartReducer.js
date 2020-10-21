export default function CartReducer(state = { cart: null, requesting: false }, action) {
    switch(action.type){
        case "START_NEW_CART":
            return {...state, requesting: true}
        case "LOAD_CART":
            return {...state, cart: action.payload, requesting: false}
        case "NEW_CART_ITEM":
            return {...state, cart: action.payload, requesting: false}
        default:
            return state
    }
}