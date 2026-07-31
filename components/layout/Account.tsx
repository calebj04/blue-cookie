"use client";

import Image from "next/image";
import Link from "next/link";
import GitHub from "@/components/svgs/GitHub";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from "@/components/providers/AuthProvider";

async function signInWithGithub() {
  const supabase = createClient();
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });

  if (error) {
    console.error("GitHub sign-in error:", error);
  }
}

export default function Account() {
  const user = useAuth();

  if (user) {
    return (
      <Link
        className="cursor-pointer"
        href={`https://github.com/${user.user_metadata.user_name}`}
        target="_blank"
      >
        <Image
          src={user.user_metadata.avatar_url}
          alt="User Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </Link>
    );
  }
  return (
    <div
      onClick={signInWithGithub}
      className="bg-white hover:bg-gray-100 px-4 py-2 flex justify-between rounded-md text-lg text-black"
    >
      <GitHub className="w-6 h-6 mr-2" />
      Sign in with GitHub
    </div>
  );
}
