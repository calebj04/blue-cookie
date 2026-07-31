"use client";

import { useState, useEffect } from "react";
import MapJSON from "./MapJSON";
import generate from "@/lib/actions";

export default function Idea() {
  const [loading, setLoading] = useState<boolean>(false);
  const [idea, setIdea] = useState<string | undefined>(undefined);

  useEffect(() => {
    const prompt = sessionStorage.getItem("prompt");

    async function generateIdea() {
      if (prompt) {
        setLoading(true);
        const res = await generate(prompt);
        setLoading(false);
        setIdea(res);
      }
    }

    generateIdea();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center overflow-hidden p-4 animate-fade-in-up">
        Loading Baby...
      </div>
    );
  }

  if (idea) {
    const ideaJSON = JSON.parse(idea);

    return (
      <div className="flex flex-col min-h-screen items-center justify-center overflow-hidden p-4 animate-fade-in-up">
        <MapJSON idea={ideaJSON} />
      </div>
    );
  }
}
