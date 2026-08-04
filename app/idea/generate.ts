"use server";

import { GoogleGenAI } from "@google/genai";
import { createClient } from "@/lib/supabase/server";
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
