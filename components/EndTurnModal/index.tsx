import styles from "./index.module.css";

interface Props {
  onCancel: VoidFunction;
  onConfirm: VoidFunction;
}

export default function EndTurnModal({ onConfirm, onCancel }: Props) {
  return (
  <div className={styles["end_turn_modal"]}>
    <div className={styles["end_turn_modal-abstract"]}>
        <div className={styles["end_turn_modal-abstract_title"]}>End Turn?</div>
        <br/>
        <div className={styles["end_turn_modal-abstract_description"]}>(Ending the turn will add echo accordingly)</div>
    </div>
    <div className={styles["end_turn_modal-choice"]}>
        <div className={styles["end_turn_modal-cancel_button"]} onClick={onCancel}>Cancel</div>
        <div className={styles["end_turn_modal-confirm_button"]} onClick={onConfirm}>Confirm</div>
    </div>
  </div>);
}
