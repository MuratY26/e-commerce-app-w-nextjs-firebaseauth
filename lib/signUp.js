"use server"
import { signInWithEmailAndPassword } from "firebase/auth";
import { redirect } from "next/navigation";
import { auth } from "./firebase";

export default async function signUp(formData) {
    const email = formData.get("email") || "";
    const password = formData.get("password");
    await signInWithEmailAndPassword(auth, email, password);
    redirect("/");
}