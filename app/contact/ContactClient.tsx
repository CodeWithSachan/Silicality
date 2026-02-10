"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function ContactClient() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 px-4 sm:px-6">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-neutral-900 via-black to-black" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-125 w-125 rounded-full bg-purple-500/15 blur-[140px]" />

      <div className="mx-auto max-w-4xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <span className="inline-flex mb-5 rounded-full border border-purple-400/30 bg-purple-400/10 px-4 py-1 text-xs text-purple-300">
            Let’s work together
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Start a Project
          </h1>

<p className="mt-5 text-base sm:text-lg text-neutral-400 max-w-2xl">
  Tell us what you want to build — website, application, or AI product.
  If the scope is clear, we’ll respond within{" "}
  <span className="text-white">24–48 hours</span> to discuss execution.
</p>

        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
          className="mt-14"
        >
          <ContactForm />
        </motion.div>

        {/* TRUST NOTE */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-10 text-xs sm:text-sm text-neutral-500 max-w-2xl"
        >
          We work with a limited number of projects to maintain quality and focus.
          If we’re aligned, we’ll guide you on the next steps.
        </motion.p>
      </div>
    </section>
  );
}
