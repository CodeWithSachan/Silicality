// import "./globals.css";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
// import type { Metadata } from "next";
// import Script from "next/script";

// export const metadata: Metadata = {
//   metadataBase: new URL("https://silicality.com"),

//   title: {
//     default: "Silicality — Build, Learn & Contribute to Real Technology",
//     template: "%s | Silicality",
//   },

//   description:
//     "Silicality is a contribution-first technology ecosystem where developers build real projects, learn AI & web technologies, and grow through programs, services, and mentorship.",

//       icons: {
//     icon: "/favicon.ico",
//     apple: "/apple-icon.png",
//     },

//   keywords: [
//     "open source contributions",
//     "developer platform",
//     "AI development",
//     "web development",
//     "technology programs",
//     "student developers",
//     "Silicality",
//   ],

//   authors: [{ name: "Ayush Sachan" }],
//   creator: "Ayush Sachan",

//   openGraph: {
//     title: "Silicality — Build, Learn & Contribute",
//     description:
//       "A contribution-first technology ecosystem to build real projects, learn AI & web development, and grow with programs and mentorship.",
//     url: "https://silicality.com",
//     siteName: "Silicality",
//     images: [
//       {
//         url: "/logo.png",
//         width: 1200,
//         height: 630,
//         alt: "Silicality technology ecosystem",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Silicality — Build, Learn & Contribute",
//     description:
//       "Build real projects, learn modern technologies, and grow with Silicality’s programs and platform.",
//     images: ["/og.png"],
//   },

//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//     },
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Organization + Founder Structured Data */}
//         <Script
//           id="silicality-organization-schema"
//           type="application/ld+json"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Organization",
//               "name": "Silicality",
//               "url": "https://silicality.com",
//               "logo": "https://silicality.com/logo.png",
//               "founder": {
//                 "@type": "Person",
//                 "name": "Ayush Sachan",
//                 "jobTitle": "Founder",
//                 "url": "https://silicality.com/about",
//                 "sameAs": [
//                   "https://www.linkedin.com/in/ayushsachan20",
//                   "https://www.instagram.com/thedeveloper.guy"
//                 ]
//               },
//               "sameAs": [
//                 "https://www.linkedin.com/company/silicality",
//                 "https://www.instagram.com/silicality",
//                 "https://spring.silicality.com"
//               ]
//             }),
//           }}
//         />
//         {/* Google Analytics */}
// <Script
//   src={`https://www.googletagmanager.com/gtag/js?id=G-D0XFNJGK17`}
//   strategy="afterInteractive"
// />

// <Script
//   id="google-analytics"
//   strategy="afterInteractive"
//   dangerouslySetInnerHTML={{
//     __html: `
//       window.dataLayer = window.dataLayer || [];
//       function gtag(){dataLayer.push(arguments);}
//       gtag('js', new Date());
//       gtag('config', 'G-D0XFNJGK17', {
//         page_path: window.location.pathname,
//       });
//     `,
//   }}
// />

//       </head>

//       <body className="bg-black text-white antialiased">
//         <Navbar />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }


// import "./globals.css";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
// import type { Metadata } from "next";
// import Script from "next/script";

// export const metadata: Metadata = {
//   metadataBase: new URL("https://silicality.com"),

//   title: {
//     default: "Silicality — Build, Learn & Contribute to Real Technology",
//     template: "%s | Silicality",
//   },

//   description:
//     "Silicality builds AI-powered products and developer programs, helping startups, creators, and organizations turn ideas into real-world impact.",

//   icons: {
//     icon: "/favicon.ico",
//     apple: "/apple-icon.png",
//   },

//   keywords: [
//     "AI products",
//     "developer programs",
//     "technology startup",
//     "open source",
//     "Silicality",
//   ],

//   authors: [{ name: "Ayush Sachan" }],
//   creator: "Ayush Sachan",

//   openGraph: {
//     title: "Silicality — Build Real AI Products",
//     description:
//       "AI-powered products and developer programs built for real-world impact.",
//     url: "https://silicality.com",
//     siteName: "Silicality",
//     images: [
//       {
//         url: "/logo.png",
//         width: 1200,
//         height: 630,
//         alt: "Silicality",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Silicality — Build Real AI Products",
//     description:
//       "AI-powered products and developer programs for real-world impact.",
//     images: ["/og.png"],
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* ---------- Google Analytics (SINGLY (SAFE) ---------- */}
//         <Script
//           src="https://www.googletagmanager.com/gtag/js?id=G-D0XFNJGK17"
//           strategy="afterInteractive"
//         />

//         <Script
//           id="google-analytics"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'G-D0XFNJGK17', {
//                 page_path: window.location.pathname,
//               });
//             `,
//           }}
//         />

//         {/* ---------- Organization + Founder Schema ---------- */}
//         <Script
//           id="silicality-organization-schema"
//           type="application/ld+json"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Organization",
//               name: "Silicality",
//               url: "https://silicality.com",
//               logo: "https://silicality.com/logo.png",
//               founder: {
//                 "@type": "Person",
//                 name: "Ayush Sachan",
//                 jobTitle: "Founder",
//                 url: "https://silicality.com/about",
//                 sameAs: [
//                   "https://www.linkedin.com/in/ayushsachan20",
//                   "https://www.instagram.com/thedeveloper.guy",
//                 ],
//               },
//               sameAs: [
//                 "https://www.linkedin.com/company/silicality",
//                 "https://www.instagram.com/silicality",
//                 "https://spring.silicality.com",
//               ],
//             }),
//           }}
//         />
//       </head>

//       <body className="bg-black text-white antialiased">
//         <Navbar />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }


import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://silicality.com"),

  title: {
    default: "Silicality — Build, Learn & Create Real AI Products",
    template: "%s | Silicality",
  },

  description:
    "Silicality builds AI-powered products and developer programs. We help startups, creators, and organizations turn ideas into real-world impact.",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  keywords: [
    "Silicality",
    "AI products",
    "developer programs",
    "technology platform",
    "startup ecosystem",
    "open source",
    "AI development",
  ],

  authors: [{ name: "Ayush Sachan" }],
  creator: "Ayush Sachan",

  openGraph: {
    title: "Silicality — Build Real AI Products",
    description:
      "An AI-powered platform building real products, programs, and developer ecosystems for long-term impact.",
    url: "https://silicality.com",
    siteName: "Silicality",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Silicality logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Silicality — Build Real AI Products",
    description:
      "Building AI-powered products and programs that turn ideas into impact.",
    images: ["/logo.png"],
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
      <head>
        {/* ===================== Google Tag Manager ===================== */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WH4VXP84');
            `,
          }}
        />

        {/* ===================== Google Analytics (GA4) ===================== */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D0XFNJGK17"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-D0XFNJGK17', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* ===================== Structured Data ===================== */}
        <Script
          id="silicality-organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Silicality",
              url: "https://silicality.com",
              logo: "https://silicality.com/logo.png",
              founder: {
                "@type": "Person",
                name: "Ayush Sachan",
                jobTitle: "Founder",
                url: "https://silicality.com/about",
                sameAs: [
                  "https://www.linkedin.com/in/ayushsachan20",
                  "https://www.instagram.com/thedeveloper.guy",
                ],
              },
              sameAs: [
                "https://www.linkedin.com/company/silicality",
                "https://www.instagram.com/silicality",
                "https://spring.silicality.com",
              ],
            }),
          }}
        />
      </head>

      <body className="bg-black text-white antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WH4VXP84"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
