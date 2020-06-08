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
            .post(url + "items", myJSON, {
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
        inputData.append("productName", getState().article.productName);
        inputData.append("price", getState().article.price);
        inputData.append("image", getState().article.image);
        inputData.append("stock", getState().article.stock);
        inputData.append("weight", getState().article.weight);
        inputData.append("category", getState().article.category);
        inputData.append("description", getState().article.description);
        inputData.append("createdAt", getState().article.created_at);
        inputData.append("updatedAt", getState().article.updated_at);

        axios({
            method: "POST",
            url: url + "article",
            data: inputData,
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            },
        });
    };
};