import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

export default function CamperInfoModal({ camper, onClose }) {
  const { name, price, gallery, rating, location } = camper;

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
    <div className="backdrop" onClick={handleClickBackdrop}>
      <h3>ITS A MODAL WINDOW</h3>
      <h3>ITS A MODAL WINDOW</h3>
      <h3>ITS A MODAL WINDOW</h3>
      <div>
        <button onClick={onClose}>
          <IoClose />
        </button>
        <p>{name}</p>
        <p>{price}</p>
        <p>{location}</p>
        <p>{rating}</p>
        <ul>
          <li>
            <img src={gallery[0]} alt="" />
          </li>
          <li>
            <img src={gallery[1]} alt="" />
          </li>
          <li>
            <img src={gallery[2]} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}
