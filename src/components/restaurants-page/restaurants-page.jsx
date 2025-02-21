"use client";

import styles from "./restaurants-page.module.css";
import { Container } from "../container/container";
import Link from "next/link";
import { useGetRestaurantsQuery } from "../../redux/services/api/api";

export const RestaurantsPage = ({ children }) => {
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
                  href={`/restaurants/${restaurant.id}`}
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
};
