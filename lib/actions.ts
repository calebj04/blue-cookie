import { createClient } from "@/lib/supabase/client";

export async function signInWithGithub() {
  const supabase = createClient();
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      scopes: "repo",
    },
  });

  if (error) {
    console.error("GitHub sign-in error:", error);
  }
}
