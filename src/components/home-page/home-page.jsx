"use client";

import styles from "./home-page.module.css";
import Link from "next/link";

export const HomePage = () => {
  return (
    <main className={styles.homePage}>
      <div className={styles.image}>
        <div className={styles.content}>
          <h1>Always ready</h1>
          <p>Choose restaurant and order your favorite dishes</p>
        </div>
      </div>
      <Link href="/restaurants" className={styles.restaurantsText}>
        Restaurants
      </Link>
    </main>
  );
};
