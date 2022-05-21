import React from "react";
import styles from './Header.module.css';
const Header = () => {
  return (
    <div className="container d-flex" style={{marginTop: 1 + "%"}}>
      <h3>ATG.WORLD</h3>
      <div className={`${styles.margin} ${styles.search}`}> 
        <input type="text" placeholder="Search for your favorite groups in ATG"></input>
      </div>
      <div>Create account <a href="/#">It's free</a></div>
    </div>
  );
};

export default Header;
