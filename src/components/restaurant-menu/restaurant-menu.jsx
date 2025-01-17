import { Menu } from "./menu-list";
import { DishCounter } from "../dish-counter/dish-counter";
import styles from "./restaurant-menu.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import { useAuth } from "../auth-context/use-auth";

export const RestaurantMenu = ({ menu, id }) => {
  const { theme } = useTheme();
  const { auth } = useAuth();

  return (
    <div
      className={classNames(styles.menuCart, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
    >
      <h3>Menu:</h3>
      <div className={styles.menuContent}>
        <div>{!!menu.length && <Menu menu={menu} />}</div>
        <div className={styles.dishCounter}>
          {auth.isAuthorized && <DishCounter id={id} />}
        </div>
      </div>
    </div>
  );
};
