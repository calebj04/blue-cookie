import { Octokit } from "octokit";
import { createClient } from "@/lib/supabase/client";
import Idea from "./types";

export async function start({ idea }: { idea: Idea }) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User is not authenticated");
  }

  const token = window.localStorage.getItem("oauth_provider_token");

  const octokit = new Octokit({
    auth: token,
  });

  await octokit.request("POST /user/repos", {
    name: idea.title,
    description: idea.description,
    homepage: "https://github.com",
    private: false,
    headers: {
      "X-GitHub-Api-Version": "2026-03-10",
    },
  });

  for (const milestone of idea.milestones) {
    await octokit.request("POST /repos/{owner}/{repo}/milestones", {
      owner: user.user_metadata.user_name,
      repo: idea.title,
      title: milestone.issues.join(", "),
      headers: {
        "X-GitHub-Api-Version": "2026-03-10",
      },
    });
  }

  await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
    owner: user.user_metadata.user_name,
    repo: idea.title,
    path: ".github/README.md",
    message: "Add README.md",
    content: Buffer.from(idea.readme).toString("base64"),
    headers: {
      "X-GitHub-Api-Version": "2026-03-10",
    },
  });
}
