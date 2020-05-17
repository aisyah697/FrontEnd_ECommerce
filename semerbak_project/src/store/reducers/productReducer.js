const initialProductState = {
    productList: [],
    categoryID: {},
    categoryList: [],
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
        default:
            return productState
    }
}