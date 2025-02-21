"use client";

import { Container } from "../container/container";
import classNames from "classnames";
import styles from "./restaurant.module.css";
import Link from "next/link";
import { useGetRestaurantByIdQuery } from "../../../src/redux/services/api/api";
import { usePathname } from "next/navigation";

export const RestaurantContainer = ({ restaurantId, children }) => {
  const pathname = usePathname();
  const { data, isLoading, isError } = useGetRestaurantByIdQuery(restaurantId);

  if (isLoading) {
    return "loading restaurant ...";
  }

  if (isError) {
    return "error restaurant...";
  }

  if (!data) {
    return null;
  }

  return (
    <Container>
      <h2>{data.name}</h2>
      <div className={styles.restaurant}>
        <Link
          href={`/restaurant/${restaurantId}/menu`}
          className={classNames(styles.link, {
            [styles.activeLink]:
              `/restaurant/${restaurantId}/menu` === pathname,
          })}
        >
          Menu
        </Link>

        <Link
          href={`/restaurant/${restaurantId}/reviews`}
          className={classNames(styles.link, {
            [styles.activeLink]:
              `/restaurant/${restaurantId}/reviews` === pathname,
          })}
        >
          Reviews
        </Link>
      </div>
      {children}
    </Container>
  );
};
