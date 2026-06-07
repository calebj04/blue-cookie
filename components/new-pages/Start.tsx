import { useState } from "react";
import { type Status } from "@/app/new/page";
import IdeaButton from "@/components/buttons/Idea";

export default function Start() {
  const [status, setStatus] = useState<Status>("start");
  const [idea, setIdea] = useState<string | undefined>("");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden p-4 transition-all duration-500 ease-out">
      <div className="flex w-full items-center justify-around gap-4 text-center">
        <IdeaButton
          img="/dice.svg"
          text="Random Idea"
          setStatus={setStatus}
          setIdea={setIdea}
        />
        <IdeaButton
          img="/tools.svg"
          text="Custom Idea"
          setStatus={setStatus}
          setIdea={setIdea}
        />
      </div>
    </div>
  );
}
