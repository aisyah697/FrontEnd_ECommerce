import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { doSignOut, doLogin } from "../store/actions/actionUser";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class BiodataForm extends Component {
  render() {
    const is_login = localStorage.getItem("token");
    return (
      <div>
        {is_login ? (
          <div>
            <Navigation {...this.props} />
            <h2 className="text-center my-3">BIODATA FORM</h2>
            <hr className="divider" />
            <form className="mx-5 my-3">
              <div class="form-group">
                <label for="exampleInputEmail1">Full Name:</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Phone Number:</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Address:</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Province:</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">City:</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Subdistrict:</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Postal Code:</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Save
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

export default connect(mapStateToProps, mapDispatchToProps)(BiodataForm);
