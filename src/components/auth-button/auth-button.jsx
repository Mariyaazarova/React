"use client";

import { useAuth } from "../auth-context/use-auth";
import styles from "./auth-button.module.css";

export const AuthButton = () => {
  const { getUserName, toggleAuth } = useAuth();

  return (
    <div>
      <button className={styles.authButton} onClick={toggleAuth}>
        {getUserName() ?? "Login"}
      </button>
    </div>
  );
};
