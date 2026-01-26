import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: {
    default: "Silicality — AI & Technology Ecosystem",
    template: "%s | Silicality",
  },
  description:
    "Silicality is an AI & technology ecosystem offering AI solutions, web & app development, design services, programs, and a contribution-first platform.",
  keywords: [
    "AI development",
    "AI agency",
    "web development",
    "app development",
    "tech services",
    "AI solutions",
    "Silicality",
  ],
  metadataBase: new URL("https://silicality.com"),

  openGraph: {
    title: "Silicality — AI & Technology Ecosystem",
    description:
      "AI solutions, web & app development, design services, programs, and a future-ready tech platform.",
    url: "https://silicality.com",
    siteName: "Silicality",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Silicality — AI & Technology Ecosystem",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Silicality — AI & Technology Ecosystem",
    description:
      "AI solutions, web & app development, design services, and tech programs.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
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
