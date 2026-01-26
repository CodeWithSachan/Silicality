"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 24,
    x: 0, // 👈 remove horizontal motion for mobile friendliness
  }),
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Services() {
  const services = [
    {
      title: "AI & Automation",
      desc: "Custom AI solutions that integrate into real products and workflows, focused on usability and impact.",
      points: [
        "Custom model training & fine-tuning",
        "AI assistants & chatbots",
        "Automation & internal tools",
      ],
    },
    {
      title: "Web & App Development",
      desc: "Modern, scalable applications built with performance, maintainability, and growth in mind.",
      points: [
        "Web platforms & dashboards",
        "Mobile app development",
        "Startup MVPs",
      ],
      featured: true,
    },
    {
      title: "Design & Branding",
      desc: "Clear, functional design systems that support strong products and consistent communication.",
      points: [
        "UI/UX design",
        "Brand identity & logos",
        "Pitch decks & creatives",
      ],
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(236,72,153,0.08),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(139,92,246,0.08),transparent_40%)]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl text-center sm:text-left"
        >
          <span className="inline-flex mb-4 px-4 py-1 text-xs rounded-full border border-neutral-700 text-neutral-300">
            Silicality Labs
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Building real products with AI & technology
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-neutral-400">
            We help startups, creators, and organizations turn ideas into
            scalable, production-ready systems — without hype or shortcuts.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 grid gap-5 sm:gap-6 md:grid-cols-3"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              whileHover={{ y: -6 }} // 👈 lighter hover
              className={`
                relative rounded-2xl border backdrop-blur-xl transition
                ${
                  service.featured
                    ? "border-pink-500/40 bg-neutral-900/70 shadow-[0_0_40px_-20px_rgba(236,72,153,0.25)]"
                    : "border-neutral-800 bg-neutral-900/40"
                }
                p-5 sm:p-8
              `}
            >
              {/* Glow overlay (desktop-first) */}
              <div className="
                pointer-events-none absolute inset-0 rounded-2xl
                opacity-0 sm:hover:opacity-100 transition
                bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.12),transparent_50%)]
              " />

              <h3 className="text-base sm:text-xl font-medium">
                {service.title}
              </h3>

              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-400">
                {service.desc}
              </p>

              <ul className="mt-5 sm:mt-6 space-y-2 text-sm text-neutral-300">
                {service.points.map((point) => (
                  <li key={point}>— {point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12 sm:mt-20 text-center sm:text-left"
        >
          <Link
            href="/contact"
            className="
              inline-flex w-full sm:w-auto justify-center items-center gap-2
              px-7 py-3 rounded-full
              bg-white text-black font-medium
              hover:bg-neutral-200 transition
            "
          >
            Start a Project →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
