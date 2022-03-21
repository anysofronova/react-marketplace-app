import React from "react";
import "./scss/Order.scss";
import Shipment from "./Shipment";

function Order(props) {
  const renderOrder = (key) => {
    const product = props.products[key];
    const count = props.order[key];
    const isAvailable = product && product.status === "available";

    if (!isAvailable) {
      return (
        <li className="order__unavailable">
          Sorry, {product ? product.name : "product"} is unavailable.
        </li>
      );
    }
    return (
      <li key={key}>
        <span className="order__item">
          <span className="order__item-count">{count}</span>
          <span className="order__item-name">{product.name}</span>
          <span className="order__item-price">{count * product.price} $</span>
          <button className="order__item-button">&times;</button>
        </span>
      </li>
    );
  };

  const orderIds = Object.keys(props.order);
  const total = orderIds.reduce((prevTotal, key) => {
    const product = props.products[key];
    const count = props.order[key];
    const isAvailable = product && product.status === "available";

    return isAvailable ? prevTotal + product.price * count : prevTotal;
  }, 0);

  return (
    <header className="order">
      <h2 className="order__title">Your order:</h2>
      <ul className="order__list">{orderIds.map(renderOrder)}</ul>
      {total > 0 ? (
        <Shipment total={total} />
      ) : (
        <div className="order__empty">Your Cart is empty.</div>
      )}
    </header>
  );
}

export default Order;
