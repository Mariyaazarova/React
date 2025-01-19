import { useSelector } from "react-redux";
import classNames from "classnames";
import { selectDishById } from "../../redux/entities/dishes/dishes-slice";
import { useParams } from "react-router-dom";
import { DishCounter } from "../dish-counter/dish-counter";
import { useAuth } from "../auth-context/use-auth";
import { Cart } from "../cart/cart";
import styles from "./restaurant-menu.module.css";
import { Container } from "../container/container";
import { useTheme } from "../theme-context/use-theme";

export const Dishes = () => {
  const { theme } = useTheme();
  const { auth } = useAuth();

  const { dishId } = useParams();
  const dish = useSelector((state) => selectDishById(state, dishId));

  if (!dish) {
    return null;
  }

  return (
    <Container>
      <div
        className={classNames(styles.menuCart, {
          [styles.light]: theme === "light",
          [styles.dark]: theme === "dark",
        })}
      >
        <h2>{dish.name}</h2>
        <div> Ingredients: {dish.ingredients}</div>
        <p> Price: {dish.price}$</p>
        {auth.isAuthorized && <DishCounter id={dishId} />}
      </div>
      {auth.isAuthorized && <Cart />}
    </Container>
  );
};
