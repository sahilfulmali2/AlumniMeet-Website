import styles from "./Footer.module.css";
import collegeLogo from "../../assets/college_logo.png";
const Footer = () => {


  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_box}>
        <div className={styles.upper_box}>
          <img src={collegeLogo} alt="College Logo" />
          <div className={styles.college_name}>
            <h1>Government College of Engineering</h1>
            <h2>VMV Road, Kathora Naka, Amravati-444604</h2>
            <div className={styles.links}>
              <span style={{display:"flex",justifyContent:"space-between",gap:"10px"}}> Contact Us <a href="mailto:info@gcoea.ac.in">info@gcoea.ac.in</a></span>
              <span style={{display:"flex",justifyContent:"space-between",gap:"10px"}}> Visit <a href="https://www.gcoea.ac.in/" target="blank">
                {" "}
                www.gcoea.ac.in
              </a></span>
            </div>
            {/* <div className={styles.icons}>
              <p>logos</p>
            </div> */}
          </div>
        </div>
        <div className={styles.lower_box}>
          <p>Designed and Developed by SAHIL, PRANAV, DURGESH</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
