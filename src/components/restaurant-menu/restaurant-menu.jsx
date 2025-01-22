import styles from "./restaurant-menu.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import { Link } from "react-router-dom";

export const RestaurantMenu = ({ menu }) => {
  const { theme } = useTheme();

  return (
    <div
      className={classNames(styles.menuCart, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
    >
      <h3>Menu:</h3>
      <div>
        {menu.map((dish) => (
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
