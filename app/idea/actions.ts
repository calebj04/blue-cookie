"use server";

import { createClient } from "@/lib/supabase/server";
import { Octokit } from "octokit";
import { Idea } from "./types";

export default async function start({ idea }: { idea: Idea }) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.error("Error fetching session:", error);
  }

  const octokit = new Octokit({
    auth: data.session?.provider_token,
  });
}
