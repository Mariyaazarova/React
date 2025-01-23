import { Link } from "react-router-dom";
import { AuthButton } from "../auth-button/auth-button";
import { SwitchThemeButton } from "../switch-theme-button/switch-theme-button";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <AuthButton />
      <SwitchThemeButton />
      <Link to="/" className={styles.headerContent}>
        Food delivery App
      </Link>
    </header>
  );
};
