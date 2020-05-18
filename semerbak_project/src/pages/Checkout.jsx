import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { doSignOut } from "../store/actions/actionUser";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { productCategory } from "../store/actions/actionProduct";
import { getCart, deleteCart, doCheckout } from "../store/actions/actionCart";

var currencyFormatter = require("currency-formatter");

class Checkout extends Component {
  componentDidMount() {
    this.props.getCart();
    this.props.productCategory();
  }

  render() {
    const is_login = this.props.dataUser.is_login;
    const cart = this.props.dataCart.cart;
    let totalPrice = 0;
    let totalQty = 0;
    return (
      <div>
        {is_login ? (
          <div>
            <Navigation {...this.props} />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-sm-9 col-md-8 col-lg-8">
                  <div className="card card-signin my-5">
                    <div className="card-body">
                      <h1 className="card-title text-center">CHECKOUT</h1>
                      <p>Shipping Address:</p>
                      <form className="form-signin">
                        <div className="form-label-group">
                          <input
                            type="text"
                            id="input-first-name"
                            className="form-control"
                            name="first-name"
                            placeholder="First Name *"
                            required
                            autofocus
                          />
                        </div>
                        <div className="form-label-group">
                          <input
                            type="text"
                            id="input-last-name"
                            className="form-control"
                            name="last-name"
                            placeholder="Last Name *"
                            required
                            autofocus
                          />
                        </div>
                        <div className="form-label-group">
                          <input
                            type="text"
                            id="input-address"
                            className="form-control"
                            name="address"
                            placeholder="Address *"
                            required
                          />
                        </div>
                        <div className="form-label-group">
                          <input
                            type="text"
                            id="input-province"
                            className="form-control"
                            name="province"
                            placeholder="Province *"
                            required
                          />
                        </div>
                        <div className="form-label-group">
                          <input
                            type="text"
                            id="input-city"
                            className="form-control"
                            name="city"
                            placeholder="City *"
                            required
                          />
                        </div>
                        <div className="form-label-group">
                          <input
                            type="text"
                            id="input-subdistrict"
                            className="form-control"
                            name="subdistrict"
                            placeholder="Subdistrict *"
                            required
                          />
                        </div>
                        <div className="form-label-group">
                          <input
                            type="text"
                            id="input-postal-code"
                            className="form-control"
                            name="postal-code"
                            placeholder="Postal Code *"
                            required
                          />
                        </div>
                        <div className="form-label-group">
                          <input
                            type="text"
                            id="input-telephone"
                            className="form-control"
                            name="telephone"
                            placeholder="Phone Number  *"
                            required
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card-header order-summary">Order Summary:</div>
            {cart.map((item) => (
              <div>
                {item.transaction_detail.map((value) => (
                  <div class="card order-summary">
                    <div class="card-body">
                      <img
                        src={
                          process.env.REACT_APP_BASE_URL +
                          "img/" +
                          value.product_id.image
                        }
                        class="card-img-top"
                        alt={value.product_id.product_name}
                        style={{ width: "20%" }}
                      />
                      <h5 class="card-title">
                        {value.product_id.product_name}
                      </h5>
                      <p class="card-text">Quantity:{value.quantity}</p>
                      <p class="card-text">
                        Price:{" "}
                        {currencyFormatter.format(value.product_id.price, {
                          code: "IDR",
                        })}
                      </p>
                      <p class="card-text">
                        Subtotal:{" "}
                        {currencyFormatter.format(value.price, { code: "IDR" })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}

            <div class="card order-summary">
              <div class="card-header">Shipping Method:</div>
              <div class="card-body">
                <p class="card-text">JNE REGULER (IDR 9000)</p>
                <p class="card-text">JNE YES (IDR 9000)</p>
                <p class="card-text">J&T EXPRESS (IDR 10000)</p>
                <p class="card-text">WAHANA (IDR 9000)</p>
              </div>
            </div>

            <div class="card order-summary">
              <div class="card-header">Payment Method:</div>
              <div class="card-body">
                <p class="card-text">Bank Transfer</p>
                <p class="card-text">OVO</p>
                <p class="card-text">DANA</p>
              </div>
            </div>

            {cart.map((value) => {
              totalPrice += value.transaction.total_price;
              totalQty += value.transaction.total_qty;
            })}
            <div class="card order-summary">
              <div class="card-header">
                <strong>TOTAL:</strong>
              </div>
              <div class="card-body">
                <strong>
                  <p class="card-text">Total Quantity: {totalQty}</p>
                </strong>
                <strong>
                  <p class="card-text">
                    Total Price:{" "}
                    {currencyFormatter.format(totalPrice, { code: "IDR" })}
                  </p>
                </strong>
              </div>
            </div>

            <Link to="/" onClick={() => this.props.doCheckout()}>
              <button className="btn-confirm-order">CONFIRM ORDER</button>
            </Link>
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
  dataCatagory: state.product,
  dataCart: state.cart,
});

const mapDispatchToProps = {
  doSignOut,
  productCategory,
  getCart,
  deleteCart,
  doCheckout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
