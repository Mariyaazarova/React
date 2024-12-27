import styles from "./counter.module.css";
export const Counter = ({ value, increment, decrement }) => {
  return (
    <div>
      <div className={styles.valueCounter}>{value}</div>
      <button onClick={decrement} className={styles.buttonCounter}>
        -
      </button>
      <button onClick={increment} className={styles.buttonCounter}>
        +
      </button>
    </div>
  );
};
