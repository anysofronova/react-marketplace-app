import { FC } from "react";
import "./App.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Order from "./components/Order/Order";
import ProductAdmin from "./components/ProductAdmin/ProductAdmin";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Home/Header/Header";

const App: FC = () => {
  return (
    <Router>
      <div className="header">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Order />} />
        <Route path="/admin" element={<ProductAdmin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
