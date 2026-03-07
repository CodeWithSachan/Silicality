"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-40 px-6 bg-[#0B0E14]">

      {/* subtle grid background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* soft light gradient */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_65%)]"
      />

      <div className="relative max-w-4xl mx-auto text-center">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-semibold tracking-tight text-white"
        >
          Let’s build something
          <span className="block text-neutral-400">
            meaningful together
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-8 text-lg text-neutral-400 max-w-2xl mx-auto"
        >
          If you’re building a product, exploring collaboration,
          or looking for a technical partner — we’re always open
          to thoughtful conversations.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mt-14 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/contact"
            className="
              inline-flex items-center gap-2
              px-9 py-4 rounded-xl
              bg-white text-black font-medium
              hover:bg-neutral-200
              transition
            "
          >
            Start a Project →
          </Link>

          <Link
            href="/work"
            className="
              inline-flex items-center gap-2
              px-9 py-4 rounded-xl
              border border-white/15 text-white
              hover:border-white/30
              transition
            "
          >
            View Our Work
          </Link>
        </motion.div>

      </div>
    </section>
  );
}