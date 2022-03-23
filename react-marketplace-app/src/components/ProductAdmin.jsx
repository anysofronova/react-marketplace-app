import React from "react";
import AddProductForm from "./AddProductForm";
import "./scss/ProductAdmin.scss";
import EditProductForm from "./EditProductForm";

function ProductAdmin(props) {
  return (
    <header className="productAdmin">
      <div className="productAdmin__wrap">
        <h2>Prodact Admin:</h2>
        {Object.keys(props.products).map((key) => {
          return (
            <EditProductForm
              key={key}
              index={key}
              product={props.products[key]}
              updateProduct={props.updateProduct}
              deleteProduct={props.deleteProduct}
            />
          );
        })}
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
