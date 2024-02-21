import Link from "next/link";
import Image from "next/image";
import { HiShoppingBag } from "react-icons/hi";
import "./Navbar.css";
import { SignInOut } from "./SignInOut";
import { auth } from "@/lib/firebase";

function Navbar({ count }) {

  return (
    <nav className=" border-gray-200 bg-stone-900 flex justify-between items-center">
      <div className="flex items-center justify-center">
        <Link href="/">
          <Image src="/logos.png" width={250} height={200} alt="logo" />
        </Link>
        <Link
          href="/category/[category]"
          as="/category/men"
          className="ml-10 text-2xl navtext"
        >
          MEN
        </Link>
        <Link
          href="/category/[category]"
          as="/category/women"
          className={`ml-10 text-2xl navtext`}
        >
          WOMEN
        </Link>
        <Link
          href="/category/[category]"
          as="/category/kids"
          className={`ml-10 text-2xl navtext`}
        >
          KIDS
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <div className="border-2 border-solid border-red-200 rounded-lg mr-4 px-4 py-1">
          <SignInOut/>
        </div>
        <Link href="" className={` text-2xl navtext relative`}>
          <HiShoppingBag className="mr-10 text-4xl " />{" "}
          <span className="cartCount">{count > 9 ? "+9" : count}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
