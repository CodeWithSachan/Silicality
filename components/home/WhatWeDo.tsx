"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = [
  {
    hidden: { opacity: 0, x: -60, y: 20 },
    show: { opacity: 1, x: 0, y: 0 },
  },
  {
    hidden: { opacity: 0, y: 60, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1 },
  },
  {
    hidden: { opacity: 0, x: 60, y: 20 },
    show: { opacity: 1, x: 0, y: 0 },
  },
];

export default function WhatWeDo() {
  const items = [
    {
      title: "AI & Technology Services",
      desc: "We design and build AI-powered products, platforms, and systems that are practical, scalable, and production-ready.",
      accent: "from-pink-500/20 to-transparent",
    },
    {
      title: "Programs & Events",
      desc: "Structured initiatives like hackathons, challenges, and seasonal programs that connect learning with execution.",
      accent: "from-violet-500/20 to-transparent",
      featured: true,
    },
    {
      title: "Contribution-First Platform",
      desc: "An open ecosystem built in public, where people grow through real projects, mentorship, and collaboration.",
      accent: "from-indigo-500/20 to-transparent",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 sm:py-28 md:py-36 px-4 sm:px-6">
      {/* background (kept as requested) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.06),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.06),transparent_40%)]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            What We Do
          </h2>
          <p className="mt-5 text-base sm:text-lg text-neutral-400">
            Silicality operates at the intersection of technology, learning, and
            community — turning ideas into real-world outcomes.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-3 items-stretch"
        >
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              variants={cardVariants[i]}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className={`
                group relative rounded-3xl
                border border-white/10
                bg-neutral-900/60 backdrop-blur-xl
                p-8
                hover:border-white/20
                transition
                ${item.featured ? "md:-mt-8 md:scale-[1.03]" : ""}
              `}
            >
              {/* Accent glow */}
              <div
                className={`pointer-events-none absolute inset-0 rounded-3xl
                bg-linear-to-br ${item.accent}
                opacity-0 group-hover:opacity-100 transition-opacity`}
              />

              {/* Floating border */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/5 group-hover:ring-white/10 transition" />

              <h3 className="relative text-xl font-medium">
                {item.title}
              </h3>

              <p className="relative mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
                {item.desc}
              </p>

              {/* Subtle motion affordance */}
              {/* <motion.div
                aria-hidden
                className="absolute bottom-6 right-6 h-8 w-8 rounded-full border border-white/10"
                initial={{ opacity: 0.4 }}
                whileHover={{ scale: 1.1, opacity: 0.8 }}
              /> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
