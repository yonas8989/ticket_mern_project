import React from "react";
import styles from "../css/Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>A Digital Product Agency</h2>
          <p className={styles.description}>
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <button className={styles.ctaButton}>Contact Now</button>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.decorativeCircleBlue} />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/104374b3b887f14ba6e203a954be8329e35f3e1ffad56f082777a268d4745cd9?placeholderIfAbsent=true"
            alt="Digital Agency Illustration"
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
