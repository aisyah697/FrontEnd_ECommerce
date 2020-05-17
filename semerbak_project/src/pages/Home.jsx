import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ListProduct from "../components/ListProduct";
import ProductCategoryHome from "../components/ProductCategoryHome";
import BestSeller from "../components/BestSeller";
import { doSignOut } from "../store/actions/actionUser";
import { allProducts } from "../store/actions/actionProduct";
import { productCategory } from "../store/actions/actionProduct";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Home extends Component {
  componentDidMount() {
    this.props.allProducts();
    this.props.productCategory();
  }

  render() {
    const categoryList = this.props.dataCategory.categoryList;
    const newArrivals = this.props.dataProduct.productList.slice(0, 4);

    console.log("cek new arrivals", this.props);
    return (
      <div className="body">
        <Navigation {...this.props} />
        <div className="row mb-4">
          <img
            className="img-banner"
            src={require("../assets/banner3.jpg")}
            style={{ width: "100%" }}
            alt=""
          />
          <div className="text-on-banner text-center">
            <h1>THIS IS WELCOMING BANNER</h1>
            <button className="btn-get-started">GET YOUR SEMERBAK</button>
          </div>
        </div>
        <h1 className="headline text-center">New Arrivals</h1>
        <hr className="divider my-2" />
        <div className="row justify-content-center">
          {newArrivals.map((value) => (
            <ListProduct
              {...this.props}
              name={value.product_name}
              price={value.price}
              image={value.image}
            />
          ))}
        </div>
        <div>
          <h1 className="headline text-center mt-4">Best Sellers</h1>
          <hr className="divider my-2" />
          <BestSeller />
        </div>

        <div className="container banner-bottom text-center p-0 my-5">
          <div className="row gif-home-1">
            <div className="col-sm p-0">
              <img src={require("../assets/gif1.gif")} alt="" />
            </div>
            <div className="col-sm pl-0 my-4 text-center">
              <h1>EXPERIENCE OUR SEMERBAK COLLECTION</h1>
              <p className="mx-5 mt-5">
                Breathe deeply.
                <br />
                Our essential oils and oil blends take you on a sensory journey
                that can instantly soothe and enliven both body and mind.
              </p>
              <Link to="/all-products">
                <button className="btn-shop-now">SHOP NOW</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="container container-cateogry p-0">
          <div className="row p-0 ml-5">
            {categoryList.map((item) => (
              <div className="col-sm">
                <ProductCategoryHome
                  {...this.props}
                  id={item.id}
                  category={item.category_name}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
