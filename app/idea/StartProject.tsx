import { createClient } from "@/lib/supabase/client";
import { Octokit } from "octokit";

export default async function beginProject() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.error("Error fetching session:", error);
  }

  const octokit = new Octokit({
    auth: data.session?.provider_token,
  });

  const { data: git } = await octokit.request("GET /user");

  console.log(git);
}
