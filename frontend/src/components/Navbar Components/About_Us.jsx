import React from "react";
import styles from "./AboutUs.module.css";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h4 className={styles.heading}>
          About Government College Of Engineering - Amravati
        </h4>
        <div className={styles.content}>
          <p className={styles.paragraph}>
            Government College of Engineering, Amravati (GCOEA) is one of the
            oldest engineering institutes in the state of Maharashtra, India,
            located in Amravati .It was established in 1964 by the Government of
            Maharashtra, along with three other Government institutes at Pune,
            Aurangabad, and Karad. It was initially affiliated to Nagpur
            University and later on shifted to Amravati University now Sant
            Gadge Baba Amravati University SGBAU) in 1982. The Institute started
            with three basic disciplines Civil, Mechanical and Electrical
            Engineering initially. Subsequently new degree programs in
            Electronic & Telecommunication, Computer Science & Engineering,
            Instrumentation Engineering and Information Technology were added as
            per the demand, need and requirements of the country. The institute
            started part time Post Graduate course in Electrical Power System in
            1986 and later added four P.G. Courses in Thermal Power Engineering,
            Environmental, Geotechnical, and Electronics Systems and
            Communication.
            <br /> The institute now offers seven full time PG programs in
            Electrical Power Systems, Structures, Thermal Power Engineering.,
            Environmental Engineering., Advanced Electronics, Computer
            Engineering and Geotechnical Engineering. <br />
            Besides imparting Engineering education in all major Disciplines, it
            is also a recognized research center for Ph.D. Programs in Civil,
            Mechanical, Electrical, Electronics and Computer Engineering for
            Amravati University. The total student strength is around 1,700.
          </p>
          <h2>
            There are total seven branches, listed by order of establishment.
          </h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Civil Engineering (1964)</li>
            <li className={styles.listItem}>Mechanical Engineering (1964)</li>
            <li className={styles.listItem}>
              Electrical and Power Engineering (1964)
            </li>
            <li className={styles.listItem}>
              Electronics and Telecommunication Engineering (1986)
            </li>
            <li className={styles.listItem}>
              Instrumentation Engineering (1996)
            </li>
            <li className={styles.listItem}>Computer Engineering (1986)</li>
            <li className={styles.listItem}>Information Technology (2001)</li>
          </ul>

          <p className={styles.finalParagraph}>
            The institute was granted autonomy by UGC in 2005–06 and accredited
            by NBA. It is a recognized research center for Ph.D. Programs in
            several engineering disciplines. GCOEA is spread over 114 acres,
            with a fully networked campus and Wi-Fi coverage across all
            departments, hostels, and residential areas. Major recruiters
            include core and software giants, with Tata Consultancy Services
            honoring the institute as a Premium Category college.
          </p>
        </div>
        
      </div>
    </div>
  );
}
