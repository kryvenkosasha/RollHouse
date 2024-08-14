export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="cards">
        <article className="card">
          <img src="/path/to/avatar1.jpg" alt="John Doe" />
          <blockquote>
            "Amazing experience! The camper was clean, comfortable, and had
            everything we needed."
          </blockquote>
          <footer>
            <cite>John Doe</cite>
          </footer>
        </article>
        <article className="card">
          <img src="/path/to/avatar2.jpg" alt="Jane Smith" />
          <blockquote>
            "Best vacation ever! We will definitely rent from here again."
          </blockquote>
          <footer>
            <cite>Jane Smith</cite>
          </footer>
        </article>
        <article className="card">
          <img src="/path/to/avatar3.jpg" alt="Michael Brown" />
          <blockquote>
            "Highly recommend! Great service and a wonderful camper."
          </blockquote>
          <footer>
            <cite>Michael Brown</cite>
          </footer>
        </article>
      </div>
    </section>
  );
}
