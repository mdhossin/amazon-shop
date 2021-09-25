import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Feature from "../Feauter/Feature";
import "./Product.css";
import Rating from "react-rating";

const Product = (props) => {
  const { img, name, seller, price, stock, star } = props.obj;
  const element = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className="flex">
      <div style={{ marginRight: "10px" }}>
        <img src={img} alt="" />
      </div>
      <div className="product-detail">
        <h2 className="product-name">{name}</h2>
        <p>
          <small>By : {seller}</small>
        </p>
        <div className="more-detail">
          <div className="detail">
            <h2 style={{ fontWeight: "400" }}>${price}</h2>
            <p>
              <small>Only {stock} left in stock - order soon</small>
            </p>
            <button className="btn" onClick={() => props.cartBtn(props.obj)}>
              {element} add to cart
            </button>
          </div>
          <div className="feature">
            <Rating
              initialRating={star}
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              readonly
            />
            <h2 style={{ fontWeight: "500" }}>Features</h2>

            {props?.obj?.features.map((feature) => (
              <Feature fetaure={feature}></Feature>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
