import styles from "./index.module.css";
import Image from "next/image";
import maledictionLogo from "@/app/malediction.png";
import maledictionLandscapeLogo from "@/app/maledictionLandscape.png";


interface Props {
  onConfirm: (startingEcho: string) => void;
  onCancel?: VoidFunction;
}

export default function ClearModal({ onConfirm, onCancel }: Props) {
  const start25 = () => onConfirm("25");
  const start20 = () => onConfirm("20");

  return (
  <div className={styles.clear_modal}>
    <Image
      className={styles["clear_modal-image"]}
      src={maledictionLogo}
      alt="Malediction logo"
    />
    <Image
      className={styles["clear_modal-image_landscape"]}
      src={maledictionLandscapeLogo}
      alt="Malediction logo"
    />
    <div className={styles["clear_modal-abstract"]}>
        <div className={styles["clear_modal-abstract_title"]}>Start a new game with:</div>
    </div>
    <div className={styles["clear_modal-choice"]}>
        <div className={styles["clear_modal-confirm_button"]} onClick={start20}>20 echo</div>
        <div className={styles["clear_modal-confirm_button"]} onClick={start25}>25 echo</div>
    </div>
    { onCancel && 
      <div className={styles["clear_modal-cancel_button"]} onClick={onCancel}>cancel</div>
    }
  </div>);
}
