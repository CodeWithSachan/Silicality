import type { Metadata } from "next";
import MentorshipClient from "./MentorshipClient";

export const metadata: Metadata = {
  title: "Developer Mentorship & Career Guidance",
  description:
    "Get practical developer mentorship and career guidance from experienced builders. Learn through real-world insights, not generic advice.",
  keywords: [
    "developer mentorship",
    "career guidance for developers",
    "tech mentorship",
    "open source mentorship",
    "Silicality mentorship",
  ],
};

export default function MentorshipPage() {
  return <MentorshipClient />;
}
