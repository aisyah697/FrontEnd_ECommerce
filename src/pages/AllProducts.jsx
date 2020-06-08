import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ListProduct from "../components/ListProduct";
import { doSignOut } from "../store/actions/actionUser";
import { allProducts } from "../store/actions/actionProduct";
import { connect } from "react-redux";

class AllProducts extends Component {
  componentDidMount() {
    this.props.allProducts();
  }

  render() {
    const productList = this.props.productList.productList;
    return (
      <div>
        <Navigation {...this.props} />
        <h1 className="text-center mt-3">All Products</h1>
        <hr className="divider" />
        <Link to="/add-product">
          <button className="add-products ml-5 mb-5">
            <i class="fas fa-plus-square"></i> Add products
          </button>
        </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
