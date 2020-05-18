import React from "react";
import { Link } from "react-router-dom";

const BestSeller = (props) => {
  return (
    <div className="row best-seller-home">
      <div className="card p-0 m-3" style={{ width: "12rem" }}>
        <img
          src={require("../assets/rosehip.jpg")}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body p-0">
          <p className="card-text text-center">Argan Oil</p>
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
          <Link to="/product-detail" className="card-link">
            See products
          </Link>
        </div>
      </div>

      <div className="card p-0 m-3" style={{ width: "12rem" }}>
        <img
          src={require("../assets/rosehip.jpg")}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body p-0">
          <p className="card-text text-center">Argan Oil</p>
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
          <Link to="/product-detail" className="card-link">
            See products
          </Link>
        </div>
      </div>

      <div className="card p-0 m-3" style={{ width: "12rem" }}>
        <img
          src={require("../assets/rosehip.jpg")}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body p-0">
          <p className="card-text text-center">Argan Oil</p>
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
          <Link to="/product-detail" className="card-link">
            See products
          </Link>
        </div>
      </div>

      <div className="card p-0 m-3" style={{ width: "12rem" }}>
        <img
          src={require("../assets/rosehip.jpg")}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body p-0">
          <p className="card-text text-center">Argan Oil</p>
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
          <Link to="/product-detail" className="card-link">
            See products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
