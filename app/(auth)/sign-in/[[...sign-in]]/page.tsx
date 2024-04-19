"use client"
import { SignIn } from "@clerk/nextjs";
import NavBar from "@/app/NavBar/navBar";

export default function Page() {
  return (

    <div className="flex min-h-screen flex-col items-center justify-center">
      <NavBar />
      <SignIn />
    </div>
  );
}