"use server"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { redirect } from "next/navigation";
import { auth } from "./firebase";

export default async function signIn(formData) {
    const email = formData.get("email") || "";
    const password = formData.get("password");
    await createUserWithEmailAndPassword(auth, email, password);
    redirect("/");
}