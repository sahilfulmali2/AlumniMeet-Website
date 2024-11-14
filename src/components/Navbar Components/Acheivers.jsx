import React from "react";
import { Link } from "react-router-dom";
import styles from "./Acheivers.module.css";
import { alumnidata } from "../data/alumni";

export default function Acheivers() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>Success Stories</h1>
        <div className={styles.content}>
          {alumnidata.map((alumnus, index) => (
            <div key={index} className={styles.alumnus}>
              <div className={styles.img_container}>
                <img
                  src={alumnus.image}
                  alt={alumnus.name}
                  className={styles.alumniImage}
                />
              </div>

              <div className={styles.details}>
                <h2>{alumnus.name}</h2>
                <p>Batch: {alumnus.batch}</p>
                <p>Branch: {alumnus.branch}</p>
                <p>Current Role: {alumnus.currentRole}</p>
                <p>Accomplishments: {alumnus.about}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
