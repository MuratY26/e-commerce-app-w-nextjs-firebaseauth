"use client";
import styles from "./productPage.module.css";
import { HiShoppingBag } from "react-icons/hi";

export default function AddtoCart({ productId }) {
  function handleAddToCArt() {}

  return (
    <button className={styles.addToCart} onClick={handleAddToCArt}>
      <HiShoppingBag className="pb-0.5" /> Add To Cart
    </button>
  );
}
