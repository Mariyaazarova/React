import { useAuth } from "../auth-context/use-auth";
import styles from "./auth-button.module.css";

export const AuthButton = () => {
  const { auth, toggleAuth } = useAuth();
  const { isAuthorized } = auth;

  return (
    <div>
      <button className={styles.authButton} onClick={toggleAuth}>
        {isAuthorized ? auth.name : "Login"}
      </button>
    </div>
  );
};
