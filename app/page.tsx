"use client";

import LightBulb from "@/components/LightBulb";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden p-4">
      <main className="flex flex-col items-center gap-4 text-center">
        <div className="flex items-center justify-center">
          {/* Icon */}
          <Link href="/idea">
            <LightBulb className="w-48 h-48 fill-white cursor-pointer drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] hover:scale-105 transition-all duration-200 active:scale-95" />
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl font-sans font-bold tracking-tight text-white sm:text-5xl">
            Welcome to{" "}
            <span className="bg-linear-to-r from-fuchsia-300 to-purple-500 bg-clip-text text-transparent">
              Cookie Stack!
            </span>
          </h1>
        </div>
      </main>
    </div>
  );
}
