import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.margin}>
      <div className={styles.banner}></div>
      <div className={styles.position}>
        <h1>Computer Engineering</h1>
        <h5>142,765 computer engineers follow this</h5>
      </div>
    </div>
  );
};

export default Banner;
