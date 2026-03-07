"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* --------------------------------
   Partnerships
--------------------------------- */

const partnerships = [
  {
    title: "Technology Partners",
    desc: "Collaborate on infrastructure, tools, and platforms that power modern digital products.",
  },
  {
    title: "Startup Collaborations",
    desc: "Work with early teams and founders to design, build, and launch scalable digital platforms.",
  },
  {
    title: "Strategic Partners",
    desc: "Long-term collaboration with studios and organizations building meaningful technology.",
  },
];

/* --------------------------------
   Main Component
--------------------------------- */

export default function Sponsors() {
  return (
    <section id="partners" className="relative py-36 px-6 bg-[#0B0E14] overflow-hidden">
      
      {/* subtle grid background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="inline-flex mb-5 px-4 py-1 text-xs rounded-full border border-white/10 text-neutral-300">
            Partnerships
          </span>

          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-100">
            Partners &
            <span className="block text-neutral-400">
              collaborators
            </span>
          </h2>

          <p className="mt-6 text-lg text-neutral-400">
            We collaborate with founders, teams, and organizations building
            meaningful digital products.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10" />

        {/* Partnership Types */}
        <div className="mt-16 grid md:grid-cols-3 gap-10">

          {partnerships.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
              }}
              className="
                relative
                py-6
                border-b border-white/10
              "
            >
              <h3 className="text-lg font-medium text-neutral-100">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <Link
            href="/contact"
            className="
              inline-flex items-center gap-2
              px-8 py-4
              rounded-xl
              bg-white text-black font-medium
              hover:bg-neutral-200 transition
            "
          >
            Partner With Us →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}