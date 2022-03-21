import React from "react";
import "./scss/Product.scss";

function Product(props) {
  const { image, name, desc, price, status } = props.details;
  const isAvailable = status === "availible";
  console.log(isAvailable);
  return (
    <li className="product">
      <div className="product__img-container">
        <img src={image} alt={name} />
      </div>
      <div className="product__details">
        <h3 className="product__name">{name}</h3>
        <h4 className="product__price">{price} $</h4>
        <p className="product__desc">{desc}</p>
        <button className="product__button" disabled={!isAvailable}>
          {isAvailable ? "Add to Card" : "Out of Stock"}
        </button>
      </div>
    </li>
  );
}

export default Product;
