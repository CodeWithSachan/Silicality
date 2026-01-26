import type { Metadata } from "next";
import PlatformClient from "./PlatformClient";

export const metadata: Metadata = {
  title: "Contribution Platform",
  description:
    "The Silicality contribution-first platform helps developers grow through real-world projects, mentorship, and open collaboration.",
  keywords: [
    "contribution platform",
    "open source platform",
    "developer ecosystem",
    "learn by building",
    "Silicality platform",
  ],
};

export default function PlatformPage() {
  return <PlatformClient />;
}
