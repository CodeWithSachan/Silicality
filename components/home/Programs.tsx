"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const programs = [
  {
    title: "Seasonal Programs",
    desc: "Focused initiatives like Spring that guide participants through real contributions over a defined period.",
    featured: true,
  },
  {
    title: "Hackathons & Challenges",
    desc: "Time-bound events that encourage rapid problem-solving, teamwork, and hands-on building.",
  },
  {
    title: "Quizzes & Learning Sprints",
    desc: "Lightweight formats to test knowledge, reinforce fundamentals, and stay engaged.",
  },
];

export default function Programs() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 bg-neutral-900/40 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl text-center sm:text-left"
        >
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
            Programs & Events
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-neutral-400">
            Structured initiatives designed to turn learning into real
            experience through participation, collaboration, and execution.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-14 sm:mt-20 sm:pl-10">

          {/* Vertical line (desktop only) */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-neutral-800 hidden sm:block" />

          <div className="space-y-6 sm:space-y-8">
            {programs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: i * 0.08,
                }}
                className={`
                  relative rounded-2xl border backdrop-blur-xl transition
                  ${item.featured
                    ? "border-pink-500/40 bg-neutral-900/60"
                    : "border-neutral-800 bg-neutral-900/40"}
                  ${item.featured ? "p-6 sm:p-8" : "p-5 sm:p-6"}
                  sm:hover:translate-x-1
                  hover:bg-neutral-900/60
                `}
              >
                {/* Timeline node (desktop only) */}
                <span
                  className={`
                    absolute -left-7 top-7 h-3 w-3 rounded-full hidden sm:block
                    ${item.featured ? "bg-pink-500" : "bg-neutral-500"}
                  `}
                >
                  {item.featured && (
                    <span className="absolute inset-0 rounded-full animate-ping bg-pink-500/40" />
                  )}
                </span>

                {/* Featured badge */}
                {item.featured && (
                  <span
                    className="
                      inline-flex mb-3 rounded-full
                      border border-pink-500/40 bg-pink-500/10
                      px-3 py-1 text-xs font-medium text-pink-400
                    "
                  >
                    Featured Program
                  </span>
                )}

                <h3 className="text-base sm:text-xl font-medium">
                  {item.title}
                </h3>

                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-neutral-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12 sm:mt-20 text-center sm:text-left"
        >
          <Link
            href="/programs"
            className="
              inline-flex w-full sm:w-auto justify-center items-center gap-2
              px-7 py-3 rounded-xl
              bg-neutral-100 text-black font-medium
              border border-neutral-200
              hover:bg-neutral-200 transition
            "
          >
            Explore Programs →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
