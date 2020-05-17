const initialProductState = {
    productList: [],
    categoryID: {},
    categoryList: [],
    serach: "",
}

export default function productReducer(productState = initialProductState, action) {
    switch (action.type) {
        case "GET_ALL_PRODUCTS":
            return {
                ...productState,
                productList: action.payload
            }
        case "GET_PRODUCT_CATEGORY":
            return {
                ...productState,
                categoryList: action.payload
            }
        case "SEARCH_PRODUCT":
            return {
                ...productState,
                search: action.payload
            }
        default:
            return productState;
    }
}