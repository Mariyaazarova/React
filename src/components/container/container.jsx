import classNames from "classnames";
import styles from "./container.module.css";

export const Container = ({ children, className }) => {
  return (
    <div className={classNames(styles.container, className)}>{children}</div>
  );
};
