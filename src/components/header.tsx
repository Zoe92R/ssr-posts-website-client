import React from "react";
import styles from "../app/page.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <h2>Posts Website</h2>
      <ul className={styles.navbar}>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
