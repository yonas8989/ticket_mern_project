"use client";
import React from "react";
import styles from "../css/InputField.module.css";

interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: "text" | "email" | "password";
  showIcon?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = "text",
  showIcon = false,
}) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputWrapper}>
        <input type={type} placeholder={placeholder} className={styles.input} />
        {showIcon && <div className={styles.icon} />}
      </div>
    </div>
  );
};
