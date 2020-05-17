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
    return (dispatch, getState) => {
        axios({
            method: "POST",
            url: "http://0.0.0.0:5000/transaction",
            headers: { Authorization: `Bearer ${getState().user.token}` },
            params: {
                product_id: product_id,
                quantity: getState().cart.quantity
            }
        })
    }
}

export const updateInputQty = (event) => ({
    type: "UPDATE_INPUT_QUANTITY",
    payload: event
})