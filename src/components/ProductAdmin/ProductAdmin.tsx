import AddProductForm from "./AddProductForm/AddProductForm";
import styles from "./ProductAdmin.module.scss";
import { useAppSelector } from "../../hooks/redux";
import EditProductForm from "./EditProductForm/EditProductForm";
import { FC } from "react";

const ProductAdmin: FC = () => {
  const products = useAppSelector((state) => state.mainSlice.productList);
  return (
    <header className={styles.productAdmin}>
      <div className={styles.wrap}>
        <h2>Product Admin:</h2>
        <AddProductForm />
        {products.map((item) => (
          <EditProductForm {...item} key={item.id} />
        ))}
      </div>
    </header>
  );
};

export default ProductAdmin;
