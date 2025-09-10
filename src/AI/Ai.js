import React from "react";
import { GoogleGenAI } from "@google/genai";

  const key = import.meta.env.VITE_API_KEY;
  const ai = new GoogleGenAI({apiKey: key });

  async function run(prompt) {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    console.log(response.text); // output is often markdown
    return response.text
  }

 export default run;
 

