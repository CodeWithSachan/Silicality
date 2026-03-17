import type { Metadata } from "next";

import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import Services from "@/components/home/Services";
import Work from "@/components/home/Work";
import AIToolsSection from "@/components/home/AIToolsSection";
import TechStack from "@/components/home/TechStack";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Silicality — AI Product Lab",
  description:
    "Silicality partners with founders and teams to design, build, and scale AI-powered digital products. Startup MVPs, AI tools, and web platforms — built fast and precisely.",
  keywords: [
    "AI product development",
    "startup MVP",
    "AI tools platform",
    "web development agency",
    "Next.js development",
    "Silicality",
  ],
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <div className="section-divider" />
      <Services />
      <div className="section-divider" />
      <Work />
      <AIToolsSection />
      <div className="section-divider" />
      <TechStack />
      <div className="section-divider" />
      <FinalCTA />
    </>
  );
}