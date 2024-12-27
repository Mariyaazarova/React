import { Tabs } from "../tabs/tabs";
import styles from "./restaurants-page.module.css";

export const RestaurantsPage = () => {
  return (
    <main className={styles.restaurantsPage}>
      <div className={styles.image}>
        <div className={styles.content}>
          <h1>Always ready</h1>
          <p>Choose restaurant and order your favorite dishes</p>
        </div>
      </div>
      <Tabs />
    </main>
  );
};
