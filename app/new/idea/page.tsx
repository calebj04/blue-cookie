"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

function generate(setLoading: (loading: boolean) => void) {
  setTimeout(() => {
    setLoading(false);
  }, 2000);
}

export default function Idea() {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const searchParams = useSearchParams();
  const mode = searchParams.get("q");

  useEffect(() => {
    if (mode === "random") {
      setLoading(true);
      //prompt gemini
      generate(setLoading);
    }
  }, []);

  useEffect(() => {
    if (mode === "custom" && input) {
      setLoading(true);
      //prompt gemini
      generate(setLoading);
    }
  }, [input]);

  if (mode !== "random" && mode !== "custom") {
    return (
      <main className="flex w-full items-center justify-around gap-4 text-center">
        no idea baby!
      </main>
    );
  }

  if (loading) {
    return (
      <main className="flex w-full items-center justify-around gap-4 text-center">
        loading idea baby!
      </main>
    );
  }

  if (mode === "custom" && input === "") {
    return (
      <main className="flex w-full items-center justify-around gap-4 text-center">
        <button
          onClick={() => setInput("something")}
          className="
            border border-gray-400
            bg-gray-100
            px-2 py-1
            rounded
            text-black
            hover:bg-gray-200
            active:bg-gray-300
  "
        >
          Click here to run `setInput("something")`
        </button>
      </main>
    );
  }

  return (
    <main className="flex w-full items-center justify-around gap-4 text-center">
      Your idea is beautiful!
    </main>
  );
}
