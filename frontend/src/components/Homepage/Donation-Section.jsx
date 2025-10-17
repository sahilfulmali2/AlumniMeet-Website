import React from "react";
import styles from "./Donation-Section.module.css";
import { Link } from "react-router-dom";

const Donation = () => {
  return (
    <div className={styles.donation_container}>
      <h1>Want to Give Back to College</h1>
      <Link to="#">
        <h2>Donate Here</h2>
      </Link>
    </div>
  );
};

export default Donation;
