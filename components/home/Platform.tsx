// "use client";

// import { motion } from "framer-motion";

// const pillars = [
//   {
//     title: "Real Contributions",
//     desc: "Participants work on real projects — not artificial assignments or toy problems.",
//   },
//   {
//     title: "Mentor-Guided Growth",
//     desc: "Learning is shaped by feedback from people actively building in the industry.",
//   },
//   {
//     title: "Open & Transparent",
//     desc: "Built openly with the community — decisions, progress, and mistakes included.",
//   },
// ];

// export default function Platform() {
//   return (
//     <section className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
//       {/* background depth */}
//       <div className="absolute inset-0 -z-10 bg-linear-to-b from-neutral-900/40 via-black to-black" />

//       <div className="max-w-6xl mx-auto grid gap-16 lg:grid-cols-12">

//         {/* LEFT — narrative */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="lg:col-span-5 text-center lg:text-left"
//         >
//           <span
//             className="
//               inline-block mb-5 px-4 py-1 text-xs rounded-full
//               border border-yellow-500/30 text-yellow-400
//             "
//           >
//             Build For Future
//           </span>

//           <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
//             The Silicality Platform
//           </h2>

//           <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-neutral-400 max-w-md mx-auto lg:mx-0">
//             A contribution-first platform designed to help learners grow
//             through real work, mentorship, and collaboration —
//             not certificates.
//           </p>

//           <p className="mt-6 sm:mt-8 text-sm text-neutral-500 max-w-md mx-auto lg:mx-0">
//             This is not a course platform.  
//             It’s an ecosystem that rewards learning by building,
//             feedback by doing, and growth by consistency.
//           </p>
//         </motion.div>

//         {/* RIGHT — vertical system */}
//         <div className="lg:col-span-7 relative">

//           {/* spine (hidden on small screens) */}
//           <motion.div
//             initial={{ height: 0 }}
//             whileInView={{ height: "100%" }}
//             viewport={{ once: true }}
//             transition={{ duration: 1.1, ease: "easeOut" }}
//             className="absolute left-2 top-0 w-px bg-neutral-800 hidden sm:block"
//           />

//           <div className="space-y-10 sm:space-y-14">
//             {pillars.map((item, i) => (
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
//                 {/* node (desktop only) */}
//                 <span className="absolute left-0 top-4 h-3 w-3 rounded-full bg-neutral-500 hidden sm:block" />

//                 <div
//                   className="
//                     rounded-2xl border border-neutral-800
//                     bg-neutral-900/40 backdrop-blur-xl
//                     p-5 sm:p-7
//                   "
//                 >
//                   <h3 className="text-base sm:text-xl font-medium">
//                     {item.title}
//                   </h3>

//                   <p className="mt-2 sm:mt-3 text-sm sm:text-base text-neutral-400 max-w-xl">
//                     {item.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* status */}
//           <motion.p
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="mt-10 sm:mt-14 text-sm text-neutral-500 max-w-xl sm:pl-10"
//           >
//             The platform is under active development.
//             Early programs and experiments are already live
//             through Silicality initiatives.
//           </motion.p>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    title: "Real Contributions",
    desc: "Participants work on real projects — not artificial assignments or toy problems.",
    color: "emerald",
    depth: 50,
  },
  {
    title: "Mentor-Guided Growth",
    desc: "Learning is shaped by feedback from people actively building in the industry.",
    color: "cyan",
    depth: 70,
  },
  {
    title: "Open & Transparent",
    desc: "Built openly with the community — decisions, progress, and mistakes included.",
    color: "violet",
    depth: 40,
  },
];

export default function Platform() {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      id="platform"
      className="relative overflow-hidden py-28 sm:py-36 px-6"
    >
      {/* Base */}
      <div className="absolute inset-0 bg-black" />

      {/* Ambient system field */}
      <motion.div
        aria-hidden
        className="absolute top-24 left-24 w-72 h-72 rounded-full bg-emerald-400/10 blur-3xl"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-24 right-24 w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{ y: [0, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-0 h-full w-px bg-neutral-800/60 hidden lg:block"
        animate={{ opacity: [0.15, 0.45, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-6xl mx-auto grid gap-20 lg:grid-cols-12">
        {/* LEFT — Core narrative */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="lg:col-span-5 text-center lg:text-left"
        >
          <span className="inline-flex mb-6 px-4 py-1 text-xs rounded-full border border-yellow-500/30 text-yellow-400">
            Silicality
          </span>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            The Silicality Platform
          </h2>

          <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-md mx-auto lg:mx-0">
            A contribution-first platform designed to help learners grow
            through <strong className="text-neutral-200">real work</strong>,
            mentorship, and collaboration — not certificates.
          </p>

          <p className="mt-8 text-sm text-neutral-500 max-w-md mx-auto lg:mx-0">
            This is not a course platform.
            <br />
            It’s an ecosystem that rewards learning by building,
            feedback by doing, and growth by consistency.
          </p>
        </motion.div>

        {/* RIGHT — System pillars */}
        <div className="lg:col-span-7 relative space-y-16">
          {pillars.map((item, i) => (
            <PlatformPillar key={item.title} item={item} index={i} />
          ))}

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-sm text-neutral-500 max-w-xl sm:pl-10"
          >
            The platform is under active development.
            Early programs and experiments are already live
            through Silicality initiatives.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------
   Pillar Card (3D, spatial)
--------------------------------- */
function PlatformPillar({ item, index }: any) {
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
      transition={{
        duration: 1,
        ease: "easeOut",
        delay: index * 0.15,
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transform: `translateZ(${item.depth}px)`,
      }}
      className="
        relative rounded-3xl p-8 sm:p-9
        bg-neutral-900/70 backdrop-blur-xl
        border border-white/10
        shadow-2xl
        hover:scale-[1.03]
        transition
      "
    >
      {/* Orbiting system object */}
      <div
        aria-hidden
        className={`
          absolute -top-10 -right-10 w-40 h-40 rounded-full
          bg-${item.color}-400/20 blur-2xl
        `}
      />

      {/* Anchor node */}
      <span className="absolute -left-6 top-8 hidden sm:block h-3 w-3 rounded-full bg-neutral-600" />

      <h3 className="text-xl sm:text-2xl font-medium">
        {item.title}
      </h3>

      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
        {item.desc}
      </p>
    </motion.article>
  );
}
