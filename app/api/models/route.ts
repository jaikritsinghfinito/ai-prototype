import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    models: [
      { id: "chatgpt", name: "ChatGPT 4.1" },
      { id: "gemini", name: "Google Gemini Pro" },
      { id: "claude", name: "Anthropic Claude 3" }
    ]
  });
}
