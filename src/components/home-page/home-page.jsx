import styles from "./home-page.module.css";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <main className={styles.homePage}>
      <div className={styles.image}>
        <div className={styles.content}>
          <h1>Always ready</h1>
          <p>Choose restaurant and order your favorite dishes</p>
        </div>
      </div>
      <Link to="/restaurants" className={styles.restaurantsText}>
        Restaurants
      </Link>
    </main>
  );
};
