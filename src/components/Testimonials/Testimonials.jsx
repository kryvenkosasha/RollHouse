import customer1 from "../../images/customer1.jpg";
import customer2 from "../../images/customer2.jpg";
import customer3 from "../../images/customer3.jpg";

import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2>What Our Customers Say</h2>
      <div className={styles.cards}>
        <article className={styles.card}>
          <img
            className={styles.customerImage}
            src={customer1}
            alt="John Doe"
          />
          <blockquote>
            "Amazing experience! The camper was clean, comfortable, and had
            everything we needed."
          </blockquote>
          <cite>John Doe</cite>
        </article>
        <article className={styles.card}>
          <img
            className={styles.customerImage}
            src={customer2}
            alt="Jane Smith"
          />
          <blockquote>
            "Best vacation ever! We will definitely rent from here again."
          </blockquote>
          <cite>Jane Smith</cite>
        </article>
        <article className={styles.card}>
          <img
            className={styles.customerImage}
            src={customer3}
            alt="Michael Brown"
          />
          <blockquote>
            "Highly recommend! Great service and a wonderful camper."
          </blockquote>
          <cite>Michael Brown</cite>
        </article>
      </div>
    </section>
  );
}
