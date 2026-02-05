// "use client";

// import { motion } from "framer-motion";
// import type { Variants } from "framer-motion";
// import Link from "next/link";

// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// const cardVariants: Variants = {
//   hidden: (i: number) => ({
//     opacity: 0,
//     y: 24,
//     x: 0, // 👈 remove horizontal motion for mobile friendliness
//   }),
//   show: {
//     opacity: 1,
//     y: 0,
//     x: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// export default function Services() {
//   const services = [
//     {
//       title: "AI & Automation",
//       desc: "Custom AI solutions that integrate into real products and workflows, focused on usability and impact.",
//       points: [
//         "Custom model training & fine-tuning",
//         "AI assistants & chatbots",
//         "Automation & internal tools",
//       ],
//     },
//     {
//       title: "Web & App Development",
//       desc: "Modern, scalable applications built with performance, maintainability, and growth in mind.",
//       points: [
//         "Web platforms & dashboards",
//         "Mobile app development",
//         "Startup MVPs",
//       ],
//       featured: true,
//     },
//     {
//       title: "Design & Branding",
//       desc: "Clear, functional design systems that support strong products and consistent communication.",
//       points: [
//         "UI/UX design",
//         "Brand identity & logos",
//         "Pitch decks & creatives",
//       ],
//     },
//   ];

//   return (
//     <section className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 overflow-hidden">
//       {/* Ambient background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(236,72,153,0.08),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(139,92,246,0.08),transparent_40%)]" />

//       <div className="relative max-w-6xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="max-w-3xl text-center sm:text-left"
//         >
//           <span className="inline-flex mb-4 px-4 py-1 text-xs rounded-full border border-neutral-700 text-neutral-300">
//             Silicality Labs
//           </span>

//           <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
//             Building real products with AI & technology
//           </h2>

//           <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-neutral-400">
//             We help startups, creators, and organizations turn ideas into
//             scalable, production-ready systems — without hype or shortcuts.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="mt-12 sm:mt-16 grid gap-5 sm:gap-6 md:grid-cols-3"
//         >
//           {services.map((service, i) => (
//             <motion.div
//               key={service.title}
//               custom={i}
//               variants={cardVariants}
//               whileHover={{ y: -6 }} // 👈 lighter hover
//               className={`
//                 relative rounded-2xl border backdrop-blur-xl transition
//                 ${
//                   service.featured
//                     ? "border-pink-500/40 bg-neutral-900/70 shadow-[0_0_40px_-20px_rgba(236,72,153,0.25)]"
//                     : "border-neutral-800 bg-neutral-900/40"
//                 }
//                 p-5 sm:p-8
//               `}
//             >
//               {/* Glow overlay (desktop-first) */}
//               <div className="
//                 pointer-events-none absolute inset-0 rounded-2xl
//                 opacity-0 sm:hover:opacity-100 transition
//                 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.12),transparent_50%)]
//               " />

//               <h3 className="text-base sm:text-xl font-medium">
//                 {service.title}
//               </h3>

//               <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-400">
//                 {service.desc}
//               </p>

//               <ul className="mt-5 sm:mt-6 space-y-2 text-sm text-neutral-300">
//                 {service.points.map((point) => (
//                   <li key={point}>— {point}</li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="mt-12 sm:mt-20 text-center sm:text-left"
//         >
//           <Link
//             href="/contact"
//             className="
//               inline-flex w-full sm:w-auto justify-center items-center gap-2
//               px-7 py-3 rounded-full
//               bg-white text-black font-medium
//               hover:bg-neutral-200 transition
//             "
//           >
//             Start a Project →
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

/* --------------------------------
   Data
--------------------------------- */
const services = [
  {
    title: "AI & Automation",
    desc: "Custom AI solutions that integrate into real products and workflows, focused on usability and measurable impact.",
    points: [
      "Custom model training & fine-tuning",
      "AI assistants & copilots",
      "Automation & internal tools",
    ],
    color: "cyan",
    depth: 30,
  },
  {
    title: "Web & App Development",
    desc: "Modern, scalable applications built with performance, maintainability, and long-term growth in mind.",
    points: [
      "Web platforms & dashboards",
      "Mobile & cross-platform apps",
      "Startup MVPs",
    ],
    color: "pink",
    depth: 60,
    featured: true,
  },
  {
    title: "Design & Branding",
    desc: "Clear, functional design systems that support strong products and consistent communication.",
    points: [
      "UI/UX & design systems",
      "Brand identity & logos",
      "Pitch decks & product visuals",
    ],
    color: "violet",
    depth: 25,
  },
];

/* --------------------------------
   Component
--------------------------------- */
export default function Services() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36 px-6">
      {/* Base background */}
      <div className="absolute inset-0 bg-black" />

      {/* Living background objects */}
      <motion.div
        aria-hidden
        className="absolute top-24 left-24 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-violet-400/10 blur-3xl"
        animate={{ y: [0, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-0 h-full w-px bg-neutral-800/60"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-flex mb-5 px-4 py-1 text-xs rounded-full border border-neutral-700 text-neutral-300">
            Silicality Labs
          </span>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            Building real products with AI & technology
          </h2>

          <p className="mt-6 text-base sm:text-lg text-neutral-400">
            We help startups, creators, and organizations turn ideas into
            <strong className="text-neutral-200"> production-ready systems</strong>
            {" "}— without hype or shortcuts.
          </p>
        </motion.header>

        {/* 3D Services Layout */}
        <div className="relative mt-20 grid gap-10 md:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-20"
        >
          <Link
            href="/contact"
            className="
              inline-flex items-center gap-2
              px-8 py-4 rounded-xl
              bg-neutral-100 text-black font-medium
              hover:bg-neutral-200 transition
            "
          >
            Start a Project →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* --------------------------------
   Card with real 3D interaction
--------------------------------- */
function ServiceCard({ service }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  function handleMove(e: any) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  return (
    <motion.article
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      initial={{ opacity: 0, y: 60, rotateX: 12 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transform: `translateZ(${service.depth}px)`,
      }}
      className={`
        relative rounded-3xl p-8
        bg-neutral-900/70 backdrop-blur-xl
        border border-white/10
        shadow-2xl
        hover:scale-[1.04]
        transition
        ${service.featured ? "ring-1 ring-pink-500/30" : ""}
      `}
    >
      {/* Ambient object */}
      <div
        aria-hidden
        className={`
          absolute -top-10 -right-10 w-40 h-40 rounded-full
          bg-${service.color}-400/20 blur-2xl
        `}
      />

      <h3 className="text-xl sm:text-2xl font-medium">
        {service.title}
      </h3>

      <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
        {service.desc}
      </p>

      <ul className="mt-6 space-y-2 text-sm text-neutral-300">
        {service.points.map((point: string) => (
          <li key={point}>— {point}</li>
        ))}
      </ul>
    </motion.article>
  );
}
