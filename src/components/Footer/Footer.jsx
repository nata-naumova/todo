import React from "react";
import styles from "./footer.module.css";
import "../../styles/global.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>TOD♡ версия 0.01 - 2024 г.</p>
      </div>
    </footer>
  );
};

export default Footer;
