import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { doSignOut } from "../store/actions/actionUser";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Checkout extends Component {
  render() {
    const is_login = this.props.dataUser.is_login;
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
                      <p>Shipping Address</p>
                      <form className="form-signin">
                        <div className="sign-up-space-between">
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
                        <div className="sign-up-space-between">
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
                        </div>
                        <div className="sign-up-space-between">
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

            <div className="container justify-content-center">
              <div className="row justify-content-center">
                <div className="col-sm-6">
                  <p>Order Summary</p>
                  <div className="row">
                    <div className="col-sm-5">
                      <div
                        className="card card-list-product"
                        style={{ width: "10rem" }}
                      >
                        <img
                          src={require("../assets/mini-banner-home.jpg")}
                          className="card-img-top"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <p>Items: </p>
                      <p>Quantity: </p>
                      <p>Price: </p>
                      <p>Subtotal: </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <p>Shipping Method</p>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="shipping"
                      id="exampleRadios"
                      value="jne_reg"
                      checked
                    />
                    <label class="form-check-label" for="exampleRadios1">
                      JNE Reguler (IDR 9000)
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="shipping"
                      id="exampleRadios2"
                      value="jne_yes"
                    />
                    <label class="form-check-label" for="exampleRadios2">
                      JNE YES (IDR 9000)
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="shipping"
                      id="exampleRadios3"
                      value="jnt_express"
                    />
                    <label class="form-check-label" for="exampleRadios3">
                      J&T Express (IDR 10000)
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="shipping"
                      id="exampleRadios4"
                      value="wahana"
                    />
                    <label class="form-check-label" for="exampleRadios4">
                      WAHANA (IDR 9000)
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <p>Payment Method</p>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="payment"
                  id="exampleRadios5"
                  value="bank_transfer"
                />
                <label class="form-check-label" for="exampleRadios5">
                  BANK TRANSFER
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="payment"
                  id="exampleRadios6"
                  value="ovo"
                />
                <label class="form-check-label" for="exampleRadios6">
                  OVO
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="payment"
                  id="exampleRadios7"
                  value="dana"
                />
                <label class="form-check-label" for="exampleRadios7">
                  DANA
                </label>
              </div>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="termsandconditions"
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                I have read and agree to the Terms & Conditions
              </label>
            </div>
            <button>CHECKOUT</button>
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
});

const mapDispatchToProps = {
  doSignOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
