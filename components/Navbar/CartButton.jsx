"use client";
import Link from "next/link";
import { HiShoppingBag } from "react-icons/hi";

import { useState, useEffect } from "react";

export default function CartButton() {
 //client component olsa da server consoluna localStoragei bulamadim diyor?
 const [count, setCount] = useState(JSON.parse(localStorage.getItem("cart"))?.length || 0);

 useEffect(() =>{
    function handleCountChange() {
        setCount(JSON.parse(localStorage.getItem("cart"))?.length || 0);
    }

    window.addEventListener("cartChange", handleCountChange)

    return () => {window.removeEventListener("cartChange", handleCountChange)};
 }, [])

  return (
    <Link href="/cart" className={` text-2xl navtext relative`}>
      <HiShoppingBag className="mr-10 text-4xl " />{" "}
      <span className="cartCount">{count > 9 ? "+9" : count}</span>
    </Link>
  );
}
