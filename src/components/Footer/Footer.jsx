export default function Footer() {
  return (
    <footer>
      <nav>
        <ul>
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
      <div className="contact-info">
        <address>
          Contact us:{" "}
          <a href="mailto:info@camperrentals.com">info@camperrentals.com</a>
          <br />
          Phone: +123 456 7890
        </address>
      </div>
      <div className="terms">
        <a href="/terms">Terms of Service</a>
      </div>
    </footer>
  );
}
