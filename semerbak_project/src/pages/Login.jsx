import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import {
  changeInputUsername,
  changeInputPassword,
  doLogin,
} from "../store/actions/actionUser";
import { Link } from "react-router-dom";

class Login extends Component {
  postLogin = async () => {
    await this.props.doLogin();
    const is_login = this.props.dataUser.is_login;
    console.log("cek props", this.props.dataUser.is_login);
    if (is_login) {
      this.props.history.replace("/");
    }
  };
  render() {
    return (
      <div>
        <Navigation {...this.props} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-9 col-md-9 col-lg-5">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h1 className="card-title text-center">SIGN IN</h1>
                  <form
                    className="form-signin"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="form-label-group">
                      <input
                        type="text"
                        id="inputEmail"
                        name="username"
                        className="form-control"
                        placeholder="Username *"
                        required
                        onChange={(e) => this.props.changeInputUsername(e)}
                      />
                    </div>

                    <div className="form-label-group">
                      <input
                        type="password"
                        id="inputPassword"
                        name="password"
                        className="form-control"
                        placeholder="Password *"
                        required
                        onChange={(e) => this.props.changeInputPassword(e)}
                      />
                    </div>

                    <div className="custom-control custom-checkbox mb-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        for="customCheck1"
                      >
                        Remember password
                      </label>
                    </div>
                    <button
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                      onClick={() => this.postLogin()}
                    >
                      Sign in
                    </button>
                    <hr className="my-4" />
                    <p>
                      Haven't got an account?
                      <Link to="/register">
                        <span> Sign Up Here!</span>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <p className="card-title">Need Assistance?</p>
                  <h3>Contact Our Customer Service Team</h3>
                  <p>custservice@title.com</p>
                  <p>
                    Our customer service team is available to take your emails
                    daily during the following business hours:
                  </p>
                  <p>Monday - Friday : 09.00 - 17.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataUser: state.user,
});

const mapDispatchToProps = {
  changeInputUsername,
  changeInputPassword,
  doLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
