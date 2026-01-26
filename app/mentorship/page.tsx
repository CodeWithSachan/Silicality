"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function MentorshipPage() {
  return (
    <section className="px-4 sm:px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Mentorship & Career Guidance
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-400">
            Practical guidance from people who’ve built real products,
            navigated real challenges, and worked in real teams.
          </p>
        </motion.div>

        {/* ================= HERO IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
          className="mt-12 sm:mt-16 relative h-[220px] sm:h-[260px] md:h-[420px]
          rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-800"
        >
          <Image
            src="/mentorship-hero.jpg"
            alt="Mentorship session"
            fill
            className="object-cover opacity-90"
            priority
          />
        </motion.div>

        {/* ================= VALUE CARDS ================= */}
        <div className="mt-16 sm:mt-20 grid gap-6 sm:gap-8 md:grid-cols-3">
          {[
            {
              title: "1:1 Mentorship",
              desc:
                "Focused conversations to help you think clearly about decisions, direction, and growth.",
            },
            {
              title: "Career Clarity",
              desc:
                "Understand roles, expectations, and skills without generic advice or hype.",
            },
            {
              title: "Builder Perspective",
              desc:
                "Learn how real-world products are designed, shipped, and improved.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/50
              p-6 sm:p-8 backdrop-blur-md hover:border-neutral-600 transition"
            >
              <h3 className="text-lg sm:text-xl font-medium">
                {item.title}
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= WHO THIS IS FOR ================= */}
        <section className="relative mt-20 sm:mt-28 overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-800">
          {/* Subtle depth background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(59,130,246,0.10),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.08),transparent_60%)]" />

          <div className="relative grid gap-12 sm:gap-16 px-6 sm:px-8 py-12 sm:py-16 md:grid-cols-2">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                Who this is really for
              </h2>

              <ul className="mt-5 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
                <li>• Students and early-career builders seeking direction</li>
                <li>• Developers unsure about roles, stacks, or next steps</li>
                <li>• Contributors in Silicality programs</li>
                <li>• Anyone wanting honest, experience-based guidance</li>
              </ul>
            </motion.div>

            {/* RIGHT CARDS */}
            <div className="grid gap-4 sm:gap-6">
              {[
                {
                  title: "No generic advice",
                  desc:
                    "Everything is based on real experience, not motivational talk.",
                },
                {
                  title: "No fixed curriculum",
                  desc:
                    "Sessions adapt to your current situation and goals.",
                },
                {
                  title: "Clarity over hype",
                  desc:
                    "We help you think better — not chase trends.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="rounded-2xl border border-neutral-800
                  bg-neutral-900/60 p-5 sm:p-6 backdrop-blur-sm
                  hover:border-neutral-600 hover:bg-neutral-900 transition"
                >
                  <h4 className="font-medium text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm sm:text-base text-neutral-400">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mt-24 sm:mt-32 rounded-2xl sm:rounded-3xl
            border border-neutral-800
            bg-gradient-to-br from-neutral-900/80 via-neutral-900 to-black
            px-6 sm:px-8 py-12 sm:py-16 text-center
            shadow-[0_0_60px_rgba(0,0,0,0.6)]
          "
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
            Ready to build your future?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">
            Get guidance that actually helps you move forward.
          </p>

          <Link
            href="/contact"
            className="
              inline-flex items-center justify-center
              mt-8 sm:mt-10 px-7 sm:px-8 py-3 rounded-xl
              bg-white text-black font-medium
              hover:bg-neutral-200 transition
            "
          >
            Request Mentorship
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
