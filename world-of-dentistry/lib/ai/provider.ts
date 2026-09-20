import type { AIChatResponse } from "@/types";
import { generateResponse } from "./knowledge-base";

export interface AIProvider {
  chat(message: string, history?: { role: string; content: string }[]): Promise<AIChatResponse>;
}

class KnowledgeBaseProvider implements AIProvider {
  async chat(
    message: string,
    history: { role: string; content: string }[] = []
  ): Promise<AIChatResponse> {
    return generateResponse(
      message,
      history.map((h) => ({
        role: h.role as "user" | "assistant",
        content: h.content,
      }))
    );
  }
}

class OpenAIProvider implements AIProvider {
  private apiKey: string;
  private model: string;

  constructor(apiKey: string, model: string) {
    this.apiKey = apiKey;
    this.model = model;
  }

  async chat(
    message: string,
    history: { role: string; content: string }[] = []
  ): Promise<AIChatResponse> {
    const { generateResponse, getSystemPrompt, retrieveRelevantKnowledge } =
      await import("./knowledge-base");

    const relevant = retrieveRelevantKnowledge(message);
    const context = relevant.map((r) => r.content).join("\n");

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: this.model,
          messages: [
            {
              role: "system",
              content: `${getSystemPrompt()}\n\nVerified clinic information:\n${context}`,
            },
            ...history.slice(-10),
            { role: "user", content: message },
          ],
          max_tokens: 500,
          temperature: 0.3,
        }),
      });

      if (!response.ok) {
        return generateResponse(message, history.map((h) => ({
          role: h.role as "user" | "assistant",
          content: h.content,
        })));
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content;

      if (!content) {
        return generateResponse(message);
      }

      return {
        message: content,
        actions: [
          { type: "book_appointment", label: "Book Appointment" },
          { type: "call_clinic", label: "Call Clinic" },
        ],
      };
    } catch {
      return generateResponse(message);
    }
  }
}

export function getAIProvider(): AIProvider {
  const provider = process.env.AI_PROVIDER || "knowledge-base";
  const apiKey = process.env.AI_API_KEY;
  const model = process.env.AI_MODEL || "gpt-4o-mini";

  if (provider === "openai" && apiKey) {
    return new OpenAIProvider(apiKey, model);
  }

  return new KnowledgeBaseProvider();
}
