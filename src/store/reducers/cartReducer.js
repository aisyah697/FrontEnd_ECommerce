const initialCartState = {
    cart: [],
    quantity: 1
}

export default function cartReducer(cartState = initialCartState, action) {
    switch (action.type) {
        case "GET_CUSTOMER_CART":
            return {
                ...cartState,
                cart: action.payload
            }
        case "UPDATE_INPUT_QUANTITY":
            return {
                ...cartState,
                quantity: action.payload.target.value
            }
        default:
            return cartState
    }
}