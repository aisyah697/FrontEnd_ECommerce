import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ListProduct from "../components/ListProduct";
import { doSignOut } from "../store/actions/actionUser";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { allProducts } from "../store/actions/actionProduct";
import { Link } from "react-router-dom";

class MyProducts extends Component {
  componentDidMount() {
    this.props.allProducts();
  }
  render() {
    const is_login = localStorage.getItem("token");
    const productList = this.props.productList.productList;

    return (
      <div>
        {is_login ? (
          <div>
            <Navigation {...this.props} />
            <div>
              <h1 className="text-center mt-3">My Products</h1>
              <hr className="divider" />
              <Link to="/add-product">
                <button className="add-products ml-5 mb-5">
                  <i class="fas fa-plus-square"></i> Add products
                </button>
              </Link>
            </div>
            <div className="container">
              <div className="row list-product-home">
                {productList.map((value) => (
                  <div className="col-md-3 pr-0">
                    <ListProduct
                      {...this.props}
                      name={value.product_name}
                      price={value.price}
                      image={value.image}
                    />
                  </div>
                ))}
              </div>
            </div>
            <Footer />
          </div>
        ) : (
          <Redirect to={{ pathname: "/login" }}></Redirect>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataUser: state.user,
  productList: state.product,
});

const mapDispatchToProps = {
  doSignOut,
  allProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProducts);
