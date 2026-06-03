"use client";

import { useEffect, useState } from "react";
import IdeaButton from "@/components/buttons/Idea";

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
        <IdeaButton img="/dice.svg" text="Random Idea" />
        <IdeaButton img="/tools.svg" text="Custom Idea" />
      </main>
    </div>
  );
}
