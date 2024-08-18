import { Link } from "react-router-dom";
import styles from "./ModalMenu.module.css";

export default function ModalMenu() {
  return (
    <div className={styles.backdrop}>
      <ul className={styles.linksList}>
        <li className={styles.link}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.link}>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li className={styles.link}>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </div>
  );
}
