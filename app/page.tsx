"use client";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden p-4 animate-fade-in-up">
      <main className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-6xl font-bold tracking-tight text-white">
          Don't Let AI keep <br /> you from learning
        </h1>
        <p className="flex flex-col text-xl max-w-3xl text-white">
          Blue Cookie helps you develop your skills through project based
          learning. Describe a project or skill you want to learn and generate a
          blueprint to guide your journey.
        </p>
      </main>
    </div>
  );
}
