"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Arrow from "../svgs/Arrow";

export default function Search() {
  const [text, setText] = useState("");
  const router = useRouter();

  function handleSubmit(text: string) {
    alert(text);
    router.push("/new");
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
        <Arrow
          onClick={() => handleSubmit(text)}
          className="absolute top-1/5 right-5 w-7 cursor-pointer hover:scale-110 transition-transform active:scale-90"
        />
      </form>
    </>
  );
}
