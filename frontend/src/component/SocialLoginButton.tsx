import React from "react";
import styles from "../css/SocialLoginButton.module.css";

interface SocialLoginButtonProps {
  iconSrc: string;
  onClick?: () => void;
}

export const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  iconSrc,
  onClick,
}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <div className={styles.iconWrapper}>
        <img src={iconSrc} alt="Social login" className={styles.icon} />
      </div>
    </button>
  );
};
