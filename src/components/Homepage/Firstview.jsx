import React, { useRef } from 'react';
import admin from "../../assets/admin.webp";
import styles from "./Firstview.module.css";


const Hero = () => {

  return (

    <div className={styles.heroContainer} id='explore'>

      <div className={styles.imageContainer}>
        <img src={admin} alt="" />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.textInnerContainer}>
          <h1 className={styles.heading}>
            WELCOME TO THE <br /> ALUMINI ASSOCIATION GCOEA
          </h1>
          <p className={styles.description}>
            A registered body of the Alumni members of the Government College
            of Engineering in Amravati where you connect with fellow members
            and experience the growing spirit of GCOEA
          </p>
        </div>
      </div>
    </div>

  );
}

export default Hero;
