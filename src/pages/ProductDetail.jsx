import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { doSignOut } from "../store/actions/actionUser";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { allProducts } from "../store/actions/actionProduct";
import { postCart, updateInputQty } from "../store/actions/actionCart";

class ProductDetail extends Component {
  componentDidMount() {
    this.props.allProducts();
  }

  render() {
    let productName = this.props.location.pathname;
    productName = productName.replace("/all-products/", "");
    productName = productName.replace(/-/gi, " ");
    const productDetail = this.props.dataProduct.productList.filter(
      (item) => item.product_name === productName
    );

    return (
      <div>
        <Navigation {...this.props} />
        {productDetail.map((item) => (
          <div className="row ml-5 mb-5 mt-5">
            <div
              className="card card-product-desc col-sm-6"
              style={{ width: "30rem" }}
            >
              <img
                src={process.env.REACT_APP_BASE_URL + "img/" + item.image}
                className="card-img-top"
                alt="{item.product_name}"
              />
            </div>
            <div className="col-sm-6">
              <h3>{item.product_name}</h3>
              <h4>IDR {item.price}</h4>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="far fa-star"></i>
              </span>
              <div id="cart-block">
                <div id="quantity-box">
                  <strong>
                    <label for>Quantity:</label>
                  </strong>
                  <div className="wrapper">
                    <div class="qty">
                      <span class="minus bg-dark">-</span>
                      <input
                        type="number"
                        class="count"
                        name="qty"
                        defaultValue="1"
                        onChange={(event) => this.props.updateInputQty(event)}
                      />
                      <span class="plus bg-dark">+</span>
                    </div>

                    <div className="add-to-cart-button mt-2">
                      <Link
                        id="cart-button"
                        className="btn"
                        to="/shopping-cart"
                        onClick={() => this.props.postCart(item.id)}
                      >
                        <i className="fas fa-cart-plus"></i> ADD TO CART
                      </Link>
                    </div>
                    <input type="hidden" name="product_id" value="" />
                  </div>
                </div>
              </div>
              <br />
              <div>
                <p>Description:</p>
                <p>{item.description}</p>
              </div>
              <div>
                <strong>
                  <p>Caution:</p>
                </strong>
                <p>
                  For external use only. For best results, refrigerate and use
                  within 6 months after opening.
                </p>
                <p>Shelf life : 6-12 months</p>
              </div>
              <div>
                <strong>
                  <span>POM NA18188102291</span>
                </strong>
                <br />
                <strong>
                  <span>Expiry Date : April 2021</span>
                </strong>
              </div>
            </div>
          </div>
        ))}

        <hr />
        <div className="col-7 m-0 p-0">
          <div className="mt-3 ml-5">
            <h5>What People Think About This Product</h5>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="far fa-star"></i>
            </span>
          </div>
          <div className="row ml-5 mt-3">
            <strong>
              <span>Aisyah on 26/04/2020</span>
            </strong>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="far fa-star"></i>
            </span>
          </div>
          <div className="ml-5">
            <span>
              Great oil, this has replaced my regular moisturizer since then!
            </span>
          </div>

          <div className="row ml-5 mt-3">
            <strong>
              <span>Cinderella on 24/04/2020</span>
            </strong>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="far fa-star"></i>
            </span>
          </div>
          <div className="ml-5">
            <span>
              I love the texture of the rosehip oil as it’s very moisturizing
              and perfect for making serums with essential oils. Perfect texture
              leaves the skin feeling smooth and hydrated. Highly recommended.
            </span>
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
  dataCart: state.cart,
});

const mapDispatchToProps = {
  doSignOut,
  allProducts,
  updateInputQty,
  postCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
