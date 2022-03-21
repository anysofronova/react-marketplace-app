import React from "react";
import "./scss/Shipment.scss";

function Shipment(props) {
  const { total } = props;
  const shipping = total > 0 && total < 100 ? 20 : total < 200 ? 9 : 0;
  console.log(total);
  return (
    <div className="shipment">
      {total < 200 ? (
        <div className="shipment__delivery">Delivery: {shipping}$</div>
      ) : null}

      <div className="shipment__discount">
        {total < 100
          ? "When ordering from 100$ the cost of delivery is 9$"
          : total < 200
          ? "Free delivery on orders over 200$"
          : null}
      </div>
      <div className="shipment__total">Total: {total + shipping}$</div>
    </div>
  );
}

export default Shipment;
