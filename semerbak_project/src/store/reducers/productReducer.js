const initialProductState = {
    productList: [],
    categoryID: {},
    categoryList: [],
    serach: "",
    productName: "",
    price: 0,
    image: "",
    weight: "",
    stock: 0,
    description: "",
    promo: "",
    discount: 0,
    category: "",
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
        case "ADD_PRODUCT_SUCCESS":
            return {
                ...productState,
                statusError: false
            }
        default:
            return productState;
    }
}