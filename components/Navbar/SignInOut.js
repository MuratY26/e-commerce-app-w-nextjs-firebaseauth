"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged , signOut } from "firebase/auth";

export default function SignInOut() {
  const router = useRouter();
  async function handleSignOut() {

    await signOut(auth); 
    const response = await fetch("/api/logout", {method: "GET"});
    if( response.status === 200) {
      router.push("/")
    }
  }

  function useUserSession(initialUser) {
    const [user, setUser] = useState(initialUser);
    useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, authUser => {
                    setUser(authUser);
            });
            return () => {
                    unsubscribe();
            };
    }, []);

    useEffect(() => {
            onAuthStateChanged(auth, authUser => {
                    if (user === undefined) return;
                    if (user?.email !== authUser?.email) {
                            router.refresh();
                    }
            });
    }, [user]);

    return user;
}


  let user = useUserSession(auth.currentUser);
  if(user) {
    return (
      <button onClick={handleSignOut} className={`text-2xl navtext`}>
      Sign Out
    </button>
    )
  } else {
    return (
      <>
        <Link href="/sign-up" className={`mr-8 text-2xl navtext`}>
          Sign Up
        </Link>
        <Link href="/sign-in" className={` text-2xl navtext`}>
          Sign In
        </Link>
      </>
    );
  }
}

export { SignInOut };
