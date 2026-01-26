// import type { Metadata } from "next";
// import ServicesClient from "./services-client";

// export const metadata: Metadata = {
//   title: "AI, Web & App Development Services",
//   description:
//     "Explore Silicality’s AI solutions, web & app development, and design services built for startups, creators, and organizations.",
// };

// export default function ServicesPage() {
//   return <ServicesClient />;
// }
import type { Metadata } from "next";
import ServicesClient from "./services-client";

export const metadata: Metadata = {
  title: "AI, Web & App Development Services",
  description:
    "Explore Silicality’s AI solutions, web & app development, and design services built for startups, creators, and organizations.",
  keywords: [
    "AI development services",
    "web development services",
    "app development services",
    "startup technology services",
    "Silicality services",
  ],
};

export default function ServicesPage() {
  return <ServicesClient />;
}
