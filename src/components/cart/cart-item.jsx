import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/dishes-slice";
import { DishCounter } from "../dish-counter/dish-counter";
import { deleteCartEntry } from "../../redux/entities/cart/cart-slice";
import { useDispatch } from "react-redux";
import styles from "./cart-item.module.css";

export const CartItem = ({ id }) => {
  const dispatch = useDispatch();

  const dish = useSelector((state) => selectDishById(state, id));

  const handleRemoveAll = () => {
    dispatch(deleteCartEntry(dish.id));
  };

  if (!dish.name) {
    return null;
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
