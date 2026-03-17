import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { PROMPTS } from "@/lib/prompts";

export async function POST(req: NextRequest) {
  try {
    const { idea } = await req.json();

    if (!idea || idea.trim().length < 10) {
      return NextResponse.json(
        { error: "Please describe your idea in more detail." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        marketPotential: "High demand",
        competition:     "Medium — manageable",
        feasibility:     "High — achievable",
        buildTime:       "6–8 weeks MVP",
        verdict:         "Worth pursuing ✓",
      });
    }

    // ── Native Gemini SDK ────────────────────────────────────────
    const genAI  = new GoogleGenerativeAI(apiKey);
    const model  = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt  = `You are a startup analyst. Respond only with valid JSON, no markdown.\n\n${PROMPTS.validateIdea(idea.trim())}`;
    const result  = await model.generateContent(prompt);
    const raw     = result.response.text();
    const cleaned = raw.replace(/```json|```/g, "").trim();
    const parsed  = JSON.parse(cleaned);

    return NextResponse.json(parsed);

  } catch {
    // Fallback demo data for any errors
    return NextResponse.json({
      marketPotential: "High demand",
      competition:     "Medium — manageable",
      feasibility:     "High — achievable",
      buildTime:       "6–8 weeks MVP",
      verdict:         "Worth pursuing ✓",
    });
  }
}