"use client";
import React from "react";
import styles from "../css/TestimonialSection.module.css";

const TestimonialSection: React.FC = () => {
  return (
    <section className={styles.testimonialSection}>
      <h2 className={styles.title}>What our happy client say</h2>
      <p className={styles.subtitle}>
        Several selected clients, who already believe in our service.
      </p>

      <div className={styles.testimonialContent}>
        <div className={styles.testimonialCard}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/f98f2f6b4aba822d841a4a8159b8a64592b7f1895375e019598151a0ee2aa3a0?placeholderIfAbsent=true"
            alt="Client Portrait"
            className={styles.clientImage}
          />
          <div className={styles.testimonialText}>
            <h3 className={styles.clientName}>Matthew Paul</h3>
            <p className={styles.testimonial}>
              Perfect, very good job! Thank you for the amazing design and work.
              Really impressed with the high quality and quick turnaround time.
              Highly recommend.
            </p>
            <div className={styles.pagination}>
              <div className={styles.paginationDotActive} />
              <div className={styles.paginationDot} />
              <div className={styles.paginationDot} />
              <div className={styles.paginationDot} />
              <div className={styles.paginationDot} />
            </div>
          </div>
        </div>

        <div className={styles.decorativeElements}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/ebb9f63125bcf1b802a3c2cffdaedc15a7dbca887eb5d9af698f5db6b6bc37d0?placeholderIfAbsent=true"
            alt=""
            className={styles.decorativeImage1}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/8572e99e36897c2baa702316b38c501830724abe856047e63a4d7938f25a4e62?placeholderIfAbsent=true"
            alt=""
            className={styles.decorativeImage2}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/0672e81b3c3c116ccdb870ad38d03cc0d7528ac14849237e36d559e9c72ac53e?placeholderIfAbsent=true"
            alt=""
            className={styles.decorativeImage3}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/6cd66c4a5415c8c51b17970c9bb07a1ca92b608e926f6c33aa45cb65d1f16fd9?placeholderIfAbsent=true"
            alt=""
            className={styles.decorativeImage4}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/99ffdc284dac49e20adf5e5399ba61eb6eab51090a894e5273b36a921985a7f9?placeholderIfAbsent=true"
            alt=""
            className={styles.decorativeImage5}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/3d2343afac269012708858d3d2752b253739bbd8e57ac67d62dd59d5269a9ebe?placeholderIfAbsent=true"
            alt=""
            className={styles.decorativeImage6}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/f024464c127e9693f8b418f20e9b268455545a4c7cc86c5e2de7ab1a3c425af4?placeholderIfAbsent=true"
            alt=""
            className={styles.decorativeImage7}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/2b768854814d94e234ade31f856544e697c13c52354d6483c135d8aad5dfb288?placeholderIfAbsent=true"
            alt=""
            className={styles.decorativeImage8}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
