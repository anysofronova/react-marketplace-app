import React from "react";
import "./scss/Order.scss";
import "./scss/animation.scss";
import Shipment from "./Shipment";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Order(props) {
  const renderOrder = (key) => {
    const product = props.products[key];
    const count = props.order[key];
    const isAvailable = product && product.status === "available";

    if (!isAvailable) {
      return (
        <CSSTransition
          classNames="order"
          key={key}
          timeout={{ enter: 500, exit: 500 }}
        >
          <li className="order__unavailable" key={key}>
            Sorry, {product ? product.name : "product"} is unavailable.
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition
        classNames="order"
        key={key}
        timeout={{ enter: 500, exit: 500 }}
      >
        <li key={key}>
          <span className="order__item">
            <span className="order__item-count">{count}</span>
            <span className="order__item-name">{product.name}</span>
            <span className="order__item-price">{count * product.price} $</span>
            <button
              className="order__item-button"
              onClick={() => props.deleteFromOrder(key)}
            >
              &times;
            </button>
          </span>
        </li>
      </CSSTransition>
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
      <TransitionGroup component="ul" className="order__list" key={"1"}>
        {orderIds.map(renderOrder)}
      </TransitionGroup>
      {total > 0 ? (
        <Shipment total={total} />
      ) : (
        <div className="order__empty">Your Cart is empty.</div>
      )}
    </header>
  );
}

Order.propTypes = {
  product: PropTypes.object,
  order: PropTypes.object,
  deleteFromOrder: PropTypes.func,
};

export default Order;
