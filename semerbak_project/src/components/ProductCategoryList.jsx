import React from "react";
import { Link } from "react-router-dom";

const ListProductCategory = (props) => {
  const changeRouter = (product) => {
    product = product.replace(/ /gi, "-");
    props.history.replace("/all-products/" + product);
  };

  console.log("cek judul kategori", props);
  return (
    <div>
      <Link onClick={() => changeRouter(`${props.name}`)}>
        <div
          className="card card-list-product p-0 m-3"
          style={{ width: "15rem" }}
        >
          <img
            src={process.env.REACT_APP_BASE_URL + "img/" + props.image}
            className="card-img-top"
            alt={props.name}
          />
          <div className="card-body text-center p-0">
            <p className="card-text m-0">{props.name}</p>
            <p className="card-text">IDR {props.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListProductCategory;
