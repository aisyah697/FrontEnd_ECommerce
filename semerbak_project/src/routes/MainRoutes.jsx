import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/index";

import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResult from "../pages/SearchResult";
import Checkout from "../pages/Checkout";
import Profile from "../pages/Profile";
import MyProducts from "../pages/MyProducts";
import AddProduct from "../pages/AddProduct";
import ProductDetail from "../pages/ProductDetail";
import ProductCategory from "../pages/ProductCategory";
import ShoppingCart from "../pages/ShoppingCart";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/add-product" component={AddProduct} />
          <Route path="/my-products" component={MyProducts} />
          <Route exact path="/all-products" component={AllProducts} />
          <Route path="/search-result" component={SearchResult} />
          <Route path="/shopping-cart" component={ShoppingCart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/all-products/:product_name" component={ProductDetail} />
          <Route path="/category/:category" component={ProductCategory} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
