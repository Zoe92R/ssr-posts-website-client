import React from "react";
import styles from "../app/page.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer}>
        &copy; {new Date().getFullYear()} Posts Website. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
