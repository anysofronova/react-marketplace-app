import React from "react";
import Header from "./Header";
import Order from "./Order";
import ProductAdmin from "./ProductAdmin";
import sampleProducts from "../sample-products";
import Product from "./Product";

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

  updateProduct = (key, updatedProduct) => {
    const products = { ...this.state.products };
    products[key] = updatedProduct;
    this.setState({ products });
  };

  loadSampleProduct = () => {
    this.setState({ products: sampleProducts });
  };

  addToOrder = (key) => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };

  render() {
    return (
      <div className="store__container">
        <div className="store__header store__scroll">
          <Header title="Anna Sofronova" subTitle="From Russia with Love" />
          <ul className="pruducts">
            {Object.keys(this.state.products).map((key) => {
              return (
                <Product
                  key={key}
                  index={key}
                  addToOrder={this.addToOrder}
                  details={this.state.products[key]}
                />
              );
            })}
          </ul>
        </div>
        <div className="store__order store__scroll">
          <Order products={this.state.products} order={this.state.order} />
        </div>
        <div className="store__ProductAdmin store__scroll">
          <ProductAdmin
            addProduct={this.addProduct}
            loadSampleProduct={this.loadSampleProduct}
            products={this.state.products}
            updateProduct={this.updateProduct}
          />
        </div>
      </div>
    );
  }
}

export default Home;
