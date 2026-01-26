import type { Metadata } from "next";
import SponsorsClient from "./SponsorsClient";

export const metadata: Metadata = {
  title: "Sponsors & Partners",
  description:
    "Organizations and partners supporting Silicality’s programs, contributors, and open-source initiatives.",
};

export default function SponsorsPage() {
  return <SponsorsClient />;
}
