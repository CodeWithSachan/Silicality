"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-40 px-6 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-neutral-900/60 to-black" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-semibold tracking-tight"
        >
          Let’s build something meaningful.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
          className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto"
        >
          Whether you’re starting a product, exploring collaboration,
          or looking for guidance — we’re open to thoughtful conversations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/contact"
            className="px-8 py-3 rounded-xl bg-white text-black font-medium
            hover:bg-neutral-200 transition"
          >
            Start a Project
          </Link>

          <Link
            href="/programs"
            className="px-8 py-3 rounded-xl border border-neutral-700 text-white
            hover:border-neutral-400 transition"
          >
            Explore Programs
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
