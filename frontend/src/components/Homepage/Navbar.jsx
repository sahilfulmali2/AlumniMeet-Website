import React from "react";
import collegeLogo from "../../assets/college_logo.png";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={`${styles.navbarContainer} ${styles.flexCol}`}>
      <div className={`${styles.navbarTop} ${styles.flexRow}`}>
        <div className={styles.imageContainer}>
          <img src={collegeLogo} alt="LOGO" className={styles.logo} />

          <div className={styles.textContainer}>
            <h1 className={styles.title}>Global Alumni Meet - 2024</h1>
            <h2 className={styles.subtitle}>
              GOVERNMENT COLLEGE OF ENGINEERING, AMRAVATI
            </h2>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <Link to="/register">
              <h2>REGISTER</h2>
            </Link>
          </button>
          
        </div>
      </div>

      <div className={styles.navMenu}>
        <ul className={styles.navList}>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <a href="#">ALUMINI FUNDS</a>
          </li>
          <li>
            <Link to="/acheivers">ACHIEVERS</Link>
          </li>
          <li>
            <a href="#">NEWSROOM</a>
          </li>
          <li>
            <a href="#">MORE</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
