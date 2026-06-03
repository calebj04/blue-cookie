"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from "@/components/providers/AuthProvider";

export default function IdeaButton({
  img,
  text,
}: {
  img: string;
  text: string;
}) {
  const router = useRouter();

  const supabase = createClient();

  const user = useAuth();

  const onClick = async () => {
    if (!user) {
      await supabase.auth.signInAnonymously();
    }
    if (text === "Random Idea") {
      router.push("idea/new?src=random");
    } else if (text === "Custom Idea") {
      router.push("idea/new?src=custom");
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
