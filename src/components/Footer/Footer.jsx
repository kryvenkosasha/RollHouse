import React from "react";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav>
          <ul className={styles.navList}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/catalog">Catalog</a>
            </li>
            <li>
              <a href="/favorites">Favorites</a>
            </li>
          </ul>
        </nav>
        <div className={styles.contactInfo}>
          <address>
            Contact us:
            <a href="mailto:info@camperrentals.com">info@camperrentals.com</a>
            <br />
            Phone: +123 456 7890
          </address>
        </div>
      </div>
    </footer>
  );
}
