import styles from "./index.module.css";

interface Props {
  turnNumber: number;
  onClick: VoidFunction;
}

export default function Initiative({ turnNumber, onClick }: Props) {
  return (
  <div className={styles.turn}>
    <div className={styles["turn-tracker"]} onClick={onClick}>
      <div className={styles["turn-number"]}>
        {turnNumber}
      </div>
    </div>
    <div className={styles["turn-label"]}>
      turn
    </div>
  </div>);
}
