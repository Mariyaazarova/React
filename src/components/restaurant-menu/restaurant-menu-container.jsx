"use client";

import styles from "./restaurant-menu.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import { useGetMenuByRestaurantIdQuery } from "../../redux/services/api/api";
import Link from "next/link";

export const RestaurantMenuConteiner = ({ restaurantId }) => {
  const { theme } = useTheme();

  const { data, isLoading, isError } =
    useGetMenuByRestaurantIdQuery(restaurantId);

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
              <Link href={`/dish/${dish.id}`} className={styles.menuText}>
                {dish.name}
              </Link>
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};
