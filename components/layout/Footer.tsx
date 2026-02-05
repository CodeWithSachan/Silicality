"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-neutral-800 bg-black px-4 sm:px-6">
      <div className="mx-auto max-w-6xl py-16 sm:py-20">
        {/* Top */}
<motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between"
>

          {/* Brand */}
<div className="max-w-md">
  <div className="flex items-center gap-3 text-white font-semibold text-lg">
    <img
      src="/logo.png"
      alt="Silicality logo"
      width={150}
      height={150}
      className="object-contain"
    />
  </div>

  <p className="mt-4 text-sm leading-relaxed text-neutral-400">
    AI-driven products, programs, and platforms — built openly and responsibly.
  </p>
</div>



  {/* Explore */}
<div className="grid grid-cols-2 gap-16 text-sm">
  {/* Explore */}
  <div className="flex flex-col gap-3">
    <span className="text-xs font-medium uppercase tracking-widest text-neutral-500">
      Explore
    </span>
    <Link href="/services" className="text-neutral-300 hover:text-white transition">
      Services
    </Link>
    <Link href="/programs" className="text-neutral-300 hover:text-white transition">
      Programs
    </Link>
    <Link href="/mentorship" className="text-neutral-300 hover:text-white transition">
      Mentorship
    </Link>
    <Link href="/platform" className="text-neutral-300 hover:text-white transition">
      Platform
    </Link>
  </div>

  {/* Company */}
  <div className="flex flex-col gap-3">
    <span className="text-xs font-medium uppercase tracking-widest text-neutral-500">
      Company
    </span>
    <Link href="/about" className="text-neutral-300 hover:text-white transition">
      About
    </Link>
    <Link href="/privacy-policy" className="text-neutral-300 hover:text-white transition">
      Privacy Policy
    </Link>
    <Link href="/terms" className="text-neutral-300 hover:text-white transition">
      Terms of Service
    </Link>
    <Link href="/contact" className="text-neutral-300 hover:text-white transition">
      Contact
    </Link>
  </div>
</div>


        </motion.div>

        {/* Bottom */}
        <div className="mt-12 sm:mt-20 flex flex-col items-center justify-between gap-3 sm:gap-4
        border-t border-neutral-800 pt-5 sm:pt-6 text-xs text-neutral-500 md:flex-row">
          <p>© {new Date().getFullYear()} Silicality. All rights reserved.</p>
          <p className="text-neutral-400">
            Scaling The Future • Feedback welcome
          </p>
        </div>
      </div>
    </footer>
  );
}
