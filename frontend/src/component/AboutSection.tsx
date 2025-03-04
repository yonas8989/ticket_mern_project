import React from "react";
import styles from "../css/AboutSection.module.css";

const AboutSection: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.content}>
        <div className={styles.imageColumn}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/88afc641070f2e0d1427b67c7580f37a81aa83ca02bae377db0ece05f8d57bf2?placeholderIfAbsent=true"
            alt="Company Overview"
            className={styles.aboutImage}
          />
        </div>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>
            Great Digital Product Agency since 2016
          </h2>
          <p className={styles.description}>
            Our Business Plan is a written document describing a company's core
            business activites, Objectives, and how it plans to achieve its
            goals. Our goal is to provide our client high quality Product with
            modern idea accordingly their budgets and according thir
            reuirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
