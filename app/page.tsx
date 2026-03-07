import type { Metadata } from "next";

import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Work from "@/components/home/Work";
import TechStack from "@/components/home/TechStack";
import Sponsors from "@/components/home/Sponsors";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Build, Learn & Contribute to Real Technology",
  description:
    "Silicality is a contribution-first technology ecosystem where developers build real projects, learn AI & web development, and grow through open-source programs and mentorship.",
  keywords: [
    "open source platform",
    "developer ecosystem",
    "learn open source",
    "AI and web development",
    "tech programs for students",
    "Silicality",
  ],
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Work/>
      <TechStack />
      <Sponsors />
      <FinalCTA />
    </>
  );
}
