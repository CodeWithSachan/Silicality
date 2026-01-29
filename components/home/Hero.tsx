"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-svh overflow-hidden">
      {/* 🎥 BACKGROUND VIDEO */}
{/* <video
  className="absolute inset-0 w-full h-full object-cover"
  src="/hero-bg.mp4"
  autoPlay
  muted
  playsInline
  style={{
    objectPosition: "125% right",
  }}
/> */}

<video
  className="absolute inset-0 h-full w-full object-cover"
  src="https://res.cloudinary.com/dtc3kiepa/video/upload/f_auto,q_auto,vc_auto/hero-bg_sx3xnh"
  poster="https://res.cloudinary.com/dtc3kiepa/video/upload/so_0/hero-bg_sx3xnh.jpg"
  autoPlay
  loop
  muted
  playsInline
  preload="metadata"
/>



      {/* 🌫️ OVERLAY (controls contrast) */}
      <div className="absolute inset-0 bg-black/25" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center min-h-svh px-4 sm:px-6">
        <div className="max-w-6xl sm:pl-0 md:pl-16">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="
              text-3xl sm:text-4xl md:text-7xl
              font-semibold tracking-tight
              leading-tight sm:leading-[1.05]
              text-white
            "
          >
            We build AI-powered Products
            <br />
            and Programs.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9, ease: "easeOut" }}
            className="
              mt-5 sm:mt-8
              text-base sm:text-lg md:text-xl
              text-white
              max-w-2xl
            "
          >
            Silicality helps startups, creators, and organizations
            turn ideas into real-world impact.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
            className="mt-8 sm:mt-12 flex flex-wrap gap-3 sm:gap-4"
          >
            <Link
              href="/contact"
              className="
                px-6 sm:px-7 py-3 rounded-xl
                bg-white text-black font-medium
                hover:bg-neutral-800 transition
              "
            >
              Start a Project
            </Link>

            <Link
              href="/programs"
              className="
                px-6 sm:px-7 py-3 rounded-xl
                border border-white/30 text-white
                hover:border-white transition
              "
            >
              Explore Programs
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
