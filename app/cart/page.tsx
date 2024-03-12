"use client"
import { useState, useEffect } from "react"

export default function({}) {

    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart") || "[]"))

    return (
        <div>
            <div>
                <ul>
                    {cartItems && cartItems.map((item) => {
                        return (
                            <li>{item}</li>
                        )
                    })}
                </ul>
            </div>

            <button id="checkOut">Check Out</button>
        </div>
    )
}