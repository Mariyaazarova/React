import { Counter } from "../counter/counter";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  selectCartItemAmountById,
  removeFromCart,
} from "../../redux/entities/ui/cart/cart-slice";

export const DishCounter = ({ id }) => {
  const dispatch = useDispatch();
  const amount =
    useSelector((state) => selectCartItemAmountById(state, id)) || 0;
  const handleIncrement = () => dispatch(addToCart(id));
  const handleDecrement = () => dispatch(removeFromCart(id));

  return (
    <Counter
      value={amount}
      increment={handleIncrement}
      decrement={handleDecrement}
    />
  );
};
