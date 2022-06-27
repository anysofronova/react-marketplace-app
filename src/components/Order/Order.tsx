import { FC, useEffect } from "react";
import styles from "./Order.module.scss";
import Shipment from "./Shipment/Shipment";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { deleteItemFromCart } from "../../store/slices/mainSlice";
import { CartItemType } from "../../@types/CartItemType";
import { useNavigate } from "react-router-dom";
import useWidth from "../../hooks/useWidth";

const Order: FC = () => {
  const cart = useAppSelector((state) => state.mainSlice.cartList);
  const totalPrice = useAppSelector((state) => state.mainSlice.totalPrice);
  const totalCount = useAppSelector((state) => state.mainSlice.totalCount);
  const products = useAppSelector((state) => state.mainSlice.productList);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const width = useWidth();
  useEffect(() => {
    if (width > 900) {
      navigate("/");
    }
  }, [width, navigate]);
  const renderOrder = (item: CartItemType) => {
    const orderItem = products.find((i) => i.id === item.id);
    if (orderItem?.status !== "available") {
      return (
        <div className={styles.order}>
          <li key={orderItem?.id}>
            Sorry, {orderItem?.name || "this product"} is unavailable.
          </li>
        </div>
      );
    }
    return (
      <li className={styles.order} key={item.id}>
        <span className={styles.item}>
          <span className={styles.count}>{item.count}</span>
          <span className={styles.name}>{orderItem?.name}</span>
          <span className={styles.price}>
            {item.count * orderItem?.price} $
          </span>
          <button
            className={styles.button}
            onClick={() => dispatch(deleteItemFromCart(item.id))}
          >
            &times;
          </button>
        </span>
      </li>
    );
  };

  return (
    <header className={styles.order}>
      <h2 className={styles.title}>Your order:</h2>
      <div className={styles.list}>{cart.map(renderOrder)}</div>
      {totalPrice > 0 && totalCount > 0 ? (
        <Shipment totalPrice={totalPrice} totalCount={totalCount} />
      ) : (
        <div className={styles.empty}>Your Cart is empty.</div>
      )}
    </header>
  );
};

export default Order;
