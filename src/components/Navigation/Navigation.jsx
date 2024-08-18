import React, { useState } from "react";

import styles from "./Navigation.module.css";
import { IoMenu } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";
import ModalMenu from "../ModalMenu/ModalMenu";

export default function Navigation() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
    if (openMenu === true) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          Roll<span>House</span>
        </Link>
        <nav>
          <button className={styles.menuBtn} onClick={handleOpenMenu}>
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
      {openMenu && <ModalMenu />}
    </>
  );
}
