import React from "react";
import styles from "../css/Navigation.module.css";

const Navigation: React.FC = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <span className={styles.logoHighlight}>A+</span> Studio
        </h1>
        <ul className={styles.navLinks}>
          <li>
            <a href="#home" className={styles.navLink}>
              Home
            </a>
          </li>
          <li>
            <a href="#what-we-do" className={styles.navLink}>
              What We Do
            </a>
          </li>
          <li>
            <a href="#service" className={styles.navLink}>
              Service
            </a>
          </li>
          <li>
            <a href="#project" className={styles.navLink}>
              Project
            </a>
          </li>
          <li>
            <a href="#blog" className={styles.navLink}>
              Blog
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.navLink}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
