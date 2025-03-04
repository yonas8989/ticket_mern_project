"use client";
import React from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import ClientSection from "./ClientSection";
import AboutSection from "./AboutSection";
import TestimonialSection from "./TestimonialSection";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";
import styles from "../css/LandingPageStudio.module.css";

const LandingPageStudio: React.FC = () => {
  return (
    <main className={styles.landingPageStudio}>
      <div className={styles.contentWrapper}>
        <div className={styles.mainContent}>
          <Navigation />
          <Hero />
          <div className={styles.decorativeCircleYellow} />
          <ClientSection />
          <AboutSection />
        </div>
        <TestimonialSection />
        <NewsletterSection />
        <Footer />
      </div>
    </main>
  );
};

export default LandingPageStudio;
