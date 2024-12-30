import { useTheme } from "../theme-context/use-theme";
import styles from "./switch-theme-button.module.css";
import classNames from "classnames";

export const SwitchThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <button
      className={classNames(styles.switchButton, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
};
