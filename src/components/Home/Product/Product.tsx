import styles from "./Product.module.scss";
import { FC, SyntheticEvent } from "react";
import { IProduct } from "../../../@types/IProduct";
import { useAppDispatch } from "../../../hooks/redux";
import { addItemToCart } from "../../../store/slices/mainSlice";
import placeholder from "../../../assets/imgPlaceholder.jpeg";

const Product: FC<IProduct> = ({ image, name, desc, price, status, id }) => {
  const isAvailable = status === "available";
  const dispatch = useAppDispatch();
  return (
    <div className={styles.product}>
      <div className={styles.img}>
        <img
          src={image || placeholder}
          alt={name}
          onError={(event: SyntheticEvent<HTMLImageElement, Event>) => {
            event.currentTarget.src = placeholder;
            event.currentTarget.onerror = null;
          }}
        />
      </div>
      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <h4 className={styles.price}>{price} $</h4>
        <p className={styles.desc}>{desc}</p>
        <button
          className={styles.button}
          disabled={!isAvailable}
          onClick={() => {
            dispatch(addItemToCart({ id, count: 1 }));
          }}
        >
          {isAvailable ? "Add to Card" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default Product;
