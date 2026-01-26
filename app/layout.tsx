import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://silicality.com"),

  title: {
    default: "Silicality — Build, Learn & Contribute to Real Technology",
    template: "%s | Silicality",
  },

  description:
    "Silicality is a contribution-first technology ecosystem where developers build real projects, learn AI & web technologies, and grow through programs, services, and mentorship.",

  keywords: [
    "open source contributions",
    "developer platform",
    "AI development",
    "web development",
    "technology programs",
    "student developers",
    "Silicality",
  ],

  authors: [{ name: "Silicality Team" }],
  creator: "Silicality",

  openGraph: {
    title: "Silicality — Build, Learn & Contribute",
    description:
      "A contribution-first technology ecosystem to build real projects, learn AI & web development, and grow with programs and mentorship.",
    url: "https://silicality.com",
    siteName: "Silicality",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Silicality technology ecosystem",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Silicality — Build, Learn & Contribute",
    description:
      "Build real projects, learn modern technologies, and grow with Silicality’s programs and platform.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
