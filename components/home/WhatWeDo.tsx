// "use client";

// import { motion } from "framer-motion";

// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.2,
//     },
//   },
// };

// const cardVariants = [
//   {
//     hidden: { opacity: 0, x: -60, y: 20 },
//     show: { opacity: 1, x: 0, y: 0 },
//   },
//   {
//     hidden: { opacity: 0, y: 60, scale: 0.96 },
//     show: { opacity: 1, y: 0, scale: 1 },
//   },
//   {
//     hidden: { opacity: 0, x: 60, y: 20 },
//     show: { opacity: 1, x: 0, y: 0 },
//   },
// ];

// export default function WhatWeDo() {
//   const items = [
//     {
//       title: "AI & Technology Services",
//       desc: "We design and build AI-powered products, platforms, and systems that are practical, scalable, and production-ready.",
//       accent: "from-pink-500/20 to-transparent",
//     },
//     {
//       title: "Programs & Events",
//       desc: "Structured initiatives like hackathons, challenges, and seasonal programs that connect learning with execution.",
//       accent: "from-violet-500/20 to-transparent",
//       featured: true,
//     },
//     {
//       title: "Contribution-First Platform",
//       desc: "An open ecosystem built in public, where people grow through real projects, mentorship, and collaboration.",
//       accent: "from-indigo-500/20 to-transparent",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden py-24 sm:py-28 md:py-36 px-4 sm:px-6">
//       {/* background (kept as requested) */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.06),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.06),transparent_40%)]" />

//       <div className="relative max-w-6xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="max-w-3xl mb-20"
//         >
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
//             What We Do
//           </h2>
//           <p className="mt-5 text-base sm:text-lg text-neutral-400">
//             Silicality operates at the intersection of technology, learning, and
//             community — turning ideas into real-world outcomes.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid gap-8 md:grid-cols-3 items-stretch"
//         >
//           {items.map((item, i) => (
//             <motion.div
//               key={item.title}
//               variants={cardVariants[i]}
//               transition={{ duration: 0.9, ease: "easeOut" }}
//               className={`
//                 group relative rounded-3xl
//                 border border-white/10
//                 bg-neutral-900/60 backdrop-blur-xl
//                 p-8
//                 hover:border-white/20
//                 transition
//                 ${item.featured ? "md:-mt-8 md:scale-[1.03]" : ""}
//               `}
//             >
//               {/* Accent glow */}
//               <div
//                 className={`pointer-events-none absolute inset-0 rounded-3xl
//                 bg-linear-to-br ${item.accent}
//                 opacity-0 group-hover:opacity-100 transition-opacity`}
//               />

//               {/* Floating border */}
//               <div className="absolute inset-0 rounded-3xl ring-1 ring-white/5 group-hover:ring-white/10 transition" />

//               <h3 className="relative text-xl font-medium">
//                 {item.title}
//               </h3>

//               <p className="relative mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
//                 {item.desc}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { motion, useMotionValue, useTransform } from "framer-motion";

// /* -----------------------------
//    3D Tilt Wrapper
// ------------------------------ */
// function TiltCard({ children }: { children: React.ReactNode }) {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const rotateX = useTransform(y, [-60, 60], [10, -10]);
//   const rotateY = useTransform(x, [-60, 60], [-10, 10]);

//   function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
//     const rect = e.currentTarget.getBoundingClientRect();
//     x.set(e.clientX - rect.left - rect.width / 2);
//     y.set(e.clientY - rect.top - rect.height / 2);
//   }

//   return (
//     <motion.div
//       onMouseMove={handleMouseMove}
//       onMouseLeave={() => {
//         x.set(0);
//         y.set(0);
//       }}
//       style={{
//         rotateX,
//         rotateY,
//         transformStyle: "preserve-3d",
//       }}
//       className="will-change-transform"
//     >
//       {children}
//     </motion.div>
//   );
// }

// /* -----------------------------
//    Animation Variants
// ------------------------------ */
// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.18,
//       delayChildren: 0.3,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 60 },
//   show: { opacity: 1, y: 0 },
// };

// /* -----------------------------
//    Component
// ------------------------------ */
// export default function WhatWeDo() {
//   const items = [
//     {
//       title: "AI & Technology Services",
//       desc:
//         "We design and build AI-powered products, platforms, and scalable systems that are secure, production-ready, and built for real-world impact.",
//       accent: "bg-cyan-400",
//       glow: "shadow-cyan-500/20",
//     },
//     {
//       title: "Programs & Events",
//       desc:
//         "We run structured programs, hackathons, and seasonal initiatives that turn learning into execution through real collaboration.",
//       accent: "bg-violet-400",
//       glow: "shadow-violet-500/30",
//       featured: true,
//     },
//     {
//       title: "Contribution-First Platform",
//       desc:
//         "An open ecosystem built in public where contributors grow through real projects, mentorship, and community-led innovation.",
//       accent: "bg-indigo-400",
//       glow: "shadow-indigo-500/20",
//     },
//   ];

//   return (
//     <section
//       id="what-we-do"
//       aria-labelledby="what-we-do-heading"
//       className="relative overflow-hidden py-28 sm:py-36 px-4 sm:px-6"
//     >
//       {/* SEO-friendly hidden keywords */}
//       <span className="sr-only">
//         AI services, developer programs, hackathons, open-source platform,
//         community-driven technology, Silicality
//       </span>

//       {/* Ambient Floating Objects */}
//       <motion.div
//         aria-hidden
//         className="absolute top-20 left-16 w-56 h-56 rounded-full bg-cyan-400/10 blur-3xl"
//         animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
//         transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <motion.div
//         aria-hidden
//         className="absolute bottom-32 right-20 w-72 h-72 rounded-full bg-violet-500/10 blur-3xl"
//         animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
//         transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="relative max-w-6xl mx-auto">
//         {/* Header */}
//         <motion.header
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="max-w-3xl mb-24"
//         >
//           <h2
//             id="what-we-do-heading"
//             className="text-4xl sm:text-5xl font-semibold tracking-tight"
//           >
//             What We Do
//           </h2>

//           <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
//             Silicality operates at the intersection of{" "}
//             <strong className="text-neutral-200">technology</strong>,{" "}
//             <strong className="text-neutral-200">learning</strong>, and{" "}
//             <strong className="text-neutral-200">community</strong> — turning
//             ideas into real-world outcomes.
//           </p>
//         </motion.header>

//         {/* Cards */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-120px" }}
//           className="grid gap-10 md:grid-cols-3"
//         >
//           {items.map((item) => (
//             <TiltCard key={item.title}>
//               <motion.article
//                 variants={cardVariants}
//                 transition={{ duration: 0.9, ease: "easeOut" }}
//                 itemScope
//                 itemType="https://schema.org/Service"
//                 className={`
//                   relative h-full rounded-3xl p-8
//                   border border-white/10
//                   bg-neutral-900/70 backdrop-blur-xl
//                   shadow-2xl ${item.glow}
//                   hover:border-white/20
//                   transition
//                   ${item.featured ? "md:-mt-10 md:scale-[1.05]" : ""}
//                 `}
//                 style={{ transform: "translateZ(25px)" }}
//               >
//                 {/* Floating Core Object */}
//                 <div
//                   aria-hidden
//                   className={`
//                     absolute -top-10 -right-10 w-32 h-32 rounded-full
//                     ${item.accent} opacity-20 blur-2xl
//                   `}
//                 />

//                 <h3
//                   itemProp="name"
//                   className="relative text-xl font-medium"
//                 >
//                   {item.title}
//                 </h3>

//                 <p
//                   itemProp="description"
//                   className="relative mt-4 text-base text-neutral-400 leading-relaxed"
//                 >
//                   {item.desc}
//                 </p>
//               </motion.article>
//             </TiltCard>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { motion } from "framer-motion";

// /* --------------------------------
//    Motion Variants
// --------------------------------- */
// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.25,
//     },
//   },
// };

// const card = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0 },
// };

// /* --------------------------------
//    Component
// --------------------------------- */
// export default function WhatWeDo() {
//   const items = [
//     {
//       title: "AI & Technology Services",
//       label: "BUILD",
//       desc:
//         "We design and ship AI-powered products, platforms, and infrastructure that scale responsibly and perform in real production environments.",
//       color: "from-blue-500 to-blue-400",
//       accent: "bg-blue-500",
//     },
//     {
//       title: "Programs & Events",
//       label: "LEARN",
//       desc:
//         "Structured programs, hackathons, and seasonal initiatives designed to turn learning into execution through real collaboration.",
//       color: "from-amber-400 to-orange-400",
//       accent: "bg-amber-400",
//       featured: true,
//     },
//     {
//       title: "Contribution-First Platform",
//       label: "GROW",
//       desc:
//         "An open ecosystem built in public where contributors grow through real projects, mentorship, and community-led innovation.",
//       color: "from-teal-400 to-emerald-400",
//       accent: "bg-teal-400",
//     },
//   ];

//   return (
//     <section
//       id="what-we-do"
//       className="relative py-32 px-4 sm:px-6 bg-[#0B0E14] text-neutral-100 overflow-hidden"
//     >
//       {/* subtle noise texture */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[url('/noise.png')]"
//       />

//       <div className="relative max-w-6xl mx-auto">
//         {/* Header */}
//         <motion.header
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-3xl mb-24"
//         >
//           <p className="text-sm tracking-widest text-neutral-400 uppercase">
//             What We Do
//           </p>

//           <h2 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight">
//             Turning learning into <br />
//             <span className="text-neutral-300">real-world execution</span>
//           </h2>

//           <p className="mt-6 text-lg text-neutral-400">
//             Silicality sits at the intersection of technology, education, and
//             community — building systems that people actually use.
//           </p>
//         </motion.header>

//         {/* Cards */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-120px" }}
//           className="grid gap-12 md:grid-cols-3"
//         >
//           {items.map((item) => (
//             <motion.article
//               key={item.title}
//               variants={card}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className={`
//                 relative p-8 rounded-2xl
//                 bg-neutral-900
//                 border border-white/10
//                 hover:border-white/20
//                 transition
//                 ${item.featured ? "md:-mt-10 md:scale-[1.04]" : ""}
//               `}
//             >
//               {/* Color Spine */}
//               <div
//                 className={`absolute left-0 top-0 h-full w-1 rounded-l-2xl ${item.accent}`}
//               />

//               {/* Big Label */}
//               <span className="absolute top-6 right-6 text-6xl font-bold text-white/5 select-none">
//                 {item.label}
//               </span>

//               <h3 className="relative text-xl font-medium">
//                 {item.title}
//               </h3>

//               <p className="relative mt-4 text-neutral-400 leading-relaxed">
//                 {item.desc}
//               </p>

//               {/* CTA hint */}
//               <div className="mt-6 flex items-center gap-2 text-sm text-neutral-300">
//                 <span className="h-[1px] w-6 bg-neutral-600" />
//                 Learn more
//               </div>
//             </motion.article>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";

/* --------------------------------
   Motion Variants
--------------------------------- */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.25,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

/* --------------------------------
   Card Component
--------------------------------- */
function FeatureCard({
  title,
  label,
  desc,
  accent,
  featured,
}: {
  title: string;
  label: string;
  desc: string;
  accent: string;
  featured?: boolean;
}) {
  return (
    <motion.article
      variants={card}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`
        relative p-8 rounded-2xl
        bg-neutral-900
        border border-white/10
        hover:border-white/20
        transition
        overflow-hidden
        ${featured ? "md:-mt-10 md:scale-[1.04]" : ""}
      `}
    >
      {/* Animated Accent Spine */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`absolute left-0 top-0 h-full w-1 origin-top ${accent}`}
      />

      {/* Floating Ambient Object */}
      <motion.div
        aria-hidden
        className={`absolute -top-12 -right-12 w-40 h-40 rounded-full ${accent} opacity-[0.08] blur-3xl`}
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Big Background Label */}
      <span className="absolute top-6 right-6 text-6xl font-bold text-white/5 select-none">
        {label}
      </span>

      <h3 className="relative text-xl font-medium">
        {title}
      </h3>

      <p className="relative mt-4 text-neutral-400 leading-relaxed">
        {desc}
      </p>

      {/* CTA */}
      <motion.div
        whileHover={{ x: 6 }}
        className="relative mt-6 inline-flex items-center gap-2 text-sm text-neutral-300 cursor-pointer"
      >
        <span className="h-px w-6 bg-neutral-600" />
        Learn more →
      </motion.div>
    </motion.article>
  );
}

/* --------------------------------
   Main Section
--------------------------------- */
export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="relative py-32 px-4 sm:px-6 bg-[#0B0E14] text-neutral-100 overflow-hidden"
    >
      {/* Subtle drifting grid */}
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "48px 48px"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-24"
        >
          <p className="text-sm tracking-widest text-neutral-400 uppercase">
            What We Do
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight">
            Turning learning into <br />
            <span className="text-neutral-300">
              real-world execution
            </span>
          </h2>

          <p className="mt-6 text-lg text-neutral-400">
            Silicality sits at the intersection of technology,
            education, and community — building systems
            people actually use.
          </p>
        </motion.header>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-12 md:grid-cols-3"
        >
          <FeatureCard
            title="AI & Technology Services"
            label="BUILD"
            desc="We design and ship AI-powered products, platforms, and infrastructure that scale responsibly in real production environments."
            accent="bg-blue-500"
          />

          <FeatureCard
            title="Programs & Events"
            label="LEARN"
            desc="Structured programs, hackathons, and seasonal initiatives designed to turn learning into execution through real collaboration."
            accent="bg-amber-400"
            featured
          />

          <FeatureCard
            title="Contribution-First Platform"
            label="GROW"
            desc="An open ecosystem built in public where contributors grow through real projects, mentorship, and community-led innovation."
            accent="bg-teal-400"
          />
        </motion.div>
      </div>
    </section>
  );
}
