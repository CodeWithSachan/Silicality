// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// const programs = [
//   {
//     title: "Seasonal Programs",
//     desc: "Focused initiatives like Spring that guide participants through real contributions over a defined period.",
//     featured: true,
//   },
//   {
//     title: "Hackathons & Challenges",
//     desc: "Time-bound events that encourage rapid problem-solving, teamwork, and hands-on building.",
//   },
//   {
//     title: "Quizzes & Learning Sprints",
//     desc: "Lightweight formats to test knowledge, reinforce fundamentals, and stay engaged.",
//   },
// ];

// export default function Programs() {
//   return (
//     <section className="relative py-20 sm:py-32 px-4 sm:px-6 bg-neutral-900/40 overflow-hidden">
//       <div className="max-w-6xl mx-auto relative">

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="max-w-3xl text-center sm:text-left"
//         >
//           <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
//             Programs & Events
//           </h2>

//           <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-neutral-400">
//             Structured initiatives designed to turn learning into real
//             experience through participation, collaboration, and execution.
//           </p>
//         </motion.div>

//         {/* Timeline */}
//         <div className="relative mt-14 sm:mt-20 sm:pl-10">

//           {/* Vertical line (desktop only) */}
//           <div className="absolute left-3 top-0 bottom-0 w-px bg-neutral-800 hidden sm:block" />

//           <div className="space-y-6 sm:space-y-8">
//             {programs.map((item, i) => (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.7,
//                   ease: "easeOut",
//                   delay: i * 0.08,
//                 }}
//                 className={`
//                   relative rounded-2xl border backdrop-blur-xl transition
//                   ${item.featured
//                     ? "border-pink-500/40 bg-neutral-900/60"
//                     : "border-neutral-800 bg-neutral-900/40"}
//                   ${item.featured ? "p-6 sm:p-8" : "p-5 sm:p-6"}
//                   sm:hover:translate-x-1
//                   hover:bg-neutral-900/60
//                 `}
//               >
//                 {/* Timeline node (desktop only) */}
//                 <span
//                   className={`
//                     absolute -left-7 top-7 h-3 w-3 rounded-full hidden sm:block
//                     ${item.featured ? "bg-pink-500" : "bg-neutral-500"}
//                   `}
//                 >
//                   {item.featured && (
//                     <span className="absolute inset-0 rounded-full animate-ping bg-pink-500/40" />
//                   )}
//                 </span>

//                 {/* Featured badge */}
//                 {item.featured && (
//                   <span
//                     className="
//                       inline-flex mb-3 rounded-full
//                       border border-pink-500/40 bg-pink-500/10
//                       px-3 py-1 text-xs font-medium text-pink-400
//                     "
//                   >
//                     Featured Program
//                   </span>
//                 )}

//                 <h3 className="text-base sm:text-xl font-medium">
//                   {item.title}
//                 </h3>

//                 <p className="mt-2 sm:mt-3 text-sm sm:text-base text-neutral-400">
//                   {item.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="mt-12 sm:mt-20 text-center sm:text-left"
//         >
//           <Link
//             href="/programs"
//             className="
//               inline-flex w-full sm:w-auto justify-center items-center gap-2
//               px-7 py-3 rounded-xl
//               bg-neutral-100 text-black font-medium
//               border border-neutral-200
//               hover:bg-neutral-200 transition
//             "
//           >
//             Explore Programs →
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import Link from "next/link";
// import { useRef } from "react";

// const programs = [
//   {
//     title: "Seasonal Programs",
//     desc: "Focused initiatives like Spring that guide participants through real contributions over a defined period.",
//     featured: true,
//     depth: 60,
//     color: "pink",
//   },
//   {
//     title: "Hackathons & Challenges",
//     desc: "Time-bound events that encourage rapid problem-solving, teamwork, and hands-on building.",
//     depth: 40,
//     color: "violet",
//   },
//   {
//     title: "Quizzes & Learning Sprints",
//     desc: "Lightweight formats to test knowledge, reinforce fundamentals, and stay engaged.",
//     depth: 30,
//     color: "indigo",
//   },
// ];

// export default function Programs() {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const driftY = useTransform(scrollYProgress, [0, 1], [80, -80]);
//   const driftSlow = useTransform(scrollYProgress, [0, 1], [40, -40]);

//   return (
//     <section
//       ref={ref}
//       id="programs"
//       className="relative overflow-hidden py-28 sm:py-36 px-6"
//     >
//       {/* Base background */}
//       <div className="absolute inset-0 bg-black" />

//       {/* Floating light objects */}
//       <motion.div
//         aria-hidden
//         className="absolute top-24 left-24 w-72 h-72 rounded-full bg-pink-400/10 blur-3xl"
//         style={{ y: driftY }}
//       />

//       <motion.div
//         aria-hidden
//         className="absolute bottom-32 right-20 w-80 h-80 rounded-full bg-indigo-400/10 blur-3xl"
//         style={{ y: driftSlow }}
//       />

//       <motion.div
//         aria-hidden
//         className="absolute top-1/3 right-1/3 w-1 h-96 bg-violet-400/20 blur"
//         animate={{ opacity: [0.2, 0.5, 0.2] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="relative max-w-6xl mx-auto">
//         {/* Header */}
//         <motion.header
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           className="max-w-3xl"
//         >
//           <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
//             Programs & Events
//           </h2>

//           <p className="mt-6 text-base sm:text-lg text-neutral-400">
//             Structured initiatives designed to turn learning into{" "}
//             <strong className="text-neutral-200">real experience</strong> through
//             participation, collaboration, and execution.
//           </p>
//         </motion.header>

//         {/* Spatial Timeline */}
//         <div className="relative mt-20 space-y-10">
//           {/* Axis */}
//           <div className="absolute left-4 top-0 bottom-0 w-px bg-neutral-800 hidden sm:block" />

//           {programs.map((item, i) => (
//             <motion.article
//               key={item.title}
//               initial={{ opacity: 0, y: 60, rotateX: 12 }}
//               whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 1,
//                 ease: "easeOut",
//                 delay: i * 0.15,
//               }}
//               style={{
//                 transformStyle: "preserve-3d",
//                 transform: `translateZ(${item.depth}px)`,
//               }}
//               className={`
//                 relative ml-0 sm:ml-10 rounded-3xl
//                 bg-neutral-900/70 backdrop-blur-xl
//                 border border-white/10
//                 p-7 sm:p-9
//                 shadow-2xl
//                 hover:scale-[1.03]
//                 transition
//                 ${item.featured ? "ring-1 ring-pink-500/30" : ""}
//               `}
//             >
//               {/* Node */}
//               <span
//                 className={`
//                   absolute -left-9 top-8 hidden sm:block
//                   h-3 w-3 rounded-full
//                   ${
//                     item.featured
//                       ? "bg-pink-500"
//                       : "bg-neutral-500"
//                   }
//                 `}
//               />

//               {/* Ambient orb */}
//               <div
//                 aria-hidden
//                 className={`
//                   absolute -top-10 -right-10 w-40 h-40 rounded-full
//                   bg-${item.color}-400/20 blur-2xl
//                 `}
//               />

//               {item.featured && (
//                 <span className="inline-flex mb-4 rounded-full px-3 py-1 text-xs font-medium border border-pink-500/40 bg-pink-500/10 text-pink-400">
//                   Featured Program
//                 </span>
//               )}

//               <h3 className="text-xl sm:text-2xl font-medium">
//                 {item.title}
//               </h3>

//               <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
//                 {item.desc}
//               </p>
//             </motion.article>
//           ))}
//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="mt-20"
//         >
//           <Link
//             href="/programs"
//             className="
//               inline-flex items-center gap-2
//               px-8 py-4 rounded-xl
//               bg-neutral-100 text-black font-medium
//               hover:bg-neutral-200
//               transition
//             "
//           >
//             Explore Programs →
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* --------------------------------
   Data
--------------------------------- */
const programs = [
  {
    title: "Seasonal Programs",
    desc: "Focused initiatives like Spring that guide participants through real contributions over a defined period.",
    featured: true,
    accent: "rose",
  },
  {
    title: "Hackathons & Challenges",
    desc: "Time-bound events that encourage rapid problem-solving, teamwork, and hands-on building.",
    accent: "indigo",
  },
  {
    title: "Quizzes & Learning Sprints",
    desc: "Lightweight formats to test knowledge, reinforce fundamentals, and stay engaged.",
    accent: "teal",
  },
];

/* --------------------------------
   Component
--------------------------------- */
export default function Programs() {
  return (
    <section
      id="programs"
      className="relative py-32 px-6 bg-[#0B0E14] overflow-hidden"
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-[#0B0E14]" />

      {/* Subtle dot / star pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Diagonal atmospheric cut */}
      <div
        aria-hidden
        className="
          absolute top-[12%] right-[-20%]
          w-[120%] h-55
          bg-white/5
          -rotate-6
        "
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <header className="max-w-3xl">
          <span className="inline-flex mb-5 px-4 py-1 text-xs rounded-full border border-white/10 text-neutral-300">
            Programs
          </span>

          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-100">
            Learning through
            <span className="block text-neutral-400">
              real participation
            </span>
          </h2>

          <p className="mt-6 text-lg text-neutral-400">
            Structured initiatives designed to turn learning into
            <span className="text-neutral-200">
              {" "}real experience
            </span>
            — through collaboration, execution, and reflection.
          </p>
        </header>

        {/* Program Cards */}
        <div className="relative mt-24 space-y-12">
          {programs.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className={`
                relative
                rounded-3xl
                bg-[#121621]
                border border-white/10
                p-8 sm:p-9
                transition
                hover:-translate-y-1
                hover:border-white/20
                ${item.featured ? "ring-1 ring-rose-500/30" : ""}
              `}
            >
              {/* Accent spine */}
              <div
                className={`absolute left-0 top-0 h-full w-1 rounded-l-3xl bg-${item.accent}-500`}
              />

              {/* Ambient orb */}
              <motion.div
                aria-hidden
                className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-${item.accent}-500 opacity-[0.08] blur-3xl`}
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {item.featured && (
                <span className="inline-flex mb-4 rounded-full px-3 py-1 text-xs font-medium border border-rose-500/40 bg-rose-500/10 text-rose-400">
                  Featured Program
                </span>
              )}

              <h3 className="text-xl sm:text-2xl font-medium text-neutral-100">
                {item.title}
              </h3>

              <p className="mt-4 text-neutral-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24">
          <Link
            href="/programs"
            className="
              inline-flex items-center gap-2
              px-8 py-4 rounded-xl
              bg-white text-black font-medium
              hover:bg-neutral-200 transition
            "
          >
            Explore Programs →
          </Link>
        </div>
      </div>
    </section>
  );
}
