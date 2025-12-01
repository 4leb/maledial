import styles from "./index.module.css";
import DialButton from "../DialButton";

interface Props {
  color: string;
  label: string;
  onIncrement: VoidFunction;
  onDecrement: VoidFunction;
  value: number;
}

export default function Dial({
  color,
  label,
  onIncrement,
  onDecrement,
  value,
}: Props) {
  return (
    <div className={styles.dial} style={{ color }}>
      <DialButton color={color} angle="270" onClick={onIncrement} />
      <div className={styles["dial-counter"]}>
        <div className={styles["dial-number"]}>{value}</div>
      </div>
      <div className={styles["dial-title"]}>{label}</div>
      <DialButton color={color} angle="90" onClick={onDecrement} />
    </div>
  );
}
