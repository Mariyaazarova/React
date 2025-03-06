"use client";

import { useParams } from "next/navigation";
import { useAuth } from "../../../../components/auth-context/use-auth";
import { useTheme } from "../../../../components/theme-context/use-theme";
import { useGetDishQuery } from "../../../../redux/services/api/api";
import styles from "./styles.module.css";
import { Container } from "../../../../components/container/container";
import Link from "next/link";
import classNames from "classnames";
import { DishCounter } from "../../../../components/dish-counter/dish-counter";

export default function DishPage() {
  const { theme } = useTheme();
  const { auth } = useAuth();
  const { dishId } = useParams();
  const { data: dish, isLoading, isError } = useGetDishQuery(dishId);

  const renderContent = () => {
    if (isLoading) return "loading dish-page ...";
    if (isError) return "error dish-page...";
    if (!dish) return null;

    return (
      <Container>
        <Link href="/restaurants">Restaurants</Link>
        <div
          className={classNames(styles.menuCart, {
            [styles.light]: theme === "light",
            [styles.dark]: theme === "dark",
          })}
        >
          <h2>{dish.name}</h2>
          <div> Ingredients: {dish.ingredients}</div>
          <p> Price: {dish.price}$</p>
          {auth.isAuthorized && <DishCounter id={dishId} />}
        </div>
      </Container>
    );
  };

  return <main>{renderContent()}</main>;
}
