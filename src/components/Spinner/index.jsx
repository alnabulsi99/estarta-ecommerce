import { PacmanLoader } from "react-spinners";
import styles from "./styles.module.css";

export default function Spinner() {
  return (
    <div className={styles.SpinnerContainer}>
      <PacmanLoader color="rgba(244, 255, 0, 1)" size={50} />
    </div>
  );
}
