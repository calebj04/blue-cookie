"use server";

import { GoogleGenAI } from "@google/genai";

export default async function generate() {
  const ai = new GoogleGenAI({});
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: "Explain how AI works in a few words",
  });

  return response.text;
}
