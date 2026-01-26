"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function MentorshipClient() {
  return (
    <section
      className="px-4 sm:px-6 py-20 md:py-28"
      aria-labelledby="mentorship-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1
            id="mentorship-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Mentorship & Career Guidance
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-400">
            Practical guidance from experienced builders who’ve shipped real
            products, navigated real challenges, and worked in real teams.
          </p>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
          className="mt-12 sm:mt-16 relative h-55 sm:h-65 md:h-105
            rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-800"
          >

          <Image
            src="/mentorship-hero.jpg"
            alt="Developer mentorship and career guidance session"
            fill
            className="object-cover opacity-90"
            priority
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mt-24 sm:mt-32 rounded-2xl sm:rounded-3xl
            border border-neutral-800
            bg-linear-to-br from-neutral-900/80 via-neutral-900 to-black
            px-6 sm:px-8 py-12 sm:py-16 text-center
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
              mt-8 px-7 py-3 rounded-xl
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

