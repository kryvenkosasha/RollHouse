import { Link } from "react-router-dom";
import { IoClose} from "react-icons/io5";

import styles from "./ModalMenu.module.css";

export default function ModalMenu({onClose}) {
  return (
    <div className={styles.backdrop}>
      <button onClick={onClose}>
        <IoClose size="35px" color="#fff"/>
      </button>
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
