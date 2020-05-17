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

export const handleInputChange = (event) => {
    let value = event.target.value;
    return async(dispatch) => {
        await dispatch({ type: "SEARCH_PRODUCT", payload: value });
        dispatch(searchProduct(value));
    };
}

export const searchProduct = (keyword) => {
    return async(dispatch) => {
        if (keyword.length > 2) {
            try {
                const getProduct = await axios.get(
                    "http://0.0.0.0:5000/product/list"
                );
                dispatch({
                    type: "GET_ALL_PRODUCTS",
                    payload: getProduct,
                });
            } catch (error) {
                console.error(error);
            }
        }
    };
};