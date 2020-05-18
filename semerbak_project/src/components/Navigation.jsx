import React, { Component } from "react";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  const postSignOut = async () => {
    await props.doSignOut();
    if (!props.dataUser.is_login) {
      console.log("cek cek", this);
      props.history.replace("/login");
    }
  };
  console.log("cek header", props);
  return (
    <div className="top-header">
      <header>
        <p className="mini-header-txt ml-5">
          Need help? <i className="fab fa-whatsapp"></i> 081289879972
        </p>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-4">
        <Link to="/">
          <img
            className="logo"
            src={require("../assets/logo.jpg")}
            alt="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse ml-3"
          id="navbarSupportedContent"
        >
          <form className="form-inline my-2 my-lg-0 justify-content-center">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div className="navbar-top-menu">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/all-products">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {props.dataUser.is_login ? (
                  <Link className="nav-link" to="/shopping-cart">
                    <i className="fas fa-shopping-cart"></i> Cart
                  </Link>
                ) : (
                  <Link class="nav-item nav-link" to="/register"></Link>
                )}
              </li>
              <li className="nav-item">
                {props.dataUser.is_login ? (
                  <Link className="nav-link" to="/profile">
                    <i className="fas fa-user-alt"></i> Profile
                  </Link>
                ) : (
                  <Link class="nav-item nav-link" to="/login">
                    Login
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {props.dataUser.is_login ? (
                  <Link class="nav-item nav-link" onClick={() => postSignOut()}>
                    Sign Out
                  </Link>
                ) : (
                  <div></div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr className="hr-navbar mb-0" />
    </div>
  );
};

export default Navigation;
