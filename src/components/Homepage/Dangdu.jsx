import React from 'react';
import dangdu from '../../assets/dangdu.webp';
import styles from './Dangdu.module.css';

const Dangdu = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.imageContainer}>                
            <img src={dangdu} alt="" />
          </div>

          <div className={styles.content}>           
            <h1 className={styles.heading}>DANGDU</h1>

            <p className={styles.description}>ALUMNI MEET OF BATCH 1999 <br /> JOIN US TO RELIVE THE COLLEGE MEMORY</p>

            <button className={styles.button}><a href="/register">REGISTER NOW</a></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dangdu;
