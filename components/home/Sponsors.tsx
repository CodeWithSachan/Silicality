"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const partnerships = [
  {
    title: "Event Sponsors",
    desc: "Support programs, hackathons, and initiatives that reach a growing community of builders and learners.",
  },
  {
    title: "Technology Partners",
    desc: "Collaborate on tools, platforms, and infrastructure that power real-world learning and development.",
  },
  {
    title: "Community Partners",
    desc: "Work with us to grow and support an ecosystem focused on contribution and long-term impact.",
  },
];

export default function Sponsors() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-neutral-900/40 to-black" />

      <div className="max-w-6xl mx-auto grid gap-16 lg:grid-cols-12">

        {/* LEFT — narrative */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 text-center lg:text-left"
        >
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
            Sponsors & Partners
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-neutral-400 max-w-md mx-auto lg:mx-0">
            We collaborate with organizations and individuals who believe in
            building real products, nurturing talent, and creating meaningful,
            long-term opportunities.
          </p>

          <p className="mt-6 sm:mt-8 text-sm text-neutral-500 max-w-md mx-auto lg:mx-0">
            Partnerships at Silicality are not transactional.
            They’re built on shared values, long-term intent,
            and a belief in learning through real work.
          </p>

          <div className="mt-8 sm:mt-10">
            <Link
              href="/contact"
              className="
                inline-flex w-full sm:w-auto justify-center items-center gap-2
                px-7 py-3 rounded-xl
                bg-white text-black font-medium
                hover:bg-neutral-200 transition
              "
            >
              Partner With Us →
            </Link>
          </div>
        </motion.div>

        {/* RIGHT — aligned roles */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          {partnerships.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: i * 0.1,
              }}
              className="
                rounded-2xl border border-neutral-800
                bg-neutral-900/40 backdrop-blur-xl
                p-5 sm:p-7
              "
            >
              <h3 className="text-base sm:text-xl font-medium">
                {item.title}
              </h3>

              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-neutral-400 max-w-xl">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
