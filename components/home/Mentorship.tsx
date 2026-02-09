// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// const items = [
//   {
//     title: "1:1 Mentorship",
//     desc: "Direct guidance from professionals who have shipped products, built teams, and navigated real challenges.",
//     highlight: true,
//   },
//   {
//     title: "Career Direction",
//     desc: "Get clarity on roles, skills, and paths — from early exploration to focused growth.",
//   },
//   {
//     title: "Industry Perspective",
//     desc: "Understand how real companies work, what they expect, and how to prepare beyond tutorials.",
//   },
// ];

// export default function Mentorship() {
//   return (
//     <section className="relative py-20 sm:py-32 px-4 sm:px-6">
//       <div className="max-w-6xl mx-auto grid gap-16 lg:grid-cols-12">

//         {/* ================= LEFT ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="lg:col-span-5 text-center lg:text-left"
//         >
//           <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
//             Mentorship & Career Guidance
//           </h2>

//           <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-neutral-400 max-w-md mx-auto lg:mx-0">
//             Learn from builders, not influencers.
//             Practical guidance shaped by real-world experience.
//           </p>

//           {/* DESKTOP CTA */}
//           <div className="hidden lg:block mt-10">
//             <Link
//               href="/mentorship"
//               className="
//                 inline-flex items-center gap-2
//                 px-7 py-3 rounded-xl
//                 bg-neutral-100 text-black
//                 hover:bg-neutral-200 transition
//               "
//             >
//               Explore Mentorship Programs →
//             </Link>
//           </div>
//         </motion.div>

//         {/* ================= RIGHT ================= */}
//         <div className="lg:col-span-7 relative">
//           {/* guide line */}
//           <motion.div
//             initial={{ height: 0 }}
//             whileInView={{ height: "100%" }}
//             viewport={{ once: true }}
//             transition={{ duration: 1.1, ease: "easeOut" }}
//             className="absolute left-2 top-0 w-px bg-neutral-800 hidden sm:block"
//           />

//           <div className="space-y-10 sm:space-y-12">
//             {items.map((item, i) => (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.7,
//                   ease: "easeOut",
//                   delay: i * 0.1,
//                 }}
//                 className="relative sm:pl-10"
//               >
//                 {/* node */}
//                 <motion.span
//                   animate={item.highlight ? { scale: [1, 1.4, 1] } : {}}
//                   transition={{
//                     duration: 2.5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className={`
//                     absolute left-0 top-4 h-3 w-3 rounded-full hidden sm:block
//                     ${item.highlight ? "bg-pink-500" : "bg-neutral-600"}
//                   `}
//                 />

//                 <div
//                   className={`
//                     rounded-2xl border p-5 sm:p-7
//                     backdrop-blur-xl transition
//                     ${
//                       item.highlight
//                         ? "border-pink-500/40 bg-pink-500/5 shadow-[0_0_0_1px_rgba(236,72,153,0.15)]"
//                         : "border-neutral-800 bg-neutral-900/40 hover:border-neutral-600"
//                     }
//                   `}
//                 >
//                   <h3 className="text-base sm:text-xl font-medium">
//                     {item.title}
//                   </h3>

//                   <p className="mt-2 sm:mt-3 text-sm sm:text-base text-neutral-400">
//                     {item.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ================= MOBILE CTA ================= */}
//       <div className="lg:hidden mt-14 text-center">
//         <Link
//           href="/mentorship"
//           className="
//             inline-flex w-full justify-center
//             px-7 py-3 rounded-xl
//             bg-neutral-100 text-black
//             hover:bg-neutral-200 transition
//           "
//         >
//           Explore Mentorship Programs →
//         </Link>
//       </div>
//     </section>
//   );
// }
// "use client";

// import { motion, useMotionValue, useTransform } from "framer-motion";
// import Link from "next/link";
// import { useRef } from "react";

// const items = [
//   {
//     title: "1:1 Mentorship",
//     desc: "Direct guidance from professionals who have shipped products, built teams, and navigated real challenges.",
//     highlight: true,
//     depth: 60,
//     color: "pink",
//   },
//   {
//     title: "Career Direction",
//     desc: "Get clarity on roles, skills, and paths — from early exploration to focused growth.",
//     depth: 40,
//     color: "violet",
//   },
//   {
//     title: "Industry Perspective",
//     desc: "Understand how real companies work, what they expect, and how to prepare beyond tutorials.",
//     depth: 30,
//     color: "indigo",
//   },
// ];

// export default function Mentorship() {
//   const ref = useRef(null);

//   return (
//     <section
//       ref={ref}
//       id="mentorship"
//       className="relative overflow-hidden py-28 sm:py-36 px-6"
//     >
//       {/* Base background */}
//       <div className="absolute inset-0 bg-black" />

//       {/* Ambient guidance field */}
//       <motion.div
//         aria-hidden
//         className="absolute top-24 left-24 w-72 h-72 rounded-full bg-pink-400/10 blur-3xl"
//         animate={{ y: [0, -50, 0] }}
//         transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         aria-hidden
//         className="absolute bottom-20 right-24 w-80 h-80 rounded-full bg-indigo-400/10 blur-3xl"
//         animate={{ y: [0, 60, 0] }}
//         transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Vertical guidance axis */}
//       <motion.div
//         aria-hidden
//         className="absolute left-1/2 top-0 h-full w-px bg-neutral-800/70 hidden lg:block"
//         animate={{ opacity: [0.2, 0.5, 0.2] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="relative max-w-6xl mx-auto grid gap-20 lg:grid-cols-12">
//         {/* ================= LEFT ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 32 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           className="lg:col-span-5 text-center lg:text-left"
//         >
//           <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
//             Mentorship & Career Guidance
//           </h2>

//           <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-md mx-auto lg:mx-0">
//             Learn from builders, not influencers.
//             <br />
//             <strong className="text-neutral-200">
//               Practical guidance shaped by real-world experience.
//             </strong>
//           </p>

//           {/* Desktop CTA */}
//           <div className="hidden lg:block mt-12">
//             <Link
//               href="/mentorship"
//               className="
//                 inline-flex items-center gap-2
//                 px-8 py-4 rounded-xl
//                 bg-neutral-100 text-black
//                 hover:bg-neutral-200 transition
//               "
//             >
//               Explore Mentorship Programs →
//             </Link>
//           </div>
//         </motion.div>

//         {/* ================= RIGHT ================= */}
//         <div className="lg:col-span-7 relative space-y-14">
//           {items.map((item, i) => (
//             <MentorshipCard key={item.title} item={item} index={i} />
//           ))}
//         </div>
//       </div>

//       {/* Mobile CTA */}
//       <div className="lg:hidden mt-16 text-center">
//         <Link
//           href="/mentorship"
//           className="
//             inline-flex w-full justify-center
//             px-7 py-3 rounded-xl
//             bg-neutral-100 text-black
//             hover:bg-neutral-200 transition
//           "
//         >
//           Explore Mentorship Programs →
//         </Link>
//       </div>
//     </section>
//   );
// }

// /* --------------------------------
//    Card with depth & orbit feel
// --------------------------------- */
// function MentorshipCard({ item, index }: any) {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const rotateX = useTransform(y, [-50, 50], [8, -8]);
//   const rotateY = useTransform(x, [-50, 50], [-8, 8]);

//   function handleMove(e: any) {
//     const rect = e.currentTarget.getBoundingClientRect();
//     x.set(e.clientX - rect.left - rect.width / 2);
//     y.set(e.clientY - rect.top - rect.height / 2);
//   }

//   return (
//     <motion.article
//       onMouseMove={handleMove}
//       onMouseLeave={() => {
//         x.set(0);
//         y.set(0);
//       }}
//       initial={{ opacity: 0, y: 60, rotateX: 12 }}
//       whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
//       viewport={{ once: true }}
//       transition={{
//         duration: 1,
//         ease: "easeOut",
//         delay: index * 0.15,
//       }}
//       style={{
//         rotateX,
//         rotateY,
//         transformStyle: "preserve-3d",
//         transform: `translateZ(${item.depth}px)`,
//       }}
//       className={`
//         relative rounded-3xl p-8 sm:p-9
//         bg-neutral-900/70 backdrop-blur-xl
//         border border-white/10
//         shadow-2xl
//         hover:scale-[1.03]
//         transition
//         ${item.highlight ? "ring-1 ring-pink-500/30" : ""}
//       `}
//     >
//       {/* Orbiting light object */}
//       <div
//         aria-hidden
//         className={`
//           absolute -top-10 -right-10 w-40 h-40 rounded-full
//           bg-${item.color}-400/20 blur-2xl
//         `}
//       />

//       {/* Anchor node */}
//       <span
//         className={`
//           absolute -left-6 top-8 hidden sm:block
//           h-3 w-3 rounded-full
//           ${item.highlight ? "bg-pink-500" : "bg-neutral-600"}
//         `}
//       />

//       <h3 className="text-xl sm:text-2xl font-medium">
//         {item.title}
//       </h3>

//       <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
//         {item.desc}
//       </p>
//     </motion.article>
//   );
// }
"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";

/* --------------------------------
   Data
--------------------------------- */
const items = [
  {
    title: "1:1 Mentorship",
    desc: "Direct guidance from professionals who have shipped products, built teams, and navigated real challenges.",
    highlight: true,
    accent: "bg-rose-500",
    text: "text-rose-400",
  },
  {
    title: "Career Direction",
    desc: "Get clarity on roles, skills, and paths — from early exploration to focused growth.",
    accent: "bg-indigo-500",
    text: "text-indigo-400",
  },
  {
    title: "Industry Perspective",
    desc: "Understand how real companies work, what they expect, and how to prepare beyond tutorials.",
    accent: "bg-teal-500",
    text: "text-teal-400",
  },
];

/* --------------------------------
   Component
--------------------------------- */
export default function Mentorship() {
  return (
    <section
      id="mentorship"
      className="relative py-32 px-6 bg-[#0B0E14] overflow-hidden"
    >
      {/* Base architectural background */}
      <div className="absolute inset-0 bg-[#0B0E14]" />

      {/* Signature dot pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Right-side atmospheric mass */}
      <motion.div
        aria-hidden
        className="
          absolute right-[-20%] top-[15%]
          w-130 h-130
          rounded-full
          bg-rose-500/10
          blur-[120px]
        "
        animate={{ y: [0, -24, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-6xl mx-auto grid gap-20 lg:grid-cols-12">
        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 text-center lg:text-left"
        >
          <span className="inline-flex mb-5 px-4 py-1 text-xs rounded-full border border-white/10 text-neutral-300">
            Mentorship
          </span>

          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-100">
            Guidance shaped by
            <span className="block text-neutral-400">
              real-world experience
            </span>
          </h2>

          <p className="mt-6 text-lg text-neutral-400 max-w-md mx-auto lg:mx-0">
            Learn from builders — not influencers.
            <br />
            <span className="text-neutral-200">
              Practical insight, honest direction, long-term clarity.
            </span>
          </p>

          {/* Desktop CTA */}
          <div className="hidden lg:block mt-12">
            <Link
              href="/mentorship"
              className="
                inline-flex items-center gap-2
                px-8 py-4 rounded-xl
                bg-white text-black font-medium
                hover:bg-neutral-200 transition
              "
            >
              Explore Mentorship →
            </Link>
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <div className="lg:col-span-7 space-y-12">
          {items.map((item, i) => (
            <MentorshipCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="lg:hidden mt-20 text-center">
        <Link
          href="/mentorship"
          className="
            inline-flex w-full justify-center
            px-7 py-3 rounded-xl
            bg-white text-black
            hover:bg-neutral-200 transition
          "
        >
          Explore Mentorship →
        </Link>
      </div>
    </section>
  );
}

/* --------------------------------
   Mentorship Card (Refined Depth)
--------------------------------- */
function MentorshipCard({ item, index }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-40, 40], [6, -6]);
  const rotateY = useTransform(x, [-40, 40], [-6, 6]);

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.12 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`
        relative rounded-3xl p-8 sm:p-9
        bg-[#121621]
        border border-white/10
        transition
        hover:border-white/20
        hover:-translate-y-1
        ${item.highlight ? "ring-1 ring-rose-500/30" : ""}
      `}
    >
      {/* Accent spine */}
      <div
        className={`absolute left-0 top-0 h-full w-1 rounded-l-3xl ${item.accent}`}
      />

      {/* Ambient object */}
      <motion.div
        aria-hidden
        className={`absolute -top-12 -right-12 w-32 h-32 rounded-full ${item.accent} opacity-[0.08] blur-3xl`}
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <span className={`text-xs tracking-widest ${item.text}`}>
        {item.highlight ? "FEATURED" : "GUIDANCE"}
      </span>

      <h3 className="mt-3 text-xl sm:text-2xl font-medium text-neutral-100">
        {item.title}
      </h3>

      <p className="mt-4 text-neutral-400 leading-relaxed">
        {item.desc}
      </p>
    </motion.article>
  );
}
