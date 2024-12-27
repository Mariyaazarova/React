import { Menu } from "./menu-list";
import { DishCounter } from "../dish-counter/dish-counter";
import styles from "./restaurant-menu.module.css";
import classNames from "classnames";

export const RestaurantMenu = ({ restaurant, viewVariant = "light" }) => {
  const { menu } = restaurant;
  return (
    <div
      className={classNames(styles.menuCart, {
        [styles.light]: viewVariant === "light",
        [styles.dark]: viewVariant === "dark",
      })}
    >
      <h3>Menu:</h3>
      <div className={styles.menuContent}>
        <div>{!!menu.length && <Menu menu={menu} />}</div>
        <div className={styles.dishCounter}>
          <DishCounter />
        </div>
      </div>
    </div>
  );
};
