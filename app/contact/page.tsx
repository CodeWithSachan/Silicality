import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact & Work With Us",
  description:
    "Start a project with Silicality. Get in touch for AI solutions, development services, partnerships, and collaborations.",
};

export default function ContactPage() {
  return <ContactClient />;
}
