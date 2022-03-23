import React from "react";
import "./scss/AddProductForm.scss";
import PropTypes from "prop-types";

function AddProductForm(props) {
  const createProduct = (e) => {
    e.preventDefault();
    const product = {
      name: nameRef.current.value,
      price: parseFloat(priceRef.current.value || 0),
      image: imageRef.current.value,
      status: statusRef.current.value,
      desc: descRef.current.value,
    };
    props.addProduct(product);
    e.currentTarget.reset();
  };

  const nameRef = React.createRef();
  const priceRef = React.createRef();
  const statusRef = React.createRef();
  const descRef = React.createRef();
  const imageRef = React.createRef();

  return (
    <form className="product__edit" onSubmit={createProduct}>
      <input
        ref={nameRef}
        type="text"
        name="name"
        placeholder="Name"
        autoComplete="off"
        className="product__name"
      />
      <input
        ref={priceRef}
        type="text"
        name="price"
        placeholder="Price"
        autoComplete="off"
        className="product__price"
      />
      <select ref={statusRef} name="status" className="product__status">
        <option value="available">Available</option>
        <option value="unavailable">Unavailable</option>
      </select>
      <textarea ref={descRef} name="desc" placeholder="Description" />
      <input
        ref={imageRef}
        type="text"
        name="image"
        placeholder="Image"
        autoComplete="off"
        className="product__image"
      />
      <button type="submit">Add</button>
    </form>
  );
}

AddProductForm.propTypes = {
  addProduct: PropTypes.func,
};

export default AddProductForm;
