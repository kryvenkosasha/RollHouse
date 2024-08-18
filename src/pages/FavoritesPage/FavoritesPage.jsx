import React from "react";

import { useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Camper from "../../components/Camper/Camper";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <>
      <Navigation />
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((camper) => (
            <li key={camper._id}>
              <Camper camper={camper} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite campers.</p>
      )}
    </>
  );
}
