import styles from "./counter.module.css";

export const Counter = ({ value, increment, decrement }) => {
  return (
    <div>
      <button
        className={styles.buttonCounter}
        type="button"
        onClick={decrement}
      >
        -
      </button>
      {value}
      <button
        className={styles.buttonCounter}
        type="button"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};
