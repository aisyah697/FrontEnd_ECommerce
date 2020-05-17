import axios from "axios"

export const allProducts = () => {
    return (dispatch) => {
        axios
            .get("http://0.0.0.0:5000/product/list")
            .then((response) => {
                console.warn("check product action", response)
                dispatch({
                    type: "GET_ALL_PRODUCTS",
                    payload: response.data
                })
            })
            .catch((error) => {
                console.warn(error)
            })
    }
}

export const productCategory = () => {
    return (dispatch) => {
        axios
            .get("http://0.0.0.0:5000/product_category")
            .then((response) => {
                dispatch({
                    type: "GET_PRODUCT_CATEGORY",
                    payload: response.data
                })
            })
            .catch((error) => (console.error(error)))
    }
}