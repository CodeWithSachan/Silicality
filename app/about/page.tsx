import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Silicality",
  description:
    "Learn more about Silicality — an AI and technology ecosystem building products, programs, and platforms with real-world impact.",
};

export default function AboutPage() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-semibold tracking-tight">
          About Silicality
        </h1>

        <p className="mt-6 text-lg text-neutral-400">
          Silicality is an AI and technology ecosystem focused on building
          real-world products, programs, and platforms.
        </p>

        <p className="mt-6 text-neutral-400">
          We work with startups, creators, and organizations to design and build
          AI-driven solutions, run learning-focused programs, and create
          opportunities for people to grow through real execution.
        </p>

        <p className="mt-6 text-neutral-400">
          Our approach emphasizes clarity, collaboration, and long-term impact
          over hype or shortcuts. Many of our initiatives are built openly and
          in public as we continue to learn and improve.
        </p>

        <p className="mt-10 text-sm text-neutral-500">
          Contact:{" "}
          <a
            href="mailto:silicality.dev@gmail.com"
            className="underline"
          >
            silicality.dev@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
