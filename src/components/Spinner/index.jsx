import { RingLoader } from "react-spinners";
import styles from "./styles.module.css";

export default function Spinner() {
  return (
    <div className={styles.SpinnerContainer}>
     
<RingLoader
  color="#007bff"
  size={100}
/>
    </div>
  );
}
