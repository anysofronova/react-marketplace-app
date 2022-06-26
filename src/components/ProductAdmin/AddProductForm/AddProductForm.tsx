import styles from "../EditProductForm/EditProductForm.module.scss";
import { useAppDispatch } from "../../../hooks/redux";
import { addItem } from "../../../store/slices/mainSlice";
import { FormEvent, useState } from "react";

const AddProductForm = () => {
  const dispatch = useAppDispatch();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addItem({
        name,
        price,
        status,
        desc,
        image,
        id: 0,
        count: 0,
      })
    );
    setName("");
    setPrice(0);
    setStatus("available");
    setDesc("");
    setImage("");
  };
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [status, setStatus] = useState<string>("available");
  const [desc, setDesc] = useState<string>("");
  const [image, setImage] = useState<string>("");
  return (
    <form className={styles.editForm} onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Name"
        className={styles.name}
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <input
        placeholder="Price"
        className={styles.price}
        value={price}
        onChange={(e) => setPrice(parseInt(e.currentTarget.value) | 0)}
      />
      <select
        className={styles.status}
        value={status}
        onChange={(e) => setStatus(e.currentTarget.value)}
      >
        <option value="available">Available</option>
        <option value="unavailable">Unavailable</option>
      </select>
      <textarea
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.currentTarget.value)}
      />
      <input
        type="text"
        placeholder="Image"
        className={styles.image}
        value={image}
        onChange={(e) => setImage(e.currentTarget.value)}
      />
      <button type="submit" className={styles.button}>
        Add
      </button>
    </form>
  );
};

export default AddProductForm;
