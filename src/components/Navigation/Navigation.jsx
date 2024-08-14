import styles from "./Navigation.module.css";
import { IoMenu } from "react-icons/io5";

export default function Navigation() {
  return (
    <>
      <header className={styles.header} >
        <a href="/" className={styles.logo}>
          Roll<span>House</span>
        </a>
        <nav>
          <button className={styles.menuBtn}><IoMenu size="24px"/></button>
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
      </header>
    </>
  );
}
