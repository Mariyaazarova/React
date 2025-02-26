"use client";

import { useParams } from "next/navigation";
import { Container } from "../../../../components/container/container";
import { useGetRestaurantByIdQuery } from "../../../../redux/services/api/api";
import styles from "./styles.module.css";
import Link from "next/link";

export default function RestaurantLayout({ children }) {
  const { restaurantId: id } = useParams();
  const { data, isLoading, isError } = useGetRestaurantByIdQuery(id);

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
          href={`/restaurants/${id}/menu`}
          className={styles.buttonRestaurant}
        >
          Menu
        </Link>
        <Link
          href={`/restaurants/${id}/reviews`}
          className={styles.buttonRestaurant}
        >
          Reviews
        </Link>
      </div>
      {children}
    </Container>
  );
}
