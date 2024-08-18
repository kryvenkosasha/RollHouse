import React from "react";

import styles from "./Navigation.module.css";
import { IoMenu } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          Roll<span>House</span>
        </Link>
        <nav>
          <button className={styles.menuBtn}>
            <IoMenu size="24px" />
          </button>
          <ul className={styles.navList}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/catalog">Catalog</NavLink>
            </li>
            <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
