import React from "react";
import { Link } from "react-router-dom";

const ProductDescription = (props) => {
  return (
    <div>
      <div className="row ml-5 mb-5 mt-5">
        <div
          className="card card-product-desc col-sm-6"
          style={{ width: "30rem" }}
        >
          <img
            src={process.env.REACT_APP_BASE_URL + "img/" + props.image}
            className="card-img-top"
            alt={props.name}
          />
        </div>
        <div className="col-sm-6">
          <h3>{props.name}</h3>
          <h4>{props.price}</h4>
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
                <div className="quantity-selector">
                  <div className="wrapper">
                    <input type="text" name="quantity" size="4" value="1" />
                    <div className="plus-minus-box">
                      <div className="plus-minus-icon-plus">
                        <span>
                          <i className="fas fa-plus-circle"></i>
                        </span>
                      </div>
                      <div className="plus-minus-icon-minus">
                        <span>
                          <i className="fas fa-minus-circle"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="add-to-cart-button">
                  <Link id="cart-button" className="btn" to="/checkout">
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
            <p>{props.description}</p>
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
      <hr />

      <div className="col-6 p-0">
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
            I love the texture of the rosehip oil as it’s very moisturizing and
            perfect for making serums with essential oils. Perfect texture
            leaves the skin feeling smooth and hydrated. Highly recommended.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
