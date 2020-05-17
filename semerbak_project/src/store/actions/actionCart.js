import axios from "axios";

const url = process.env.REACT_APP_BASE_URL

export const getCart = () => {
    return (dispatch, getState) => {
        axios.get(url + "transaction", {
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
            url: url + "transaction",
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

export const deleteCart = (id) => {
    return (dispatch, getState) => {
        axios({
            method: "DELETE",
            url: `${url}transaction/${id}`,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Accept: "application/json; charset=utf-8",
                Authorization: `Bearer ${getState().user.token}`
            }
        })
    }
}

export const doCheckout = () => {
    return (dispatch, getState) => {
        axios({
            method: "POST",
            url: `${url}checkout`,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Accept: "application/json; charset=utf-8",
                Authorization: `Bearer ${getState().user.token}`
            }
        })
    }
}