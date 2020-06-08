import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";


const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,
    cart: cartReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => console.warn)("check store", store.getState());

export default store;