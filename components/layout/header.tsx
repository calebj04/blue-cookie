"use client";

import Link from "next/link";
import Logo from "@/components/svgs/Logo";
import GitHub from "@/components/svgs/GitHub";
import { createClient } from "@/lib/supabase/client";

async function signInWithGithub() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });

  console.log("GitHub sign-in data:", data);
  if (error) {
    console.error("GitHub sign-in error:", error);
  }
}

export default function Header() {
  return (
    <div className="z-10 absolute flex justify-between items-center cursor-pointer top-5 left-5 right-5">
      <Link href="/">
        <Logo />
      </Link>
      <div
        onClick={signInWithGithub}
        className="bg-white hover:bg-gray-100 px-4 py-2 flex justify-between rounded-md text-lg text-black"
      >
        <GitHub className="w-6 h-6 mr-2" />
        Sign in with GitHub
      </div>
    </div>
  );
}
