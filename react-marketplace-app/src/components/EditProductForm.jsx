import React from "react";
import "./scss/EditProductForm.scss";
import PropTypes from "prop-types";

function EditProductForm(props) {
  const { name, price, status, desc, image } = props.product;
  const handleChange = (e) => {
    const updatedProduct = {
      ...props.product,
      [e.currentTarget.name]:
        e.currentTarget.name === "price"
          ? parseFloat(e.currentTarget.value)
          : e.currentTarget.value,
    };
    props.updateProduct(props.index, updatedProduct);
  };

  return (
    <div className="editform">
      <input
        type="text"
        name="name"
        className="editform__name"
        value={name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="price"
        className="editform__price"
        value={price}
        onChange={handleChange}
      />
      <select
        name="status"
        className="editform__status"
        value={status}
        onChange={handleChange}
      >
        <option value="available">Available</option>
        <option value="unavailable">Unavailable</option>
      </select>
      <textarea
        name="desc"
        className="editform__desc"
        value={desc}
        onChange={handleChange}
      />
      <input
        type="text"
        name="image"
        className="editform__image"
        value={image}
        onChange={handleChange}
      />
      <button
        onClick={() => props.deleteProduct(props.index)}
        className="editform__button"
      >
        Delete
      </button>
    </div>
  );
}

EditProductForm.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.number,
    status: PropTypes.string,
  }),
  index: PropTypes.string,
  deleteProduct: PropTypes.func,
  updateProduct: PropTypes.func,
};

export default EditProductForm;