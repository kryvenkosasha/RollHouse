import React from "react";

import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";

import CamperInfoModal from "../CamperInfoModal/CamperInfoModal";
import { FaStar } from "react-icons/fa";

import styles from "./Camper.module.css";

export default function Camper({ camper }) {
  const { _id, name, price, gallery, rating, location } = camper;
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFav = favorites.some((favCamper) => favCamper._id === _id);
    setIsFavorite(isFav);
  }, [_id]);

  const handleFavoriteToggle = () => {
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
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section className={styles.container}>
      <article className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={gallery[0]} alt={name} className={styles.image} />
        </div>
  
        <div className={styles.content}>
          <div className={styles.details}>
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.rating}>
              <FaStar color="#ffc531" /> {rating}
            </p>
            <p className={styles.location}>{location}</p>
          </div>
          <div className={styles.priceAndFavorite}>
            <p className={styles.price}>${price}</p>
            <button
              onClick={handleFavoriteToggle}
              className={styles.favoriteButton}
            >
              {isFavorite ? <FaHeart color="#e44848" /> : <FaRegHeart />}
            </button>
          </div>
  
          <button onClick={handleOpenModal} className={styles.moreButton}>
            Show more
          </button>
        </div>
  
        {isModalOpen && (
          <CamperInfoModal camper={camper} onClose={handleCloseModal} />
        )}
      </article>
    </section>
  );
}
