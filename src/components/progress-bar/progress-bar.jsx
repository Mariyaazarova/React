import { useProgress } from "./use-progress";
import styles from "./progress-bar.module.css";

export const ProgressBar = () => {
  const progress = useProgress();

  return (
    <div
      className={styles.progressBar}
      style={{
        width: progress,
      }}
    />
  );
};
