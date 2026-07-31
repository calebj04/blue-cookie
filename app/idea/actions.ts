"use server";

import { createClient } from "@/lib/supabase/server";
import { Octokit } from "octokit";

export default async function start() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.error("Error fetching session:", error);
  }

  const octokit = new Octokit({
    auth: data.session?.provider_token,
  });
}
