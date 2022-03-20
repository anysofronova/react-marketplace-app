import React from "react";
import Header from "./Header";
import Order from "./Order";

function Home() {
  return (
    <div className="store__container">
      <div className="store__header">
        <Header title="Anna Sofronova" subTitle="From Russia with Love" />
      </div>
      <div className="store__order">
        <Order />
      </div>
      <div className="store__ProductAdmin">{/* <ProductAdmin /> */}</div>
    </div>
  );
}

export default Home;
