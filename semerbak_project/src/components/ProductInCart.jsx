import React from "react";

var currencyFormatter = require("currency-formatter");

const ProductInCart = (props) => {
  console.log("cek produk dalam cart", props);

  return (
    <tr>
      <th scope="row">{props.index}</th>
      <td>{props.name}</td>
      <td>{props.quantity}</td>
      <td>{currencyFormatter.format(props.price, { code: "IDR" })}</td>
      <td>{currencyFormatter.format(props.total, { code: "IDR" })}</td>
      <td>
        <button className="delete-cart">DELETE</button>
      </td>
    </tr>
  );
};

export default ProductInCart;
