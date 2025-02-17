import styles from "./restaurants-page.module.css";
import { Container } from "../container/container";
import classNames from "classnames";
import { NavLink, Outlet } from "react-router-dom";
import { useGetRestaurantsQuery } from "../../redux/services/api/api";

export const RestaurantsPage = () => {
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
                <NavLink
                  to={`/restaurants/${restaurant.id}`}
                  className={({ isActive }) =>
                    classNames(styles.buttonTabs, isActive && styles.active)
                  }
                  key={restaurant.id}
                >
                  {restaurant.name}
                </NavLink>
              ))}
            </div>
          </Container>
        </div>
        <Outlet />
      </>
    );
  };

  return <main className={styles.restaurantsPage}>{renderContent()}</main>;
};
