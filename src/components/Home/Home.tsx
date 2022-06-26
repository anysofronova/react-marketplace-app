import Product from "./Product/Product";
import Order from "../Order/Order";
import ProductAdmin from "../ProductAdmin/ProductAdmin";
import { useAppSelector } from "../../hooks/redux";
import styles from "./Home.module.scss";

const Home = () => {
  const products = useAppSelector((state) => state.mainSlice.productList);
  return (
    <div className={styles.container}>
      <ul className={styles.scroll}>
        <h2 className={styles.title}>Product List:</h2>
        {products.map((i) => (
          <li key={i.id}>
            <Product
              id={i.id}
              image={i.image}
              name={i.name}
              desc={i.desc}
              price={i.price}
              status={i.status}
              count={i.count}
            />
          </li>
        ))}
      </ul>
      <div className={styles.scroll}>
        <Order />
      </div>
      <div className={styles.scroll}>
        <ProductAdmin />
      </div>
    </div>
  );
};

export default Home;
