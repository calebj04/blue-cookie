"use client";

import { useSearchParams } from "next/navigation";

export default function Idea() {
  const searchParams = useSearchParams();
  const idea = searchParams.get("idea");

  return (
    <main className="flex w-full items-center justify-around gap-4 text-center">
      new idea baby!
    </main>
  );
}
