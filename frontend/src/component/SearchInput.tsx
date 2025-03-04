import React from "react";
import styles from "../css/SearchInput.module.css";

export const SearchInput: React.FC = () => {
  return (
    <div className={styles.searchBar}>
      <i className="ti ti-search" />
      <input type="text" placeholder="Search" className={styles.input} />
    </div>
  );
};
