"use client";

import { motion } from "framer-motion";

export default function PlatformClient() {
  return (
    <section
      className="py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden"
      aria-labelledby="platform-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-neutral-900/50 to-black" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span
            className="inline-block mb-5 px-4 py-1 text-xs rounded-full
            border border-yellow-500/40 text-yellow-400"
          >
            Building in Public
          </span>

          <h1
            id="platform-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight"
          >
            The Silicality Contribution Platform
          </h1>

          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            A contribution-first platform built to help developers grow through
            real-world projects, mentorship, and open collaboration.
          </p>
        </motion.div>

        {/* Core principles */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Real Contributions",
              desc: "Work on meaningful projects that solve real problems.",
            },
            {
              title: "Mentor Guided",
              desc: "Learn with feedback from experienced builders.",
            },
            {
              title: "Open by Design",
              desc: "Built transparently with the community in public.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6"
            >
              <h2 className="text-lg font-medium">{item.title}</h2>
              <p className="mt-3 text-sm text-neutral-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
