import styles from "./restaurant-menu.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import { useSelector } from "react-redux";
import { selectDishesByIds } from "../../redux/entities/dishes/dishes-slice";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const RestaurantMenu = () => {
  const { theme } = useTheme();

  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  
  const { menu: dishIds } = restaurant;
  const dishes = useSelector((state) => selectDishesByIds(state, dishIds));

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
              <NavLink to={`/dish/${dish.id}`} className={styles.menuText}>
                {dish.name}
              </NavLink>
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};
