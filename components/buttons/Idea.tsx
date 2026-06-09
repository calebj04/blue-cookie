"use client";

import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from "@/components/providers/AuthProvider";
import { useIdea } from "../providers/IdeaProvider";
import { useStatus } from "../providers/StatusProvider";
import generate from "@/app/new/actions";

export default function IdeaButton({
  img,
  text,
}: {
  img: string;
  text: string;
}) {
  const supabase = createClient();

  const user = useAuth();

  const { setIdea } = useIdea();
  const { setStatus } = useStatus();

  const onClick = async () => {
    if (!user) {
      await supabase.auth.signInAnonymously();
    }

    if (text === "Random Idea") {
      setStatus("loading");
      const res = await generate();
      if (res) {
        setIdea(res);
      } else {
        setStatus("error");
      }
      setStatus("result");
      console.log(res);
    } else if (text === "Custom Idea") {
      if (setStatus) {
        setStatus("loading");
      }
    }
  };

  return (
    <div
      onClick={onClick}
      className="flex w-full max-w-96 h-48 flex-col items-center justify-center border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl shadow-fuchsia-500/20 hover:drop-shadow-2xl hover:shadow-fuchsia-500/50 rounded-2xl p-4 gap-4 hover:scale-105 transition-all duration-500 active:scale-95 cursor-pointer"
    >
      <p className="text-4xl font-sans">{text}</p>
      <Image
        src={img}
        alt={img.split("/")[1].split(".")[0]}
        width={48}
        height={48}
        className="invert"
      />
    </div>
  );
}
