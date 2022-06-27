import AddProductForm from "./AddProductForm/AddProductForm";
import styles from "./ProductAdmin.module.scss";
import { useAppSelector } from "../../hooks/redux";
import EditProductForm from "./EditProductForm/EditProductForm";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useWidth from "../../hooks/useWidth";

const ProductAdmin: FC = () => {
  const products = useAppSelector((state) => state.mainSlice.productList);
  const navigate = useNavigate();
  const width = useWidth();
  useEffect(() => {
    if (width > 900) {
      navigate("/");
    }
  }, [width, navigate]);

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
