import React from "react";
import styles from "../app/page.module.css";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return <main className={styles.main}>{children}</main>;
};

export default MainContainer;
