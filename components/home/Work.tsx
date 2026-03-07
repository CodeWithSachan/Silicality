"use client";

import { motion } from "framer-motion";

/* -----------------------------
   Sample Projects
------------------------------ */
const projects = [
  {
    title: "AI Customer Support Assistant",
    desc: "An AI-powered assistant that automates customer queries and improves response time for support teams.",
    tags: ["AI Systems", "Automation", "OpenAI API"],
  },
  {
    title: "Creator Analytics Dashboard",
    desc: "A modern analytics dashboard helping creators track engagement, growth, and revenue insights.",
    tags: ["Web Platform", "Dashboard", "Next.js"],
  },
  {
    title: "Startup Product Landing",
    desc: "Product-focused website and interface design built to help an early-stage startup launch faster.",
    tags: ["Product Design", "Web Development", "Branding"],
  },
];

/* -----------------------------
   Main Component
------------------------------ */
export default function Work() {
  return (
    <section className="relative py-32 px-6 bg-[#0B0E14] overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.05),transparent_55%)]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex mb-5 px-4 py-1 text-xs rounded-full border border-white/10 text-neutral-300">
            Selected Work
          </span>

          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-100">
            Products we’ve helped
            <span className="block text-neutral-400">
              design and build
            </span>
          </h2>

          <p className="mt-6 text-lg text-neutral-400">
            A selection of digital products and platforms we’ve crafted
            for startups and modern teams.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="
                relative p-8 rounded-3xl
                bg-[#121621]
                border border-white/10
                hover:border-white/20
                transition
              "
            >
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-4 text-neutral-400 text-sm leading-relaxed">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      text-xs
                      px-3 py-1
                      rounded-full
                      bg-white/5
                      border border-white/10
                      text-neutral-300
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}