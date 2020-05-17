import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProductInCart from "../components/ProductInCart";
import { doSignOut } from "../store/actions/actionUser";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { productCategory } from "../store/actions/actionProduct";
import { getCart, deleteCart } from "../store/actions/actionCart";

class ShoppingCart extends Component {
  componentDidMount() {
    this.props.getCart();
    this.props.productCategory();
  }

  render() {
    const is_login = this.props.dataUser.is_login;
    const cart = this.props.dataCart.cart;
    console.log("cek cek cart", cart);

    return (
      <div>
        {is_login ? (
          <div>
            <Navigation {...this.props} />
            <div className="container table-cart-container">
              <table class="table table-hover table-cart">
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Item Descriptions</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Total</th>
                    <th></th>
                  </tr>
                </thead>

                {cart.map((item) => (
                  <tbody>
                    {item.transaction_detail.map((value, index) => (
                      <ProductInCart
                        index={index + 1}
                        name={value.product_id.product_name}
                        image={value.product_id.image}
                        price={value.product_id.price}
                        quantity={value.quantity}
                        total={value.price}
                        id={value.id}
                        deleteCart={this.props.deleteCart}
                      />
                    ))}
                  </tbody>
                ))}
              </table>
              <br />
              <Link to="/checkout">
                <button className="btn-checkout">CHECK OUT</button>
              </Link>
            </div>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
