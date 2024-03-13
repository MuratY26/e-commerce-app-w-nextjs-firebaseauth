"use client";
import styles from "./productpage.module.css";
import { HiShoppingBag } from "react-icons/hi";
import { useState, useEffect } from "react";

export default function AddtoCart({ product }) {

  const event = new Event("cartChange");

  let item = product;
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [index, setIndex] = useState(
    cartItems.findIndex((i) => i.id == item.id)
  );
  const [quantity, setQuantity] = useState(
    index === -1 ? 0 : cartItems[index]?.quantity
  );

  useEffect(() => {
    setIndex(cartItems.findIndex((i) => i.id == item.id));
  }, [cartItems]);

  function handleAddToCArt() {
    if (index !== -1) {
      cartItems[index].quantity++;
      setQuantity(cartItems[index].quantity);
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } else {
      item.quantity = 1;
      setQuantity(1);
      let newItems = [...cartItems];
      newItems.push(item);
      setCartItems(newItems);
      localStorage.setItem("cart", JSON.stringify(newItems));
      window.dispatchEvent(event);
    }
    
  }

  function removeFromCart() {
    setQuantity(0);
    if (index !== -1) {
      let newItems = [...cartItems];
      newItems.splice(index, 1);
      setCartItems(newItems);
      localStorage.setItem("cart", JSON.stringify(newItems));
    }
    window.dispatchEvent(event);
  }

  function handleDecreaseQuantity() {
    if (index !== -1) {
      if (cartItems[index].quantity > 1) {
        cartItems[index].quantity--;
        localStorage.setItem("cart", JSON.stringify(cartItems));
        setQuantity(cartItems[index].quantity);
      } else {
        removeFromCart();
      }
    }
  }

  return quantity ? (
    <div className={styles.addToCart}>
      <button onClick={handleAddToCArt} className={styles.addToCartButtons}>+</button> <p className="mx-3">{quantity}</p>
      <button onClick={handleDecreaseQuantity} className={styles.addToCartButtons}>-</button>
    </div>
  ) : (
    <button className={styles.addToCart} onClick={handleAddToCArt}>
      <HiShoppingBag className="pb-0.5" /> Add To Cart
    </button>
  );
}
