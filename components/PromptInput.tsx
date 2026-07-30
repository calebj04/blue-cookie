"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from "@/components/providers/AuthProvider";
import Arrow from "./svgs/Arrow";

export default function PromptInput() {
  const [text, setText] = useState("");
  const router = useRouter();

  const supabase = createClient();
  const user = useAuth();

  async function handleSubmit(prompt: string) {
    if (!prompt) return;

    if (!user) {
      await supabase.auth.signInAnonymously();
    }

    const { data, error } = await supabase
      .from("prompts")
      .insert({ prompt: prompt })
      .select("id")
      .single();

    if (error) {
      console.log(error);
      return;
    }

    sessionStorage.setItem("promptId", data.id);

    router.push("/idea");
  }

  return (
    <>
      <form className="flex w-full gap-2 relative">
        <textarea
          placeholder="Describe your next project"
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubmit(text);
            }
          }}
          value={text}
          rows={1}
          className="
          flex-1
          resize-none
          rounded-full
          bg-white
          text-black
          text-xl
          px-4
          py-3
          outline-none
        "
        />
        <div className="absolute top-0 right-0 p-2 h-full aspect-square">
          <Arrow
            onClick={() => handleSubmit(text)}
            className="p-1.5 cursor-pointer rounded-full hover:bg-black/5 transition-transform"
          />
        </div>
      </form>
    </>
  );
}
