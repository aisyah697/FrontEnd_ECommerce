import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ListProductCategory from "../components/ProductCategoryList";
import { doSignOut } from "../store/actions/actionUser";
import { productCategory } from "../store/actions/actionProduct";
import { connect } from "react-redux";
import { allProducts } from "../store/actions/actionProduct";

class ProductCategory extends Component {
  componentDidMount() {
    this.props.allProducts();
    this.props.productCategory();
  }

  render() {
    let productCategory = this.props.location.pathname;
    productCategory = productCategory.replace("/category/", "");
    productCategory = productCategory.split("&&");
    const categoryID = productCategory[0];
    productCategory = productCategory[1].replace(/-/gi, " ");
    const productPerCategory = this.props.dataCategory.productList.filter(
      (item) => item.category === categoryID
    );

    return (
      <div>
        <Navigation {...this.props} />
        <h1 className="text-center">{productCategory}</h1>
        <hr className="divider" />
        <div className="container">
          <div className="row list-product-home">
            {productPerCategory.map((item) => (
              <div className="col-md-3 pr-0">
                <ListProductCategory
                  {...this.props}
                  name={item.product_name}
                  price={item.price}
                  image={item.image}
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
  dataProduct: state.product,
  dataCategory: state.product,
});

const mapDispatchToProps = {
  doSignOut,
  allProducts,
  productCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategory);
