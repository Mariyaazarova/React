import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/dishes-slice";
import { DishCounter } from "../dish-counter/dish-counter";

export const CartItem = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  /* 
  if (!dish) {
    console.error(`Блюдо с id ${id} не найдено.`);
    return null;
  } */
  return (
    <div>
      {dish}
      <DishCounter id={id} />
    </div>
  );
};
