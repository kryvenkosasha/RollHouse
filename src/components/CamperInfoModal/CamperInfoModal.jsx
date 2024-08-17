import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import clsx from "clsx";
import style from "./CamperInfoModal.module.css";

export default function CamperInfoModal({ camper, onClose }) {
  const { details, reviews, name, price, gallery, rating, location } = camper;
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    console.log(camper);

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
    <div className={style.backdrop} onClick={handleClickBackdrop}>
      <div className={style.modalContent}>
        <button onClick={onClose} className={style.modalCloseBtn}>
          <IoClose />
        </button>

        <div className={style.modalInfo}>
          <h2>{name}</h2>
          <p>{location}</p>
          <p>€{price}</p>
          <p>Rating: {rating}</p>
          <ul className={style.modalGallery}>
            {gallery.map((image, index) => (
              <li key={index} className={style.imageContainer}>
                <img src={image} alt={`Gallery image ${index + 1}`} />
              </li>
            ))}
          </ul>
        </div>

        <div className={style.sectionsButtons}>
          <button
            className={clsx({ active: activeSection === "features" })}
            onClick={() => setActiveSection("features")}
          >
            Features
          </button>
          <button
            className={clsx({ active: activeSection === "reviews" })}
            onClick={() => setActiveSection("reviews")}
          >
            Reviews
          </button>
        </div>

        {activeSection && (
          <div className={style.modalSection}>
            {activeSection === "features" && (
              <div>
                <h3>Features</h3>
                <ul>
                  {reviews.map((review) => (
                    <li key={review.comment.slice(0, 10)}>
                      <p>{review.reviewer_name}</p>
                      <p>{review.reviewer_rating}</p>
                      <p>{review.comment}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeSection === "reviews" && (
              <div>
                <h3>Reviews</h3>
                <ul>
                  {reviews.map((review) => (
                    <li key={review.comment.slice(0, 10)}>
                      <p>{review.reviewer_name}</p>
                      <p>{review.reviewer_rating}</p>
                      <p>{review.comment}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className={style.bookingForm}>
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
