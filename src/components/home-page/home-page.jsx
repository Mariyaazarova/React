import styles from "./home-page.module.css";
import { NavLink } from "react-router-dom";

export const HomePage = () => {
  return (
    <main className={styles.homePage}>
      <div className={styles.image}>
        <div className={styles.content}>
          <h1>Always ready</h1>
          <p>Choose restaurant and order your favorite dishes</p>
        </div>
      </div>
      <NavLink to="restaurants" className={styles.restaurantsText}>
        Restaurants
      </NavLink>
    </main>
  );
};
