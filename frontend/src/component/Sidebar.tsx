"use client";
import React from "react";
import styles from "../css/Sidebar.module.css";

export const Sidebar: React.FC = () => {
  const navItems = [
    { icon: "key", label: "Dashboard", active: false },
    { icon: "box", label: "Product", active: false },
    { icon: "users", label: "Customers", active: true },
    { icon: "wallet", label: "Income", active: false },
    { icon: "percent", label: "Promote", active: false },
    { icon: "help", label: "Help", active: false },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoSection}>
        <svg width="37" height="37" viewBox="0 0 37 37" fill="none">
          <path
            d="M18.5003 34.8876C17.4674 34.8876 16.419 34.6564 15.602 34.1784L7.12284 29.2914C3.66951 26.9634 3.45367 26.6089 3.45367 22.9551V14.0443C3.45367 10.3905 3.65409 10.0359 7.04576 7.73887L15.5865 2.80553C17.2053 1.86512 19.749 1.86512 21.3678 2.80553L29.8778 7.70803C33.3311 10.0359 33.547 10.3905 33.547 14.0443V22.9397C33.547 26.5934 33.3465 26.948 29.9549 29.2451L21.414 34.1784C20.5815 34.6564 19.5332 34.8876 18.5003 34.8876Z"
            fill="black"
          />
        </svg>
        <h1 className={styles.logoText}>Dashboard</h1>
        <span className={styles.version}>v.01</span>
      </div>

      <nav className={styles.navLinks}>
        {navItems.map((item, index) => (
          <button
            key={index}
            className={item.active ? styles.navItemActive : styles.navItem}
          >
            <i className={`ti ti-${item.icon}`} />
            <span>{item.label}</span>
            <i className="ti ti-chevron-right" />
          </button>
        ))}
      </nav>

      <div className={styles.upgradeCard}>
        <p className={styles.upgradeText}>
          Upgrade to PRO to get access all Features!
        </p>
        <button className={styles.upgradeButton}>Get Pro Now!</button>
      </div>

      <div className={styles.userSection}>
        <img src="URL_AVATAR" alt="User avatar" className={styles.userAvatar} />
        <div className={styles.userInfo}>
          <h3 className={styles.userName}>Evano</h3>
          <p className={styles.userRole}>Project Manager</p>
        </div>
        <i className="ti ti-chevron-down" />
      </div>
    </aside>
  );
};
