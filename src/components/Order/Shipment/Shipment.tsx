import { FC } from "react";
import { ShipmentType } from "../../../@types/ShipmentType";
import styles from "./Shipment.module.scss";

const Shipment: FC<ShipmentType> = ({ totalPrice, totalCount }) => {
  const shipping =
    totalPrice > 0 && totalPrice < 100 ? 20 : totalPrice < 200 ? 9 : 0;
  return (
    <div className={styles.shipment}>
      {totalPrice < 200 && (
        <div className={styles.delivery}>Delivery: {shipping}$</div>
      )}

      <div className={styles.discount}>
        {totalPrice < 100
          ? "When ordering from 100$ the cost of delivery is 9$"
          : totalPrice < 200
          ? "Free delivery on orders over 200$"
          : null}
      </div>
      <div className={styles.total}>
        Total: {totalPrice + shipping}$ ({totalCount})
      </div>
    </div>
  );
};
export default Shipment;
