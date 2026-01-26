import type { Metadata } from "next";
import ServicesClient from "./services-client";

export const metadata: Metadata = {
  title: "AI, Web & App Development Services",
  description:
    "Explore Silicality’s AI solutions, web & app development, and design services built for startups, creators, and organizations.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
