"use client";

import LightBulb from "@/components/buttons/LightBulb";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden p-4 animate-fade-in-up">
      <main className="flex flex-col items-center gap-4 text-center">
        <div className="flex items-center justify-center">
          <LightBulb />
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
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
