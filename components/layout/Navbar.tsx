"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Programs", href: "/programs" },
    { label: "Mentorship", href: "/mentorship" },
    { label: "Sponsors", href: "/sponsors" },
  ];

  return (
    <nav
      className="
        sticky top-0 z-50
        bg-black/25
        backdrop-blur-xl
        shadow-[0_1px_0_rgba(255,255,255,0.06)]
      "
    >
      <div className="px-6 sm:px-8 pt-[env(safe-area-inset-top)]">
        <div className="max-w-6xl mx-auto flex h-20 items-center justify-between">
          
          {/* ===== LOGO ===== */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Silicality logo"
              width={120}
              height={120}
              priority
              className="opacity-95"
            />
          </Link>

          {/* ===== DESKTOP NAV ===== */}
          <div className="hidden md:flex items-center gap-10 text-sm text-neutral-300">
            {!isHome && (
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            )}

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition ${
                  pathname === link.href
                    ? "text-white"
                    : "hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="
                ml-4 px-6 py-2.5 rounded-xl
                bg-white text-black font-medium
                hover:bg-neutral-200 transition
              "
            >
              Start a Project
            </Link>
          </div>

          {/* ===== MOBILE TOGGLE ===== */}
          <button
            onClick={() => setOpen(!open)}
            className="
              md:hidden flex h-11 w-11 items-center justify-center
              rounded-xl text-neutral-300
              hover:text-white hover:bg-white/10 transition
            "
            aria-label="Toggle menu"
          >
            <span className="relative block h-5 w-5">
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-transform duration-200
                ${open ? "rotate-45" : "-translate-y-2"}`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-opacity duration-200
                ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-transform duration-200
                ${open ? "-rotate-45" : "translate-y-2"}`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              md:hidden
              bg-black/70
              backdrop-blur-xl
              shadow-[0_20px_40px_rgba(0,0,0,0.4)]
            "
          >
            <div className="px-8 py-8 flex flex-col gap-6 text-neutral-300">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={`text-base ${
                  isHome ? "text-white" : "hover:text-white"
                }`}
              >
                Home
              </Link>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-base transition ${
                    pathname === link.href
                      ? "text-white"
                      : "hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="
                  mt-2 px-6 py-3 rounded-xl
                  bg-white text-black font-medium
                  text-center hover:bg-neutral-200 transition
                "
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
