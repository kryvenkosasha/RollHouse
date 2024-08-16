import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";

import CamperInfoModal from "../CamperInfoModal/CamperInfoModal";

export default function Camper({ camper }) {
  const { _id, name, price, gallery, rating, location } = camper;
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFav = favorites.some((favCamper) => favCamper._id === _id);
    setIsFavorite(isFav);
  }, [_id]);

  const handleFavoriteTogle = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!isFavorite) {
      favorites.push(camper);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    } else {
      const updatedFavorites = favorites.filter(
        (favCamper) => favCamper._id !== _id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <img src={gallery[0]} alt="" />
      <button onClick={handleFavoriteTogle}>
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </button>

      <div>
        <p>{name}</p>
        <p>${price}</p>
        <p>rating:{rating}</p>
        <p>{location}</p>
          </div>
          
<button onClick={handleOpenModal}>Show more</button>

          {isModalOpen && <CamperInfoModal camper={camper} onClose={handleCloseModal}/>}
    </>
  );
}
