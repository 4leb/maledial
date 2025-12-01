import styles from "./index.module.css";

interface Props {
  onClick: VoidFunction;
  hasInitiative: boolean;
}

export default function Initiative({onClick, hasInitiative}: Props) {

  return (
  <div className={styles.initiative}>
    <div className={styles[hasInitiative ? "initiative-token" : "initiative-empty"]} onClick={onClick} />
    <div className={styles["initiative-label"]}>
      initiative
    </div>
  </div>);
}
