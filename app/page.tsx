import type { Metadata } from "next";

import Hero from "@/components/home/Hero";
import WhatWeDo from "@/components/home/WhatWeDo";
import Services from "@/components/home/Services";
import Programs from "@/components/home/Programs";
import Mentorship from "@/components/home/Mentorship";
import Platform from "@/components/home/Platform";
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
      <WhatWeDo />
      <Services />
      <Programs />
      <Mentorship />
      <Platform />
      <Sponsors />
      <FinalCTA />
    </>
  );
}
