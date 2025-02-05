import styles from "./restaurant-menu.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { useRequest } from "../../redux/hooks/use-request";
import { getDishes } from "../../redux/entities/dishes/get-dishes";
import { selectDishesByIds } from "../../redux/entities/dishes/dishes-slice";
import { REQUESR_STATUSES } from "../../redux/consts";

export const RestaurantMenu = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const requestStatus = useRequest(getDishes);

  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant || !restaurant.menu) {
    return null;
  }

  const dishes = useSelector((state) =>
    selectDishesByIds(state, restaurant.menu)
  );

  const renderDishes = () => {
    if (dishes && dishes.length > 0) {
      return (
        <>
          <h3>Menu:</h3>
          <div>
            {dishes.filter(Boolean).map((dish) => (
              <div key={dish.id}>
                <h4>
                  <Link to={`/dish/${dish.id}`} className={styles.menuText}>
                    {dish.name}
                  </Link>
                </h4>
              </div>
            ))}
          </div>
        </>
      );
    } else if (requestStatus === REQUESR_STATUSES.PENDING) {
      return <div>Loading...</div>;
    } else {
      return <div>Ничего не найдено</div>;
    }
  };

  return (
    <div
      className={classNames(styles.menuCart, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
    >
      {renderDishes()}
    </div>
  );
};
