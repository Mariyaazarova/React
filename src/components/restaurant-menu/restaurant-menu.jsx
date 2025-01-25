import styles from "./restaurant-menu.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { selectDishesByIds } from "../../redux/entities/dishes/dishes-slice";

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
  return (
    <div
      className={classNames(styles.menuCart, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
    >
      <h3>Menu:</h3>
      <div>
        {dishes.map((dish) => (
          <div key={dish.id}>
            <h4>
              <Link to={`/dish/${dish.id}`} className={styles.menuText}>
                {dish.name}
              </Link>
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};
