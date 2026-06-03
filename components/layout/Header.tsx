"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/components/providers/AuthProvider";

export default function Header() {
  const user = useAuth();

  return (
    <header className="flex w-full justify-between p-4 font-sans text-xl">
      <div className="flex gap-4 items-center">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={24}
            height={24}
            className="invert"
          />
        </Link>
        <nav className="flex gap-4">
          <Link href="/new">New Idea</Link>
        </nav>
        <nav className="flex gap-4">
          <Link href="/saved">Saved Ideas</Link>
        </nav>
      </div>
      <div className="flex gap-4 items-center">
        {user ? (
          <>Welcome {user.id}</>
        ) : (
          <>
            <div>Sign In</div>
            <div className="border rounded-xl py-1 px-2">Sign Up</div>
          </>
        )}
      </div>
    </header>
  );
}
