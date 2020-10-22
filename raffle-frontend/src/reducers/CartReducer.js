export default function CartReducer(state = { cart: null, requesting: false }, action) {
    switch(action.type){
        case "LOADING":
            return {...state, requesting: true}
        case "LOAD_CART":
            return {...state, cart: action.payload, requesting: false}
        case "NEW_CART_ITEM":
            return {...state, cart: action.payload, requesting: false}
        case "ITEM_REMOVED":
            const newCart = state.cart.cart_items_info.filter( ci => ci.id !== action.payload)
            const cart_item = state.cart.cart_items_info.find( ci => ci.id === action.payload)
            const newTotal = parseFloat(state.cart.total) - parseFloat(cart_item.price)
            return {...state, cart: {...state.cart, total: newTotal, cart_items_info: newCart}, requesting: false}
        default:
            return state
    }
}