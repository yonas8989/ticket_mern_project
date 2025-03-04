"use client";
import React from "react";
import styles from "../css/StatsCard.module.css";

interface StatsCardProps {
  icon: "users" | "members" | "active";
  label: string;
  value: string;
  change?: {
    value: string;
    type: "positive" | "negative";
    text: string;
  };
  showActiveUsers?: boolean;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  icon,
  label,
  value,
  change,
  showActiveUsers,
}) => {
  return (
    <article className={styles.statCard}>
      <div className={`${styles.statIcon} ${styles[`icon${icon}`]}`} />
      <div className={styles.statInfo}>
        <h3 className={styles.statLabel}>{label}</h3>
        <p className={styles.statValue}>{value}</p>
        {change && (
          <p className={`${styles.statChange} ${styles[change.type]}`}>
            <i
              className={`ti ti-arrow-${change.type === "positive" ? "up" : "down"}`}
            />
            <span>
              {change.value} {change.text}
            </span>
          </p>
        )}
        {showActiveUsers && (
          <div className={styles.activeUsers}>
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src={`URL_AVATAR_${i}`}
                alt={`Active user ${i}`}
                className={styles.activeUserDot}
              />
            ))}
          </div>
        )}
      </div>
    </article>
  );
};
