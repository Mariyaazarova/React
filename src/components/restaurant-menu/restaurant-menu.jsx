import styles from "./restaurant-menu.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { selectDishesByIds } from "../../redux/entities/dishes/dishes-slice";
import { useRequest } from "../../redux/hooks/use-request";
import { getDishes } from "../../redux/entities/dishes/get-dishes";

export const RestaurantMenu = () => {
  const { id } = useParams();
  const { theme } = useTheme();

  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  if (!restaurant || !restaurant.menu) {
    return null;
  }
  const dishes = useSelector((state) =>
    selectDishesByIds(state, restaurant.menu)
  );

  const requestStatus = useRequest(getDishes);

  if (requestStatus === "pending") {
    return "loading...";
  }
  if (requestStatus === "rejected") {
    return "error...";
  }
  if (!dishes?.length) {
    return null;
  }

  return (
    <div
      className={classNames(styles.menuCart, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
    >
      <h3>Menu:</h3>
      <div>
        {dishes.map((dish) => {
          if (!dish) {
            return null;
          }
          return (
            <div key={dish.id}>
              <h4>
                <Link to={`/dish/${dish.id}`} className={styles.menuText}>
                  {dish.name}
                </Link>
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};
