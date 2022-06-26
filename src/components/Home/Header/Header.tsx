import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const navigationList = [
    { id: 0, name: "Products", path: "/" },
    { id: 1, name: "Cart", path: "/cart" },
    { id: 2, name: "Admin Panel", path: "/admin" },
  ];
  return (
    <header className={styles.header}>
      <ul>
        {navigationList.map((i) => (
          <li key={i.id}>
            <Link to={i.path}>{i.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
