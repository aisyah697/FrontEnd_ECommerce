import axios from "axios";

export const getCart = () => {
    return (dispatch, getState) => {
        axios.get("http://0.0.0.0:5000/transaction", {
                headers: {
                    "Authorization": "Bearer " + getState().user.token
                }
            })
            .then((response) => {
                dispatch({
                    type: "GET_CUSTOMER_CART",
                    payload: response.data
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }
}

export const postCart = (product_id) => {
    return (getState) => {
        let bodyRequest = {
            product_id,
            quantity: getState().cart.quantity
        }
        bodyRequest = JSON.stringify(bodyRequest)
        axios.post("http://0.0.0.0:5000/transaction", bodyRequest, {
                headers: {
                    "Authorization": "Bearer " + getState().user.token
                }
            })
            .catch((error) => (console.error(error)))
    }
}

export const updateInputQty = (event) => ({
    type: "UPDATE_INPUT_QUANTITY",
    payload: event
})