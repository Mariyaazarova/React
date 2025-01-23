import { Container } from "../container/container";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
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

export const Restaurant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const match = useMatch("/restaurants/:id");

  // этот эффект нужен для того, чтобы автоматически открывать вкладку menu при переходах между ресторанами
  useEffect(() => {
    if (match) {
      navigate("menu", { replace: true, relative: true });
    }
  }, [navigate, match]);

  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant || !restaurant.name) {
    return null;
  }

  return (
    <Container>
      <h2>{restaurant.name}</h2>
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
