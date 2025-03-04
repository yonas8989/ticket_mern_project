import React from "react";
import styles from "../css/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider} />
      <div className={styles.content}>
        <div className={styles.companyInfo}>
          <h2 className={styles.logo}>
            <span className={styles.logoHighlight}>A+</span> Studio
          </h2>
          <p className={styles.description}>
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
        </div>

        <nav className={styles.footerNav}>
          <div className={styles.navColumn}>
            <h3 className={styles.columnTitle}>What We Do</h3>
            <ul className={styles.navList}>
              <li>Web Design</li>
              <li>App Design</li>
              <li>Social Media Manage</li>
              <li>Market Analysis Project</li>
            </ul>
          </div>

          <div className={styles.navColumn}>
            <h3 className={styles.columnTitle}>Company</h3>
            <ul className={styles.navList}>
              <li>About Us</li>
              <li>Career</li>
              <li>Become Investor</li>
            </ul>
          </div>

          <div className={styles.navColumn}>
            <h3 className={styles.columnTitle}>Support</h3>
            <ul className={styles.navList}>
              <li>FAQ</li>
              <li>Policy</li>
              <li>Business</li>
            </ul>
          </div>

          <div className={styles.navColumn}>
            <h3 className={styles.columnTitle}>Contact</h3>
            <ul className={styles.navList}>
              <li>WhatsApp</li>
              <li>Support 24</li>
            </ul>
          </div>
        </nav>
      </div>

      <div className={styles.socialLinks}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/137bed426dceb2d9f0180c9dbc67cda3bd2255870ff28fd1f802d1dbcc528c81?placeholderIfAbsent=true"
          alt="Social Media 1"
          className={styles.socialIcon}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/9cec40fa48b7fdf0dff033a9c61b8492877d1d648fd6387616becf960e307719?placeholderIfAbsent=true"
          alt="Social Media 2"
          className={styles.socialIcon}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/61d4a41aba1b1c1d93587dc165a7d1c054ee9369476bfc637b0b07cbe88c3d98?placeholderIfAbsent=true"
          alt="Social Media 3"
          className={styles.socialIcon}
        />
      </div>

      <div className={styles.bottomDivider} />
      <p className={styles.copyright}>Copyright © 2022 Avi Yansah</p>
    </footer>
  );
};

export default Footer;
