import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function CamperInfoModal({ camper, onClose }) {
  const { equipment, reviews, name, price, gallery, rating, location } = camper;
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleClickBackdrop = (e) => {
    if (e.targer === e.currentTarget) onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClickBackdrop}>
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-btn">
          <IoClose />
        </button>

        <div className="modal-header">
          <h2>{name}</h2>
          <p>{location}</p>
          <p>€{price}</p>
          <p>Rating: {rating}</p>
          <ul className="modal-gallery">
            {gallery.map((image, index) => (
              <li key={index}>
                <img src={image} alt={`Gallery image ${index + 1}`} />
              </li>
            ))}
          </ul>
        </div>

        <div className="modal-buttons">
          <button
            className={activeSection === "features" ? "active" : ""}
            onClick={() => setActiveSection("features")}
          >
            Features
          </button>
          <button
            className={activeSection === "reviews" ? "active" : ""}
            onClick={() => setActiveSection("reviews")}
          >
            Reviews
          </button>
        </div>

        {activeSection && (
          <div className="modal-section">
            {activeSection === "features" && (
              <div>
                <h3>Features</h3>
                <ul>
                 <li>Features</li>
                </ul>
              </div>
            )}

            {activeSection === "reviews" && (
              <div>
                <h3>Reviews</h3>
                <ul>
                  <li>reviews</li>
                </ul>
              </div>
            )}

            <div className="booking-form">
              <h3>Book your camper now</h3>
              <form>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div>
                  <label htmlFor="bookingDate">Booking date:</label>
                  <input
                    type="date"
                    id="bookingDate"
                    name="bookingDate"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="comment">Comment:</label>
                  <textarea id="comment" name="comment"></textarea>
                </div>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
