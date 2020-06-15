import axios from "axios";

const url = process.env.REACT_APP_BASE_URL;

export const allProducts = () => {
    return (dispatch) => {
        axios
            .get(url + "product/list")
            .then((response) => {
                console.warn("check product action", response);
                dispatch({
                    type: "GET_ALL_PRODUCTS",
                    payload: response.data,
                });
            })
            .catch((error) => {
                console.warn(error);
            });
    };
};

export const productCategory = () => {
    return (dispatch) => {
        axios
            .get(url + "product_category")
            .then((response) => {
                dispatch({
                    type: "GET_PRODUCT_CATEGORY",
                    payload: response.data,
                });
            })
            .catch((error) => console.error(error));
    };
};

export const handleInputChange = (event) => {
    let value = event.target.value;
    return async(dispatch) => {
        await dispatch({ type: "SEARCH_PRODUCT", payload: value });
        dispatch(searchProduct(value));
    };
};

export const searchProduct = (keyword) => {
    return async(dispatch) => {
        if (keyword.length > 2) {
            try {
                const getProduct = await axios.get(url + "product/list");
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

export const changeInputProduct = (e) => {
    return {
        type: "CHANGE_INPUT_PRODUCT",
        payload: e,
    };
};

export const fileSelectedHandler = (e) => {
    return {
        type: "CHANGE_INPUT_FILE",
        payload: e,
    };
};

export const postProduct = () => {
    return async(dispatch, getState) => {
        const token = localStorage.getItem("token");

        const inputData = new FormData();
        inputData.append("product_name", getState().product.product_name);
        inputData.append("price", getState().product.price);
        inputData.append("image", getState().product.image);
        inputData.append("stock", getState().product.stock);
        inputData.append("weight", getState().product.weight);
        inputData.append("category", getState().product.category);
        inputData.append("description", getState().product.description);
        inputData.append("created_at", getState().product.created_at);
        inputData.append("updated_at", getState().product.updated_at);

        axios({
            method: "POST",
            url: url + "product",
            data: inputData,
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            },
        });
    };
};

export const deleteProduct = (id) => {
    return (dispatch, getState) => {
        const token = localStorage.getItem("token");

        axios({
            method: "DELETE",
            url: `${url}product/${id}`,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Accept: "application/json; charset=utf-8",
                Authorization: `Bearer ${token}`
            }
        })
    }
}