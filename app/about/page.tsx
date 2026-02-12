import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About Silicality",
  description:
    "Ayush Sachan is the founder of Silicality, a contribution-first AI and technology ecosystem focused on building real-world products and platforms.",
  keywords: [
    "Ayush Sachan",
    "Founder of Silicality",
    "Silicality founder",
    "Indian startup founder",
    "AI engineer Ayush Sachan",
  ],
};

export default function AboutPage() {
  return (
    <>
      {/* Person Structured Data */}
      <Script
        id="ayush-sachan-person-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ayush Sachan",
            "url": "https://silicality.com/about",
            "jobTitle": "Founder of Silicality",
            "worksFor": {
              "@type": "Organization",
              "name": "Silicality",
              "url": "https://silicality.com"
            },
            "sameAs": [
              "https://www.linkedin.com/in/ayushsachan20",
              "https://www.instagram.com/thedeveloper.guy",
              "https://silicality.com"
            ]
          }),
        }}
      />

<section
  className="py-32 px-6"
  aria-labelledby="about-silicality"
>
  <div className="max-w-3xl mx-auto">
    {/* Company First */}
    <h1
      id="about-silicality"
      className="text-4xl font-semibold tracking-tight"
    >
      About Silicality
    </h1>

    <p className="mt-6 text-lg text-neutral-400">
      <strong>Silicality</strong> builds AI-powered products and developer
      programs focused on turning ideas into real-world impact.
    </p>

    <p className="mt-6 text-neutral-400">
      We work with startups, creators, and organizations to design and ship
      practical technology — not demos, not hype, but systems that actually
      get used.
    </p>

    <p className="mt-6 text-neutral-400">
      Alongside product development, Silicality runs learning programs and
      open initiatives that help students and early-stage developers grow
      through real execution, collaboration, and ownership.
    </p>

    {/* Founder Second */}
    <h2 className="mt-12 text-2xl font-semibold">
      Founder: Ayush Sachan
    </h2>

    <p className="mt-4 text-neutral-400">
      Ayush Sachan is the founder of Silicality, leading the platform with a
      focus on practical problem-solving, building useful technology, and
      creating opportunities for students to learn by doing.
    </p>

    <p className="mt-6 text-neutral-400">
      From a Tier-3 college to building real products and programs, his journey
      is driven by execution, continuous learning, and long-term impact —
      not shortcuts or surface-level success.
    </p>

    <p className="mt-10 text-sm text-neutral-500">
      Contact:{" "}
      <a
        href="mailto:silicality.dev@gmail.com"
        className="underline hover:text-neutral-300 transition"
      >
        silicality.dev@gmail.com
      </a>
    </p>
  </div>
</section>
    </>
  );
}
