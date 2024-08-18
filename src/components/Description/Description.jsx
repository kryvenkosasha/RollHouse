import React from "react";

import styles from "./Description.module.css";

export default function Descriprion() {
  return (
    <section className={styles.description}>
      <div className={styles.intro}>
        <p>
          Our campers are designed to provide the ultimate travel experience,
          combining luxury, convenience, and freedom.
        </p>
      </div>
      <div className={styles.cards}>
        <article className={styles.card}>
          <h3 className={styles.cardTitle}>Comfortable Interiors</h3>
          <p>Experience the luxury of home on the road.</p>
        </article>
        <article className={styles.card}>
          <h3 className={styles.cardTitle}>Flexible Rental Options</h3>
          <p>Rent by the day, week, or month – the choice is yours.</p>
        </article>
        <article className={styles.card}>
          <h3 className={styles.cardTitle}>Fully Equipped</h3>
          <p>Everything you need for a perfect getaway.</p>
        </article>
      </div>
    </section>
  );
}
