import React from "react";
import AddProductForm from "./AddProductForm";
import "./scss/ProductAdmin.scss";

function ProductAdmin(props) {
  return (
    <header className="productAdmin">
      <div className="productAdmin__wrap">
        <h2>Prodact Admin:</h2>
        <AddProductForm addProduct={props.addProduct} />
        <button
          onClick={props.loadSampleProduct}
          className="productAdmin__button"
        >
          Upload
        </button>
      </div>
    </header>
  );
}

export default ProductAdmin;
