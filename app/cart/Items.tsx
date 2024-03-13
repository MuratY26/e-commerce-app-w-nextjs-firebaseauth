import Image from "next/image";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { useState } from "react";
interface itemInterface {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string,
    quantity: number
}
export default function CartItem ( {item, setCartItems}: {item : itemInterface, setCartItems: Function} ) {
    const [quantity, setQuantity] = useState(item.quantity);
    const event = new Event("cartChange");
    const handleRemove = () => {
        let items = JSON.parse(localStorage.getItem("cart") || "[]")
        items = items.filter((currentItem : any) => currentItem.id !== item.id);
        localStorage.setItem("cart", JSON.stringify(items));
        setCartItems(items);
        window.dispatchEvent(event);
    };

    const handleDecrease = () => {
        window.dispatchEvent(event);
        if(quantity <= 1) {
            handleRemove();
            return;
        }
        const items = JSON.parse(localStorage.getItem("cart") || "[]");
        items.forEach((currentItem : any) => {
            if(currentItem.id !== item.id) {
                return;
            }
            else {
                currentItem.quantity = currentItem.quantity - 1;
                setQuantity(currentItem.quantity);
            }
        });
        localStorage.setItem("cart", JSON.stringify(items));
        setCartItems(items);
    };

    const handleIncrease = () => {
        if(quantity > 999) {
            return;
        }

        const items = JSON.parse(localStorage.getItem("cart") || "[]");
        items.forEach((currentItem : any) => {
            if(currentItem.id !== item.id) {
                return;
            }
            else {
                currentItem.quantity = currentItem.quantity + 1;
                setQuantity(currentItem.quantity);
            }
        });
        localStorage.setItem("cart", JSON.stringify(items));
        setCartItems(items);
    }

    return (
        <li className="border-2 border-gray-800 rounded-xl px-16 flex flex-row justify-between items-center mb-2 p-2">
           <Image src={item.image} alt={item.description} width={75} height={75} className="border border-black"/>
           <p className="w-2/6">{item.title}</p> 
           <p className="w-3/12 text-sm">{item.price}$ x <CiSquareMinus onClick={handleDecrease} className="inline text-xl cursor-pointer text-red-800" /> {quantity} <CiSquarePlus onClick={handleIncrease} className="inline text-xl cursor-pointer text-red-800"/> = </p>
            <p className="font-bold">{(quantity*item.price).toFixed(2)} $</p>
           <button onClick={handleRemove}className="border border-black rounded-full w-8 h-8">X</button>
        </li>
    )
}