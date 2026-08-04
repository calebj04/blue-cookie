"use server";

import { GoogleGenAI } from "@google/genai";
import { createClient } from "@/lib/supabase/server";
import { Octokit } from "octokit";
import Idea from "./types";
import { prompt } from "@/lib/prompts";

export async function generate(input: string) {
  const ai = new GoogleGenAI({});
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash-lite",
    contents: input + prompt,
  });

  await uploadToSupabase(response.text);

  return response.text;
}

async function uploadToSupabase(response: string | undefined) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User is not authenticated");
  }

  if (response) {
    const { error } = await supabase
      .from("ideas")
      .insert({ user_id: user.id, content: response });

    if (error) {
      console.error(error);
    }
  }
}

export async function start({ idea }: { idea: Idea }) {
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
}
