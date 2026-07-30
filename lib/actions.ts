"use server";

import { GoogleGenAI } from "@google/genai";
import { prompt } from "./prompts";

export default async function generate({ input }: { input: string }) {
  const ai = new GoogleGenAI({});
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash-lite",
    contents: input + prompt,
  });

  return response.text;
}
