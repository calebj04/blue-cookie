"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Idea() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center overflow-hidden p-4 transition-all duration-500 ease-out ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <main className="flex w-full items-center justify-around gap-4 text-center">
        <div className="flex w-full max-w-96 h-48 flex-col items-center justify-center border-2 rounded-2xl p-4 gap-4">
          <p className="text-4xl font-sans">Random Idea</p>
          <Image
            src="/dice.svg"
            alt="Dice"
            width={48}
            height={48}
            className="invert"
          />
        </div>
        <div className="flex w-full max-w-96 h-48 flex-col items-center justify-center border-2 rounded-2xl p-4 gap-4">
          <p className="text-4xl font-sans">Your Idea</p>
          <Image
            src="/tools.svg"
            alt="Tools"
            width={48}
            height={48}
            className="invert"
          />
        </div>
      </main>
    </div>
  );
}
