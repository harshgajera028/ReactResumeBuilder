import React from "react";

import resumeSvg from "../../assets/unnamed.webp";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          Craft  Your <span>Professional  Resume</span> With Ease!
        </p>
        <p className={styles.heading}>
         <span>It's </span> Free..!
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;
