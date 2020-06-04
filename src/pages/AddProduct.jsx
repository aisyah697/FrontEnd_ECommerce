import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { doSignOut, doLogin } from "../store/actions/actionUser";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class AddProduct extends Component {
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
                  aria-describedby="emailHelp"
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
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Price:</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Description:</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Stock:</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Category:</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
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
              <button type="submit" class="btn btn-primary">
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
  statusError: state.product.statusError,
});

const mapDispatchToProps = {
  doSignOut,
  doLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
