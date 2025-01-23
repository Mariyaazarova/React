import { useSelector } from "react-redux";
import classNames from "classnames";
import { selectDishById } from "../../redux/entities/dishes/dishes-slice";
import { Link, useParams } from "react-router-dom";
import { DishCounter } from "../dish-counter/dish-counter";
import { useAuth } from "../auth-context/use-auth";
import styles from "./dish-page.module.css";
import { Container } from "../container/container";
import { useTheme } from "../theme-context/use-theme";

export const DishPage = () => {
  const { theme } = useTheme();
  const { auth } = useAuth();
  const { dishId } = useParams();

  const dish = useSelector((state) => selectDishById(state, dishId));

  if (!dish) return null;

  return (
    <Container>
      <Link to="/restaurants">Рестораны</Link>
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
    </Container>
  );
};
