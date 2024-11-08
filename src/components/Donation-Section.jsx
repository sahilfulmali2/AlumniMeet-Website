import React from "react";
import styles from "./Donation-Section.module.css";

const Donation = () => {
  return (
    <div className={styles.donation_container}>
      <h1>Want to Give Back to College</h1>
      <a href="#">
        <h2>Donate Here</h2>
      </a>
    </div>
  );
};

export default Donation;
