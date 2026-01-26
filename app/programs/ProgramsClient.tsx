"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProgramsClient() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 md:py-32 px-4 sm:px-6"
      aria-labelledby="programs-heading"
    >
      {/* subtle background grid + glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.08),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.08),transparent_40%)]"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto space-y-20 sm:space-y-24 md:space-y-32">
        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl
          border border-white/10 bg-neutral-900/40 backdrop-blur-sm
          p-6 sm:p-10 md:p-16"
        >
          {/* 🎥 Background VIDEO (decorative) */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/program-bg.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            aria-hidden="true"
          />

          {/* VERY LIGHT vignette */}
          <div
            className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative max-w-2xl space-y-6 sm:space-y-8">
            <span
              className="inline-flex items-center gap-2 rounded-full
              border border-pink-500/40 bg-pink-500/10
              px-4 py-1 text-xs font-medium text-pink-400"
            >
              Spring cycle active
            </span>

            <h1
              id="programs-heading"
              className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-white"
            >
              Spring of{" "}
              <span className="text-pink-400 italic">Silicality 2026</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-200">
              A beginner-friendly open-source contribution program focused on
              learning by doing, collaboration, and building in public.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="https://spring.silicality.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-pink-500 px-6 sm:px-7 py-3
                text-sm font-semibold text-black hover:bg-pink-400 transition"
              >
                Register Now
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ================= STATS ================= */}
        <section aria-labelledby="program-stats">
          <h2 id="program-stats" className="sr-only">
            Program statistics
          </h2>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            {[
              { label: "Global Contributors", value: "100+" },
              { label: "Lines of Code", value: "50k+" },
              { label: "Nodes Active", value: "200" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10
                bg-neutral-900/60 p-6 sm:p-8 backdrop-blur-xl"
              >
                <p className="text-xs uppercase tracking-widest text-neutral-500">
                  {stat.label}
                </p>
                <p className="mt-2 sm:mt-3 text-3xl sm:text-4xl font-semibold">
                  {stat.value}
                </p>
                <div className="mt-5 sm:mt-6 h-1.5 w-full rounded-full bg-white/5">
                  <div className="h-full w-3/4 rounded-full bg-linear-to-r from-pink-500 to-violet-500" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= ROADMAP + PROGRAMS ================= */}
        <section className="grid gap-16 sm:gap-20 lg:grid-cols-12">
          {/* Roadmap */}
          <div className="lg:col-span-5 space-y-8 sm:space-y-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">
                Program Roadmap
              </h2>
              <p className="mt-2 text-sm sm:text-base text-neutral-400">
                Follow the seasonal evolution of the Silicality ecosystem.
              </p>
            </div>

            <ol className="space-y-6 sm:space-y-8 border-l border-white/10 pl-5 sm:pl-6">
              {[
                ["Registration Opens", "January 20"],
                ["Contributor Registration Opens", "January 20"],
                ["Coding Period Begins", "March 1"],
                ["Coding Period Ends", "May 30"],
                ["Certificates Awarded", "May 31"],
              ].map(([title, time]) => (
                <li key={title}>
                  <h3 className="font-medium">{title}</h3>
                  <p className="text-sm text-neutral-500">{time}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Upcoming programs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">
                Upcoming Programs
              </h2>
              <p className="mt-2 text-sm sm:text-base text-neutral-400">
                Building in public through real-time experiments and modules.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
              {["Quizzes", "Hackathon", "SkillBuild"].map((title) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10
                  bg-neutral-900/60 p-5 sm:p-6 backdrop-blur-xl
                  hover:border-pink-400/40 transition"
                >
                  <h3 className="font-medium">{title}</h3>
                </div>
              ))}

              <div className="flex items-center justify-center rounded-2xl
              border border-dashed border-white/20 p-5 sm:p-6
              text-sm text-neutral-400 hover:border-pink-400/40 transition">
                More coming soon…
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section
          className="relative rounded-2xl sm:rounded-3xl
          border border-white/10 bg-neutral-900/70
          p-8 sm:p-14 text-center backdrop-blur-xl"
          aria-labelledby="program-cta"
        >
          <h2
            id="program-cta"
            className="text-2xl sm:text-3xl md:text-4xl font-semibold"
          >
            Ready to Contribute?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">
            Be among the first contributors and get early access to Spring of
            Silicality.
          </p>

          <div className="mt-6 sm:mt-8 flex justify-center">
            <Link
              href="https://spring.silicality.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center
              h-11 sm:h-12 rounded-full bg-pink-500 px-7 sm:px-8
              font-semibold text-black hover:bg-pink-400 transition"
            >
              Register Now
            </Link>
          </div>

          <p className="mt-4 text-xs uppercase tracking-widest text-neutral-500">
            Secured with Silicality encryption
          </p>
        </section>
      </div>
    </section>
  );
}
