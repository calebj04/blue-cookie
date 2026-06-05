import { useState } from "react";
import IdeaButton from "@/components/buttons/Idea";

export type Status = "input" | "loading" | "result" | "error" | "";

export default function Idea() {
  const [status, setStatus] = useState<Status>("");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden p-4 transition-all duration-500 ease-out">
      <main className="flex w-full items-center justify-around gap-4 text-center">
        <IdeaButton img="/dice.svg" text="Random Idea" setStatus={setStatus} />
        <IdeaButton img="/tools.svg" text="Custom Idea" setStatus={setStatus} />
      </main>
    </div>
  );
}
