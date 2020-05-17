import React from "react";
import { Link } from "react-router-dom";

const ProductCategoryHome = (props) => {
  const changeRouter = (productCategory, id) => {
    productCategory = productCategory.replace(/ /gi, "-");
    props.history.replace("/category/" + id + "&&" + productCategory);
  };
  console.log("cek judul kategori", props);
  return (
    <div>
      <Link onClick={() => changeRouter(`${props.category}`, `${props.id}`)}>
        <div className="card-body text-center p-0">
          <p className="card-text m-0">{props.category}</p>
        </div>
        <div
          className="card card-list-product p-0 m-3"
          style={{ width: "15rem" }}
        >
          <img
            src={require("../assets/mini-banner-home.jpg")}
            className="card-img-top"
            alt={props.category}
          />
        </div>
      </Link>
    </div>
  );
};

export default ProductCategoryHome;
