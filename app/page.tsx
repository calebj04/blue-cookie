import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-4">
      {/* Ambient glow behind bulb */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center"></div>

      <main className="relative flex flex-col items-center gap-8 text-center">
        {/* Lightbulb icon */}
        <div className="relative flex items-center justify-center">
          {/* Icon */}
          <Image
            src="/light-bulb.svg"
            alt="Light bulb"
            width={160}
            height={160}
            className="filter-[invert(1)]"
          />
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Welcome to{" "}
            <span className="bg-linear-to-r from-fuchsia-300 to-purple-400 bg-clip-text text-transparent">
              Cookie Stack!
            </span>
          </h1>
        </div>
      </main>
    </div>
  );
}
