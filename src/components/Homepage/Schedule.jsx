import styles from "./Schedule.module.css";
import admin from "../../assets/admin.webp";

const Schedule = () => {
  return (
    <div className={styles.heroContainer} id='explore'>
      <h2 className={styles.heading}>
        Schedule
      </h2>
      <div className={styles.imageContainer}>
        <img src="/schedule/11.webp" alt="" />
        <img src="/schedule/2.webp" alt="" />
      </div>
    </div>

  );
}

export default Schedule;
