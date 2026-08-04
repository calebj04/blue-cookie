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

  const owner = user.user_metadata.user_name;

  const repo = idea.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  await octokit.request("POST /user/repos", {
    name: repo,
    description: idea.description,
    homepage: "https://github.com",
    private: false,
    headers: {
      "X-GitHub-Api-Version": "2026-03-10",
    },
  });

  await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
    owner: owner,
    repo: repo,
    path: "README.md",
    message: "Add README.md",
    content: Buffer.from(idea.readme).toString("base64"),
    headers: {
      "X-GitHub-Api-Version": "2026-03-10",
    },
  });

  for (const [i, milestone] of idea.milestones.entries()) {
    await octokit.request("POST /repos/{owner}/{repo}/milestones", {
      owner,
      repo,
      title: milestone.name,
      headers: {
        "X-GitHub-Api-Version": "2026-03-10",
      },
    });

    for (const issue of milestone.issues) {
      await octokit.request("POST /repos/{owner}/{repo}/issues", {
        owner,
        repo,
        title: issue.name,
        body: issue.requirements,
        milestone: i + 1,
        headers: {
          "X-GitHub-Api-Version": "2026-03-10",
        },
      });
    }
  }
}
