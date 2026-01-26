"use client";

import { motion } from "framer-motion";

export default function SponsorsClient() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 px-4 sm:px-6">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-neutral-900/60 via-black to-black" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-125 w-125 rounded-full bg-purple-500/15 blur-[120px]" />
      <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-pink-500/10 blur-[120px]" />

      <div className="max-w-6xl mx-auto space-y-28">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-flex mb-5 rounded-full border border-purple-400/30 bg-purple-400/10 px-4 py-1 text-xs font-medium text-purple-300">
            Strategic Partnerships
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Sponsors & Partners
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-neutral-400">
            Silicality partners with organizations that believe in real work,
            real talent, and long-term impact — not vanity metrics or hype cycles.
          </p>
        </motion.div>

        {/* VALUE SECTION */}
        <div className="grid gap-12 md:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Why partner with Silicality?
            </h2>

            <ul className="mt-6 space-y-4 text-neutral-400 text-sm sm:text-base">
              <li>• Reach serious builders, not passive audiences</li>
              <li>• Align your brand with real open-source impact</li>
              <li>• Early access to skilled contributors and talent</li>
              <li>• Visibility inside programs that actually ship</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur p-6 sm:p-8"
          >
            <h3 className="text-lg font-medium">Our philosophy</h3>
            <p className="mt-4 text-sm sm:text-base text-neutral-400">
              We don’t sell attention — we build ecosystems.
              Sponsors collaborate directly with contributors through
              programs, infrastructure, and long-term initiatives.
            </p>
          </motion.div>
        </div>

        {/* PARTNERSHIP TYPES */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl font-semibold"
          >
            Partnership opportunities
          </motion.h2>

          <div className="mt-14 grid gap-6 sm:gap-8 md:grid-cols-3">
            {[
              {
                title: "Event Sponsors",
                desc:
                  "Support hackathons, challenges, and seasonal programs with meaningful brand presence.",
              },
              {
                title: "Technology Partners",
                desc:
                  "Provide tools, APIs, credits, or infrastructure used directly by builders shipping real projects.",
              },
              {
                title: "Community & Education Partners",
                desc:
                  "Collaborate on long-term initiatives that nurture learning and contribution.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8 backdrop-blur hover:border-purple-400/40 transition"
              >
                <h3 className="text-lg sm:text-xl font-medium">
                  {item.title}
                </h3>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative rounded-3xl border border-purple-400/20
          bg-linear-to-br from-purple-500/10 via-neutral-900/60 to-black
          px-6 sm:px-12 py-14 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Let’s build something meaningful together
          </h2>

          <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
            We work with a limited number of aligned partners to ensure
            depth, quality, and long-term value.
          </p>

          <a
            href="mailto:silicality.dev@gmail.com?subject=Sponsor%20Partnership%20Inquiry"
            className="inline-flex mt-8 px-8 py-3 rounded-xl bg-white text-black font-medium hover:bg-neutral-200 transition"
          >
            Become a Sponsor
          </a>
        </motion.div>
      </div>
    </section>
  );
}
