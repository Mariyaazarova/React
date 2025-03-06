"use client";

import { useParams } from "next/navigation";
import { useTheme } from "../../../../../components/theme-context/use-theme";
import { useGetMenuByRestaurantIdQuery } from "../../../../../redux/services/api/api";
import styles from "./styles.module.css";
import classNames from "classnames";
import Link from "next/link";

export default function RestaurantMenu() {
  const { theme } = useTheme();
  const { restaurantId: id } = useParams();
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
              <Link href={`/dish/${dish.id}`} className={styles.menuText}>
                {dish.name}
              </Link>
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
