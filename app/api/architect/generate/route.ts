import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@supabase/supabase-js";
import { ARCHITECT_SYSTEM_PROMPT, ARCHITECT_USER_PROMPT } from "@/lib/prompts";
import { Architecture } from "@/types/architect";

// ── Native Gemini SDK (bypasses OpenAI compat rate limits) ───────
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function generateSlug(name: string): string {
  return (
    name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .slice(0, 60) +
    "-" +
    Math.random().toString(36).slice(2, 7)
  );
}

async function generateDemoArchitecture(idea: string): Promise<Architecture> {
  return {
    product_name: idea.split(" ").slice(0, 3).join(" ") || "Your Product",
    overview: "This is a demo architecture generated as a fallback. The AI generation feature is temporarily unavailable due to quota limits.",
    features: [
      "Core feature inspired by your idea",
      "User authentication and authorization",
      "Real-time data synchronization",
      "Analytics and insights dashboard",
    ],
    tech_stack: {
      frontend: "React, TypeScript, Tailwind CSS",
      backend: "Node.js, Express, REST API",
      database: "PostgreSQL with Redis caching",
      ai_layer: "OpenAI / Gemini integration",
      infrastructure: "Vercel / Docker + Kubernetes",
      auth: "NextAuth.js or Auth0",
    },
    mvp_roadmap: [
      {
        phase: "Phase 1: Foundation (Weeks 1-4)",
        tasks: ["Setup project structure", "Design database schema", "Build authentication"],
      },
      {
        phase: "Phase 2: Core Features (Weeks 5-8)",
        tasks: ["Implement main features", "Build API endpoints", "Create frontend screens"],
      },
      {
        phase: "Phase 3: Polish & Launch (Weeks 9-12)",
        tasks: ["Testing and bug fixes", "Performance optimization", "Deployment setup"],
      },
    ],
    ui_screens: [
      "Landing Page",
      "Authentication (Login/Signup)",
      "Dashboard",
      "Settings",
      "Analytics",
    ],
    monetization: [
      {
        name: "Free",
        price: "$0",
        description: "Basic features with limited usage",
      },
      {
        name: "Pro",
        price: "$29/month",
        description: "Unlimited features with priority support",
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "Dedicated support and custom solutions",
      },
    ],
    startup_score: {
      overall: 75,
      market_opportunity: 80,
      competition: 70,
      monetization: 75,
      technical_complexity: 65,
    },
  };
}

export async function POST(req: NextRequest) {
  try {
    const { idea } = await req.json();

    if (!idea || typeof idea !== "string" || idea.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a more detailed idea (at least 10 characters)." },
        { status: 400 }
      );
    }

    // ── Call Gemini native SDK ───────────────────────────────────
    let architecture: Architecture;

    try {
      const prompt  = `${ARCHITECT_SYSTEM_PROMPT}\n\n${ARCHITECT_USER_PROMPT(idea.trim())}`;
      const result  = await model.generateContent(prompt);
      const raw     = result.response.text();
      const cleaned = raw.replace(/```json|```/g, "").trim();
      architecture  = JSON.parse(cleaned);

    } catch (apiErr) {
      console.error("Gemini API error:", apiErr);
      // Fallback to demo architecture on API failure
      console.warn("Falling back to demo architecture due to API error");
      architecture = await generateDemoArchitecture(idea);
    }

    // ── Save to Supabase ─────────────────────────────────────────
    const slug = generateSlug(architecture.product_name);

    try {
      const { data: project } = await supabase
        .from("projects")
        .insert({
          title:             architecture.product_name,
          idea:              idea.trim(),
          slug,
          architecture_json: architecture,
        })
        .select("id, slug")
        .single();

      return NextResponse.json({
        success:    true,
        architecture,
        project_id: project?.id ?? "local",
        slug:       project?.slug ?? slug,
      });

    } catch (dbErr) {
      console.error("DB error:", dbErr);
      return NextResponse.json({
        success:    true,
        architecture,
        project_id: "local",
        slug,
      });
    }

  } catch (err) {
    console.error("Architect generate error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}