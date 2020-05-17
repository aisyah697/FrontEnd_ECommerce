import React from "react";
import { Link } from "react-router-dom";

const ListProductCategory = (props) => {
  const changeRouter = (productCategory, id) => {
    productCategory = productCategory.replace(/ /gi, "-");
    props.history.replace("/category/" + id + "&&" + productCategory);
  };

  console.log("cek judul kategori", props);
  return (
    <div>
      <Link onClick={() => changeRouter(`${props.category}`, `${props.id}`)}>
        <div
          className="card card-list-product p-0 m-3"
          style={{ width: "15rem" }}
        >
          <img
            src={"http://0.0.0.0:5000/img/" + props.image}
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
