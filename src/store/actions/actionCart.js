import axios from "axios";

const url = process.env.REACT_APP_BASE_URL

export const getCart = () => {
    return (dispatch, getState) => {
        const token = localStorage.getItem("token");

        axios.get(url + "transaction", {
                headers: {
                    "Authorization": "Bearer " + token
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
        const token = localStorage.getItem("token");

        axios({
            method: "POST",
            url: url + "transaction",
            headers: { Authorization: `Bearer ${token}` },
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
        const token = localStorage.getItem("token");

        axios({
            method: "DELETE",
            url: `${url}transaction/${id}`,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Accept: "application/json; charset=utf-8",
                Authorization: `Bearer ${token}`
            }
        })
    }
}

export const doCheckout = () => {
    return (dispatch, getState) => {
        const token = localStorage.getItem("token");

        axios({
            method: "POST",
            url: `${url}checkout`,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Accept: "application/json; charset=utf-8",
                Authorization: `Bearer ${token}`
            }
        })
    }
}