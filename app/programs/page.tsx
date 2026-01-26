import type { Metadata } from "next";
import ProgramsClient from "./ProgramsClient";

export const metadata: Metadata = {
  title: "Open Source Programs & Tech Events",
  description:
    "Explore Silicality’s open-source programs, seasonal contribution cycles, hackathons, and community-driven initiatives focused on real-world execution.",
  keywords: [
    "open source programs",
    "developer contribution programs",
    "hackathons",
    "tech events",
    "Spring of Silicality",
    "Silicality programs",
  ],
};

export default function ProgramsPage() {
  return <ProgramsClient />;
}
