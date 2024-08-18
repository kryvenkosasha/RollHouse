import React from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Adventure Awaits with Our Campers
          </h1>
          <p className={styles.heroDescription}>
            Explore the world in comfort and style with our premium campers.
          </p>
          <Link to="/catalog" className={styles.heroBtn}>
            Book now
          </Link>
        </div>
      </section>
    </>
  );
}
