"use server";

import { Octokit } from "octokit";
import Idea from "./types";
import { createClient } from "@/lib/supabase/server";

const API_VERSION_HEADERS = {
  "X-GitHub-Api-Version": "2026-03-10",
} as const;

export async function start({ idea }: { idea: Idea }, token: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User is not authenticated");
  }

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
    headers: API_VERSION_HEADERS,
  });

  await Promise.all([
    octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
      owner,
      repo,
      path: "README.md",
      message: "Add README.md",
      content: Buffer.from(idea.readme).toString("base64"),
      headers: API_VERSION_HEADERS,
    }),

    ...idea.milestones.map(async (milestone) => {
      const { data: gitMilestone } = await octokit.request(
        "POST /repos/{owner}/{repo}/milestones",
        {
          owner,
          repo,
          title: milestone.name,
          headers: API_VERSION_HEADERS,
        },
      );

      await Promise.all(
        milestone.issues.map((issue) =>
          octokit.request("POST /repos/{owner}/{repo}/issues", {
            owner,
            repo,
            title: issue.name,
            body: issue.requirements,
            milestone: gitMilestone.number,
            headers: API_VERSION_HEADERS,
          }),
        ),
      );
    }),
  ]);
}
