"use client";

import { Container } from "../../../components/container/container";
import { useGetRestaurantsQuery } from "../../../redux/services/api/api";
import styles from "./styles.module.css";
import Link from "next/link";

export default function RestaurantsLayout({ children }) {
  const { data, isLoading, isError } = useGetRestaurantsQuery();

  const renderContent = () => {
    if (isLoading) return "loading page ...";
    if (isError) return "error page...";
    if (!data || !data.length) return null;

    return (
      <>
        <div className={styles.tabsImage}></div>
        <div className={styles.tabsHeader}>
          <Container>
            <div className={styles.tabsContent}>
              {data.map((restaurant) => (
                <Link
                  href={`/restaurants/${restaurant.id}/menu`}
                  className={styles.buttonTabs}
                  key={restaurant.id}
                >
                  {restaurant.name}
                </Link>
              ))}
            </div>
          </Container>
        </div>
        {children}
      </>
    );
  };

  return <main className={styles.restaurantsPage}>{renderContent()}</main>;
}
