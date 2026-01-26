"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const items = [
  {
    title: "1:1 Mentorship",
    desc: "Direct guidance from professionals who have shipped products, built teams, and navigated real challenges.",
    highlight: true,
  },
  {
    title: "Career Direction",
    desc: "Get clarity on roles, skills, and paths — from early exploration to focused growth.",
  },
  {
    title: "Industry Perspective",
    desc: "Understand how real companies work, what they expect, and how to prepare beyond tutorials.",
  },
];

export default function Mentorship() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid gap-16 lg:grid-cols-12">

        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 text-center lg:text-left"
        >
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
            Mentorship & Career Guidance
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-neutral-400 max-w-md mx-auto lg:mx-0">
            Learn from builders, not influencers.
            Practical guidance shaped by real-world experience.
          </p>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block mt-10">
            <Link
              href="/mentorship"
              className="
                inline-flex items-center gap-2
                px-7 py-3 rounded-xl
                bg-neutral-100 text-black
                hover:bg-neutral-200 transition
              "
            >
              Explore Mentorship Programs →
            </Link>
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <div className="lg:col-span-7 relative">
          {/* guide line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute left-2 top-0 w-px bg-neutral-800 hidden sm:block"
          />

          <div className="space-y-10 sm:space-y-12">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: i * 0.1,
                }}
                className="relative sm:pl-10"
              >
                {/* node */}
                <motion.span
                  animate={item.highlight ? { scale: [1, 1.4, 1] } : {}}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`
                    absolute left-0 top-4 h-3 w-3 rounded-full hidden sm:block
                    ${item.highlight ? "bg-pink-500" : "bg-neutral-600"}
                  `}
                />

                <div
                  className={`
                    rounded-2xl border p-5 sm:p-7
                    backdrop-blur-xl transition
                    ${
                      item.highlight
                        ? "border-pink-500/40 bg-pink-500/5 shadow-[0_0_0_1px_rgba(236,72,153,0.15)]"
                        : "border-neutral-800 bg-neutral-900/40 hover:border-neutral-600"
                    }
                  `}
                >
                  <h3 className="text-base sm:text-xl font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-2 sm:mt-3 text-sm sm:text-base text-neutral-400">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MOBILE CTA ================= */}
      <div className="lg:hidden mt-14 text-center">
        <Link
          href="/mentorship"
          className="
            inline-flex w-full justify-center
            px-7 py-3 rounded-xl
            bg-neutral-100 text-black
            hover:bg-neutral-200 transition
          "
        >
          Explore Mentorship Programs →
        </Link>
      </div>
    </section>
  );
}
