import React from "react";
import styles from "../css/Divider.module.css";

interface DividerProps {
  text: string;
}

export const Divider: React.FC<DividerProps> = ({ text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.line} />
      <span className={styles.text}>{text}</span>
      <div className={styles.line} />
    </div>
  );
};
