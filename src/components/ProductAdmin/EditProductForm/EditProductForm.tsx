import styles from "./EditProductForm.module.scss";
import { IProduct } from "../../../@types/IProduct";
import { useAppDispatch } from "../../../hooks/redux";
import { deleteItem, editItem } from "../../../store/slices/mainSlice";
import { FC } from "react";

const EditProductForm: FC<IProduct> = ({
  name,
  price,
  status,
  desc,
  image,
  id,
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.editForm}>
      <input
        type="text"
        className={styles.name}
        value={name}
        onChange={(e) =>
          dispatch(
            editItem({ id, option: "name", value: e.currentTarget.value })
          )
        }
      />
      <input
        type="text"
        pattern={"[0-9]*.?[0-9]*"}
        className={styles.price}
        value={price}
        onChange={(e) =>
          dispatch(
            editItem({
              id,
              option: "price",
              value: parseInt(e.currentTarget.value) | 0,
            })
          )
        }
      />
      <select
        className={styles.status}
        value={status}
        onChange={(e) =>
          dispatch(
            editItem({ id, option: "status", value: e.currentTarget.value })
          )
        }
      >
        <option value="available">Available</option>
        <option value="unavailable">Unavailable</option>
      </select>
      <textarea
        className={styles.desc}
        value={desc}
        onChange={(e) =>
          dispatch(
            editItem({ id, option: "desc", value: e.currentTarget.value })
          )
        }
      />
      <input
        type="text"
        className={styles.image}
        value={image}
        onChange={(e) =>
          dispatch(
            editItem({ id, option: "image", value: e.currentTarget.value })
          )
        }
      />
      <button
        onClick={() => dispatch(deleteItem(id))}
        className={styles.button}
      >
        Delete
      </button>
    </div>
  );
};

export default EditProductForm;
