import React from "react";

var currencyFormatter = require("currency-formatter");

const ProductInCart = (props) => {
  return (
    <tr>
      <th scope="row">{props.index}</th>
      <td>{props.name}</td>
      <td>{props.quantity}</td>
      <td>{currencyFormatter.format(props.price, { code: "IDR" })}</td>
      <td>{currencyFormatter.format(props.total, { code: "IDR" })}</td>
      <td>
        <button
          className="delete-cart"
          onClick={() => props.deleteCart(props.id)}
        >
          DELETE
        </button>
      </td>
    </tr>
  );
};

export default ProductInCart;
