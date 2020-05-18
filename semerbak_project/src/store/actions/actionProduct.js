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

export const addProduct = (props) => {
    return async(dispatch, getState) => {
        const category = getState().product.category;
        const promo = getState().product.promo;
        let id;
        if (category === "Natural Oils") {
            id = 1;
        } else if (category === "Aromatherapy") {
            id = 2;
        } else if (category === "Bath & Body") {
            id = 3;
        } else {
            id = 4;
        }

        let input;
        if (promo === "true") {
            input = true;
        } else {
            input = false;
        }
        const bodyRequest = {
            name: getState().product.product_name,
            price: getState().product.price,
            image: getState().product.image,
            weight: getState().product.weight,
            stock: getState().product.stock,
            description: getState.product.description,
            promo: input,
            discount: getState().product.discount,
            category: id,
        };
        const myJSON = JSON.stringify(bodyRequest);
        const token = localStorage.getItem("token");
        await axios
            .post("http://0.0.0.0:5050/items", myJSON, {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Accept: "application/json; charset=utf-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(async(response) => {
                dispatch({ type: "ADD_PRODUCT_SUCCESS" });
            })
            .catch(function(error) {
                console.log(error);
            });
    };
};


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