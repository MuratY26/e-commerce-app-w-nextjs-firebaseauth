"use client";
import { useState, useEffect } from "react";
import styles from "./productPage.module.css";
import { HiOutlineHeart } from "react-icons/hi";
import { HiHeart } from "react-icons/hi";

export default function AddToFav({ productId }) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "");
    if (Array.isArray(favorites) && favorites.includes(productId)) {
      setIsFav(true);
    }
  }, []);

  function handleFav() {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "");
    if (!Array.isArray(favorites)) {
      favorites = [];
    }

    if (isFav) {
      const index = favorites.indexOf(productId);
      if (index !== -1) {
        favorites.splice(index, 1);
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }
      setIsFav(false);
    } else {
      if (!favorites.includes(productId)) {
        favorites.push(productId);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        setIsFav(true);
      }
    }
  }

  return (
    <button className={styles.addToFav} onClick={handleFav}>
      {isFav ? (
        <HiHeart className="text-3xl" />
      ) : (
        <HiOutlineHeart className="text-3xl" />
      )}
    </button>
  );
}
