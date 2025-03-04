import React from "react";
import styles from "../css/NewsletterSection.module.css";

const NewsletterSection: React.FC = () => {
  return (
    <section className={styles.newsletterSection}>
      <div className={styles.decorativeCircleYellow} />
      <div className={styles.content}>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>Subscribe Newsletter</h2>
          <p className={styles.description}>
            I will update good news and promotion service not spam
          </p>
        </div>
        <div className={styles.imageColumn}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/6c45ec8175cf84380278b6a1924605724132549c9aa6417bccf94faaa2c98a3b?placeholderIfAbsent=true"
            alt="Newsletter Illustration"
            className={styles.newsletterImage}
          />
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
