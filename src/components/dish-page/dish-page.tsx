import classNames from "classnames";
import { Link, useParams } from "react-router-dom";
import { DishCounter } from "../dish-counter/dish-counter";
import { useAuth } from "../auth-context/use-auth";
import styles from "./dish-page.module.css";
import { Container } from "../container/container";
import { useTheme } from "../theme-context/use-theme";
import { useGetDishQuery } from "../../redux/services/api/api";

export const DishPage = () => {
  const { theme } = useTheme();
  const { auth } = useAuth();
  const { dishId } = useParams();
  const { data: dish, isLoading, isError } = useGetDishQuery(dishId);

  if (isLoading) {
    return "loading dish-page ...";
  }
  if (isError) {
    return "error dish-page...";
  }

  if (!dish) {
    return null;
  }

  return (
    <main>
      <Container>
        <Link to="/restaurants">Restaurants</Link>
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
    </main>
  );
};
