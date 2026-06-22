"use client";

import Arrow from "../svgs/Arrow";

export default function Search() {
  return (
    <>
      <form className="flex w-full gap-2 relative">
        <textarea
          placeholder="Describe your next project"
          rows={1}
          className="
          flex-1
          resize-none
          rounded-full
          bg-white
          text-black
          px-4
          py-3
          outline-none
        "
        />
        <Arrow className="absolute top-2.5 right-5 w-7" />
      </form>
    </>
  );
}
