'use client'
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/firebase/AuthProvider";

export default function Home() {
  const { user } = useContext(AuthContext)
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-4 text-6xl font-bold">Firebase Auth with Next.js</h1>
      <div>Currently {user ? 'Logged in' : 'Logged out'}</div>
      <div className="mt-8 flex space-x-5">
        <Link href="/signin">Sign In</Link>
        <Link href="/signup">Sign Up</Link>
      </div>
    </main>
  );
}
