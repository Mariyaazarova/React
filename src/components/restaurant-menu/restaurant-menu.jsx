import styles from "./restaurant-menu.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import { Link, useParams } from "react-router-dom";
import { useGetMenuByRestaurantIdQuery } from "../../redux/services/api/api";

export const RestaurantMenu = () => {
  const { theme } = useTheme();
  const { id } = useParams();
  const { data, isLoading, isError } = useGetMenuByRestaurantIdQuery(id);

  if (isLoading) {
    return "loading restaurant-menu...";
  }

  if (isError) {
    return "error restaurant-menu...";
  }

  if (!data || !data.length) {
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
        {data.map((dish) => (
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
