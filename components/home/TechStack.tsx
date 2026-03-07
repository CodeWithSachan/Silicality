"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiSupabase,
  SiPostgresql,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { IconType } from "react-icons";

/* ═══════════════════════════════════════════════════════════
   CONSTANTS
═══════════════════════════════════════════════════════════ */

const TECH_STACK: Technology[] = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Supabase", Icon: SiSupabase },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "AWS", Icon: FaAws },
];

const ORBIT_CONFIG = {
  radius: 170,
  duration: 40,
  containerSize: 420,
  centerSize: 96,
} as const;

/* ═══════════════════════════════════════════════════════════
   TYPES
═══════════════════════════════════════════════════════════ */

interface Technology {
  name: string;
  Icon: IconType;
}

interface OrbitItemProps {
  item: Technology;
  index: number;
  total: number;
}

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════ */

export default function TechStack() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative py-36 px-6 bg-[#0B0E14] overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(255,255,255,0.05),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <HeaderSection />

        {/* Orbit System */}
        {mounted ? <OrbitSystem /> : <OrbitSystemPlaceholder />}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   HEADER SECTION
═══════════════════════════════════════════════════════════ */

function HeaderSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      suppressHydrationWarning
    >
      <span className="inline-flex mb-5 px-4 py-1 text-xs rounded-full border border-white/10 text-neutral-300">
        Technology
      </span>

      <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-100">
        Technologies we
        <span className="block text-neutral-400">build with</span>
      </h2>

      <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
        Modern frameworks and infrastructure used to build scalable,
        high-performance digital products.
      </p>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ORBIT SYSTEM
═══════════════════════════════════════════════════════════ */

function OrbitSystem() {
  return (
    <div className="relative mt-28 flex justify-center items-center h-[550px]">
      {/* Center glow */}
      <div className="absolute w-28 h-28 rounded-full bg-violet-500/20 blur-2xl" />

      {/* Orbit container - single rotation */}
      <motion.div
        className="relative flex items-center justify-center"
        style={{
          width: ORBIT_CONFIG.containerSize,
          height: ORBIT_CONFIG.containerSize,
        }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: ORBIT_CONFIG.duration,
          ease: "linear",
        }}
        suppressHydrationWarning
      >
        {/* Tech items in orbit */}
        {TECH_STACK.map((item, index) => (
          <OrbitItem
            key={item.name}
            item={item}
            index={index}
            total={TECH_STACK.length}
          />
        ))}
      </motion.div>

      {/* Center node - static */}
      <div className="absolute z-10 flex items-center justify-center rounded-full bg-[#121621] border border-white/10 text-sm text-white font-medium"
        style={{
          width: ORBIT_CONFIG.centerSize,
          height: ORBIT_CONFIG.centerSize,
        }}
      >
        Silicality
      </div>
    </div>
  );
}

function OrbitSystemPlaceholder() {
  return (
    <div className="relative mt-28 flex justify-center items-center h-[550px]">
      {/* Center glow */}
      <div className="absolute w-28 h-28 rounded-full bg-violet-500/20 blur-2xl" />

      {/* Static placeholder container */}
      <div
        className="relative flex items-center justify-center"
        style={{
          width: ORBIT_CONFIG.containerSize,
          height: ORBIT_CONFIG.containerSize,
        }}
      >
      </div>

      {/* Center node - static */}
      <div className="absolute z-10 flex items-center justify-center rounded-full bg-[#121621] border border-white/10 text-sm text-white font-medium"
        style={{
          width: ORBIT_CONFIG.centerSize,
          height: ORBIT_CONFIG.centerSize,
        }}
      >
        Silicality
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ORBIT ITEM
═══════════════════════════════════════════════════════════ */

function OrbitItem({ item, index, total }: OrbitItemProps) {
  // Calculate angle for even distribution
  const angle = (index / total) * 360;

  // Convert angle to radians and calculate x, y position
  const radian = (angle * Math.PI) / 180;
  const x = Math.cos(radian) * ORBIT_CONFIG.radius;
  const y = Math.sin(radian) * ORBIT_CONFIG.radius;

  const Icon = item.Icon;

  return (
    <motion.div
      className="absolute flex flex-col items-center gap-2 px-4 py-3 rounded-xl bg-[#121621] border border-white/10 text-sm text-neutral-300 cursor-pointer transition hover:border-white/20 hover:scale-105 whitespace-nowrap group"
      style={{
        x,
        y,
      }}
      animate={{ rotate: -360 }}
      transition={{
        repeat: Infinity,
        duration: ORBIT_CONFIG.duration,
        ease: "linear",
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      suppressHydrationWarning
    >
      <Icon className="w-6 h-6 text-white transition group-hover:text-violet-400" />
      <span className="text-xs font-medium">{item.name}</span>
    </motion.div>
  );
}