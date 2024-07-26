import React from "react";

import styles from "./header.module.css";
import "../../styles/global.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#" className={`${styles.logo} link`}>
          Tod♡
        </a>
      </div>
    </header>
  );
};

export default Header;
