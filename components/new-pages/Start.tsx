import { useState } from "react";
import IdeaButton from "@/components/buttons/Idea";

export default function Start() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden p-4 transition-all duration-500 ease-out">
      <div className="flex w-full items-center justify-around gap-4 text-center">
        <IdeaButton img="/dice.svg" text="Random Idea" />
        <IdeaButton img="/tools.svg" text="Custom Idea" />
      </div>
    </div>
  );
}
