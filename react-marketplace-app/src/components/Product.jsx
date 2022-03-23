import React from "react";
import "./scss/Product.scss";
import PropTypes from "prop-types";

function Product(props) {
  const { image, name, desc, price, status } = props.details;
  const isAvailable = status === "available";

  return (
    <li className="product">
      <div className="product__img-container">
        <img src={image} alt={name} />
      </div>
      <div className="product__details">
        <h3 className="product__name">{name}</h3>
        <h4 className="product__price">{price} $</h4>
        <p className="product__desc">{desc}</p>
        <button
          className="product__button"
          disabled={!isAvailable}
          onClick={() => {
            props.addToOrder(props.index);
          }}
        >
          {isAvailable ? "Add to Card" : "Out of Stock"}
        </button>
      </div>
    </li>
  );
}

Product.propTypes = {
  details: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.number,
    status: PropTypes.string,
  }),
  index: PropTypes.string,
  addToOrder: PropTypes.func,
};

export default Product;
