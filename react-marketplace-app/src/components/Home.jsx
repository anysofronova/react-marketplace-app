import React from "react";
import Header from "./Header";
import Order from "./Order";
import ProductAdmin from "./ProductAdmin";
import sampleProducts from "../sample-products";

class Home extends React.Component {
  state = {
    products: {},
    order: {},
  };

  addProduct = (product) => {
    const products = { ...this.state.products };
    products[`Product ${Date.now()}`] = product;
    this.setState({ products });
  };

  loadSampleProduct = () => {
    this.setState({ products: sampleProducts });
  };

  render() {
    return (
      <div className="store__container">
        <div className="store__header">
          <Header title="Anna Sofronova" subTitle="From Russia with Love" />
        </div>
        <div className="store__order">
          <Order />
        </div>
        <div className="store__ProductAdmin">
          <ProductAdmin
            addProduct={this.addProduct}
            loadSampleProduct={this.loadSampleProduct}
          />
        </div>
      </div>
    );
  }
}

export default Home;
