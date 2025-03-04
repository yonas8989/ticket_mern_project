import React from "react";
import styles from "../css/ClientSection.module.css";

const ClientSection: React.FC = () => {
  return (
    <section className={styles.clientSection}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Client</h2>
          <p className={styles.description}>
            Several selected clients, who already believe in our service.
          </p>
        </div>
        <div className={styles.clientLogos}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/02a09e66bf79d58af0f73d7820af910e565d5484845f34b19a34c300e0b119ae?placeholderIfAbsent=true"
            alt="Client Logo 1"
            className={styles.clientLogo}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/3639201c0cf900b420b07ce41bc6ea6725a16c4c930afb48c925a7b07931e08f?placeholderIfAbsent=true"
            alt="Client Logo 2"
            className={styles.clientLogo}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/17631b4dafc7c5cbfe9a80878c543ea4a9f8253a4b377bcad678cfe3da20380f?placeholderIfAbsent=true"
            alt="Client Logo 3"
            className={styles.clientLogo}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/033ef65df817a0a0e2a01f4cf7a2de0b42e157bfa17aa882b7bfcac6c1b78d50?placeholderIfAbsent=true"
            alt="Client Logo 4"
            className={styles.clientLogo}
          />
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/7fbbf3cff387172dd1cfafd3867906c10899ce0e841997149b6f0862c6103d66?placeholderIfAbsent=true"
        alt="Decorative Image"
        className={styles.decorativeImage}
      />
    </section>
  );
};

export default ClientSection;
