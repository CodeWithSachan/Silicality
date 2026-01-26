import type { Metadata } from "next";
import ProgramsClient from "./ProgramsClient";

export const metadata: Metadata = {
  title: "Programs & Tech Events",
  description:
    "Explore Silicality’s tech programs, hackathons, quizzes, and community-driven initiatives focused on real-world execution.",
};

export default function ProgramsPage() {
  return <ProgramsClient />;
}
