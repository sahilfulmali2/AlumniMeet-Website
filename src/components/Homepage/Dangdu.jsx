import React from "react";
import dangdu from "../../assets/dangdu.webp";
import styles from "./Dangdu.module.css";
import { Link } from "react-router-dom";
const Dangdu = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.imageContainer}>
            <img src={dangdu} alt="" />
          </div>

          <div className={styles.content}>
            <h1 className={styles.heading}>GLOBAL ALUMNI MEET 2024</h1>

            <p className={styles.description}>
              ALUMNI MEET OF GCOEA <br /> JOIN US TO RELIVE THE COLLEGE
              MEMORY
            </p>

            <button className={styles.button}>
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSecuQSceghEIp5ipT1ySa_OeUAzzc0kCqVQFJN9imcRSd-o2w/viewform" target="_blank">
              <h2>REGISTER</h2>
            </Link>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dangdu;
