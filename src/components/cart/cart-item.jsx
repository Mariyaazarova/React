import { DishCounter } from "../dish-counter/dish-counter";
import { deleteCartEntry } from "../../redux/entities/cart/cart-slice";
import { useDispatch } from "react-redux";
import styles from "./cart-item.module.css";
import { useGetDishQuery } from "../../redux/services/api/api";

export const CartItem = ({ id }) => {
  const dispatch = useDispatch();
  const { data: dish, isLoading, isError } = useGetDishQuery(id);

  const handleRemoveAll = () => {
    dispatch(deleteCartEntry(id));
  };

  if (isLoading) {
    return "loading ...";
  }

  if (isError) {
    return "error...";
  }

  if (!dish) {
    return;
  }

  return (
    <div className={styles.cartItem}>
      {dish.name}
      <DishCounter id={id} />
      <button onClick={handleRemoveAll} className={styles.handleRemoveAll}>
        x
      </button>
    </div>
  );
};
