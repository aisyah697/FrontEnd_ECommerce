import React, { Component } from "react";
import Navigation from "../components/Navigation";

class Login extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 m-0">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center"> Sign In </h5>{" "}
                  <form className="form-signin">
                    <div className="form-label-group">
                      <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        required
                        autofocus
                      />
                      <label for="inputEmail"> Email address </label>{" "}
                    </div>
                    <div className="form-label-group">
                      <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        required
                      />
                      <label for="inputPassword"> Password </label>{" "}
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
                        {" "}
                        Remember password{" "}
                      </label>{" "}
                    </div>{" "}
                    <button
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                    >
                      {" "}
                      Sign in{" "}
                    </button>{" "}
                    <hr className="my-4" />
                    <button
                      className="btn btn-lg btn-google btn-block text-uppercase"
                      type="submit"
                    >
                      {" "}
                      <i className="fab fa-google mr-2"> </i> Sign in with
                      Google
                    </button>
                    <button
                      className="btn btn-lg btn-facebook btn-block text-uppercase"
                      type="submit"
                    >
                      {" "}
                      <i className="fab fa-facebook-f mr-2"> </i> Sign in with
                      Facebook
                    </button>
                  </form>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Login;

<div className="container">
  <p>Payment Method</p>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="exampleRadios"
      id="exampleRadios1"
      value="option1"
      checked
    />
    <label class="form-check-label" for="exampleRadios1">
      Bank Transfer
    </label>
  </div>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="exampleRadios"
      id="exampleRadios2"
      value="option2"
    />
    <label class="form-check-label" for="exampleRadios2">
      OVO
    </label>
  </div>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="exampleRadios"
      id="exampleRadios2"
      value="option2"
    />
    <label class="form-check-label" for="exampleRadios2">
      DANA
    </label>
  </div>
</div>;