"use client";
import { useState, useEffect } from "react";
import CartItem from "./Items";
import Link from "next/link";

export default function Cart ({}) {
  const [cartItems, setCartItems] = useState(
    []
  );
  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);
  
  let totalPrice = cartItems.reduce((prev : any,curr: any) => prev+(curr.price*curr.quantity), 0).toFixed(2);
  return (
    <div className="flex mx-auto my-12 w-3/4 h-5/6 items-start justify-between">
      <div className="w-3/4">
        {cartItems.length ? (
          <ul>
            {cartItems.map((item: any) => {
              return <CartItem item={item} setCartItems={setCartItems} key={item.id} />;
            })}
          </ul>
        ) : (
          <div>You have no items added to cart</div>
        )}
      </div>

      <div className="border border-black rounded-md p-2 pt-4 pb-8 w-1/6 min-w-max">
        <p>Total Price : {totalPrice} $</p>
        <Link  href={`/checkout?totalPrice=${totalPrice}`} id="checkOut" className="inline-block cursor-pointer border-2 border-red-800 p-2 rounded-lg bg-red-700 text-gray-50 mt-4">
          Check Out
        </Link>
      </div>
    </div>
  );
}
