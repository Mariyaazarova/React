import { Container } from "../container/container";
import classNames from "classnames";
import styles from "./restaurant.module.css";
import {
  NavLink,
  Outlet,
  useMatch,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useEffect } from "react";
import { useGetRestaurantByIdQuery } from "../../redux/services/api/api";

export const Restaurant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const match = useMatch("/restaurants/:id");
  const { data, isLoading, isError } = useGetRestaurantByIdQuery(id);

  useEffect(() => {
    if (match) {
      navigate("menu", { replace: true, relative: true });
    }
  }, [navigate, match]);

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
        <NavLink
          to={`/restaurants/${id}/menu`}
          className={({ isActive }) =>
            classNames(styles.buttonRestaurant, isActive && styles.active)
          }
        >
          Menu
        </NavLink>
        <NavLink
          to={`/restaurants/${id}/reviews`}
          className={({ isActive }) =>
            classNames(styles.buttonRestaurant, isActive && styles.active)
          }
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </Container>
  );
};
