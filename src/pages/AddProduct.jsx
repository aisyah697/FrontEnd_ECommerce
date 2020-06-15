import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { doSignOut, doLogin } from "../store/actions/actionUser";
import {
  changeInputProduct,
  fileSelectedHandler,
  postProduct,
  allProducts,
} from "../store/actions/actionProduct";

class AddProduct extends Component {
  postAfterProduct = async () => {
    await this.props.postProduct();
    await this.props.history.replace("/all-products");
  };

  doSignOut = async () => {
    await this.props.doSignOut();
    await this.props.history.replace("/");
  };

  render() {
    const is_login = localStorage.getItem("token");

    return (
      <div>
        {is_login ? (
          <div>
            <Navigation {...this.props} />
            <h2 className="text-center my-3">ADD PRODUCT</h2>
            <hr className="divider" />
            <form className="mx-5 my-3">
              <div class="form-group">
                <label for="exampleInputEmail1">Product name:</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="product_name"
                  aria-describedby="emailHelp"
                  onChange={(e) => this.props.changeInputProduct(e)}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlFile1">
                  Upload product image:
                </label>
                <input
                  type="file"
                  class="form-control-file"
                  id="exampleFormControlFile1"
                  name="image"
                  accept="image/*"
                  onChange={(e) => this.props.fileSelectedHandler(e)}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Price:</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="price"
                  onChange={(e) => this.props.changeInputProduct(e)}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Description:</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="description"
                  onChange={(e) => this.props.changeInputProduct(e)}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Stock:</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="stock"
                  onChange={(e) => this.props.changeInputProduct(e)}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Category:</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="category"
                  onChange={(e) => this.props.changeInputProduct(e)}
                />
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label mb-2" for="exampleCheck1">
                  I agree to all terms & conditions
                </label>
              </div>
              <button
                type="submit"
                class="btn btn-primary"
                onClick={() => this.postAfterProduct()}
              >
                Submit
              </button>
            </form>
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
  dataProduct: state.product,
  statusError: state.product.statusError,
});

const mapDispatchToProps = {
  doSignOut,
  doLogin,
  postProduct,
  changeInputProduct,
  fileSelectedHandler,
  allProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
