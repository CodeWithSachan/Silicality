"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function MentorshipClient() {
  return (
    <section
      className="px-4 sm:px-6 py-20 md:py-28"
      aria-labelledby="mentorship-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1
            id="mentorship-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Mentorship & Career Guidance
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-400">
            Practical guidance from experienced builders who’ve shipped real
            products, navigated real challenges, and worked in real teams.
          </p>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
          className="mt-12 sm:mt-16 relative h-55 sm:h-65 md:h-105
            rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-800"
          >

          <Image
            src="/mentorship-hero.jpg"
            alt="Developer mentorship and career guidance session"
            fill
            className="object-cover opacity-90"
            priority
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mt-24 sm:mt-32 rounded-2xl sm:rounded-3xl
            border border-neutral-800
            bg-linear-to-br from-neutral-900/80 via-neutral-900 to-black
            px-6 sm:px-8 py-12 sm:py-16 text-center
          "
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
            Ready to build your future?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">
            Get guidance that actually helps you move forward.
          </p>

          <Link
            href="/contact"
            className="
              inline-flex items-center justify-center
              mt-8 px-7 py-3 rounded-xl
              bg-white text-black font-medium
              hover:bg-neutral-200 transition
            "
          >
            Request Mentorship
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// /* --------------------------------
//    Motion preset
// --------------------------------- */
// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show: { opacity: 1, y: 0 },
// };

// export default function MentorshipSystem() {
//   return (
//     <main className="bg-black text-white overflow-x-hidden">

//       {/* =====================================================
//           HERO
//       ====================================================== */}
//       <section className="relative px-6 py-28 border-b border-white/10">
//         {/* Grid background */}
//         <div
//           aria-hidden
//           className="absolute inset-0 opacity-10"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
//             backgroundSize: "40px 40px",
//           }}
//         />

//         <div className="relative max-w-7xl mx-auto">
//           <motion.div
//             initial="hidden"
//             animate="show"
//             variants={fadeUp}
//             transition={{ duration: 0.8 }}
//           >
//             <p className="text-xs tracking-[0.3em] uppercase text-neutral-500">
//               System Status: Active • Limited Intake
//             </p>

//             <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
//               Mentorship &
//               <br />
//               Career Guidance
//             </h1>

//             <p className="mt-8 max-w-2xl text-neutral-400 text-lg">
//               High-density feedback loops for product builders, engineers,
//               and technical founders who want structured growth — not advice,
//               but execution clarity.
//             </p>

//             <div className="mt-10 flex gap-4 flex-wrap">
//               <Link
//                 href="/contact"
//                 className="px-8 py-3 bg-white text-black font-medium hover:bg-neutral-200 transition"
//               >
//                 Initialize Mentorship
//               </Link>

//               <Link
//                 href="#architecture"
//                 className="px-8 py-3 border border-white/20 hover:bg-white/5 transition"
//               >
//                 View Architecture
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* =====================================================
//           BUILDER ADVANTAGE
//       ====================================================== */}
//       <section className="px-6 py-24 border-b border-white/10">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-semibold tracking-tight">
//             The Builder's Advantage
//           </h2>

//           <div className="mt-14 grid md:grid-cols-4 gap-6">
//             {[
//               {
//                 title: "1:1 Builder Feedback",
//                 desc: "Rigorous architecture review and execution-level critique with zero abstraction.",
//               },
//               {
//                 title: "Career Navigation",
//                 desc: "Move from competent to sharp technical positioning with precision planning.",
//               },
//               {
//                 title: "Execution Review",
//                 desc: "Deep-dive assessment of public builds and strategic execution gaps.",
//               },
//               {
//                 title: "Industry Insight",
//                 desc: "Unfiltered operational truth from real-world product environments.",
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={item.title}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 variants={fadeUp}
//                 transition={{ delay: i * 0.08, duration: 0.7 }}
//                 className="border border-white/10 p-6"
//               >
//                 <h3 className="text-lg font-medium">
//                   {item.title}
//                 </h3>
//                 <p className="mt-3 text-sm text-neutral-400">
//                   {item.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           WHO THIS IS FOR
//       ====================================================== */}
//       <section className="px-6 py-24 border-b border-white/10">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

//           <div>
//             <h2 className="text-3xl font-semibold tracking-tight">
//               Who This Is For
//             </h2>

//             <p className="mt-6 text-neutral-400">
//               This is a selective environment. Designed for builders looking
//               to bridge the gap from competence to mastery through structured
//               execution cycles.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             {["Builders", "Engineers", "Leads", "Founders"].map((role) => (
//               <div
//                 key={role}
//                 className="border border-white/10 p-6 text-sm text-neutral-300"
//               >
//                 {role}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           ARCHITECTURE FLOW
//       ====================================================== */}
//       <section
//         id="architecture"
//         className="px-6 py-28 border-b border-white/10"
//       >
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-semibold tracking-tight">
//             Mentorship Flow
//           </h2>

//           <div className="mt-16 grid md:grid-cols-4 gap-8 text-sm text-neutral-400">
//             {[
//               "Initial Review",
//               "Strategy Session",
//               "Action Plan",
//               "Checkpoints",
//             ].map((step, i) => (
//               <div key={i} className="relative">
//                 <div className="border border-white/10 p-6">
//                   {step}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           FINAL CTA
//       ====================================================== */}
//       <section className="px-6 py-32 text-center">
//         <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
//           Commit to mastery.
//         </h2>

//         <Link
//           href="/contact"
//           className="inline-block mt-12 px-12 py-4 bg-white text-black font-medium hover:bg-neutral-200 transition"
//         >
//           Initialize Application Process
//         </Link>

//         <p className="mt-8 text-xs tracking-widest uppercase text-neutral-500">
//           Next Entry Cycle: Limited
//         </p>
//       </section>
//     </main>
//   );
// }



// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// const fadeUp = {
//   hidden: { opacity: 0, y: 32 },
//   show: { opacity: 1, y: 0 },
// };

// const fadeIn = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1 },
// };

// const slideInLeft = {
//   hidden: { opacity: 0, x: -40 },
//   show: { opacity: 1, x: 0 },
// };

// export default function MentorshipSystem() {
//   return (
//     <main className="bg-slate-950 text-white overflow-x-hidden">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Crimson+Text:ital@0;1&display=swap');
        
//         .serif-display {
//           font-family: 'Playfair Display', serif;
//           letter-spacing: -0.01em;
//         }
        
//         .serif-body {
//           font-family: 'Crimson Text', serif;
//         }
        
//         .accent-gold {
//           color: #d4af37;
//         }
        
//         .gradient-text {
//           background: linear-gradient(135deg, #d4af37 0%, #f4e4c1 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }
        
//         .grid-pattern {
//           background-image: 
//             linear-gradient(0deg, transparent 24%, rgba(212, 175, 55, 0.08) 25%, rgba(212, 175, 55, 0.08) 26%, transparent 27%, transparent 74%, rgba(212, 175, 55, 0.08) 75%, rgba(212, 175, 55, 0.08) 76%, transparent 77%, transparent),
//             linear-gradient(90deg, transparent 24%, rgba(212, 175, 55, 0.08) 25%, rgba(212, 175, 55, 0.08) 26%, transparent 27%, transparent 74%, rgba(212, 175, 55, 0.08) 75%, rgba(212, 175, 55, 0.08) 76%, transparent 77%, transparent);
//           background-size: 60px 60px;
//         }
//       `}</style>

//       {/* =====================================================
//           HERO
//       ====================================================== */}
//       <section className="relative px-6 md:px-12 py-32 md:py-40 border-b border-slate-800">
//         <div className="grid-pattern absolute inset-0" />
        
//         <div className="relative max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-start">
//             {/* Left column */}
//             <motion.div
//               initial="hidden"
//               animate="show"
//               variants={fadeUp}
//               transition={{ duration: 0.9 }}
//             >
//               <p className="text-xs tracking-[0.2em] uppercase text-slate-400 mb-8">
//                 Selective Mentorship
//               </p>
              
//               <h1 className="serif-display text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8">
//                 Build with
//                 <br />
//                 <span className="gradient-text">clarity.</span>
//               </h1>
              
//               <p className="serif-body text-xl md:text-2xl text-slate-300 max-w-xl leading-relaxed mb-12">
//                 High-density feedback for builders, engineers, and founders who've moved beyond advice to execution. Structured growth through rigorous critique.
//               </p>
              
//               <div className="flex gap-4 flex-wrap">
//                 <Link
//                   href="/contact"
//                   className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-950 font-semibold hover:shadow-lg hover:shadow-yellow-500/30 transition duration-300"
//                 >
//                   Start Mentorship
//                 </Link>

//                 <Link
//                   href="#process"
//                   className="px-8 py-4 border border-slate-600 hover:border-yellow-500/50 hover:bg-slate-900/50 transition duration-300 font-medium"
//                 >
//                   View Process
//                 </Link>
//               </div>
//             </motion.div>

//             {/* Right column - visual accent */}
//             <motion.div
//               initial="hidden"
//               animate="show"
//               variants={slideInLeft}
//               transition={{ duration: 0.9, delay: 0.2 }}
//               className="hidden md:block"
//             >
//               <div className="relative h-96 lg:h-full">
//                 <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />
//                 <div className="absolute bottom-12 left-12 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl" />
                
//                 <div className="relative z-10 border border-slate-700 p-8 bg-slate-900/40 backdrop-blur-sm">
//                   <p className="accent-gold text-sm font-semibold mb-4">What You Get</p>
//                   <ul className="space-y-4 text-sm text-slate-300">
//                     <li className="flex items-start gap-3">
//                       <span className="accent-gold font-bold">→</span>
//                       <span>1:1 architectural feedback, unfiltered</span>
//                     </li>
//                     <li className="flex items-start gap-3">
//                       <span className="accent-gold font-bold">→</span>
//                       <span>Execution-level critique with zero abstraction</span>
//                     </li>
//                     <li className="flex items-start gap-3">
//                       <span className="accent-gold font-bold">→</span>
//                       <span>Career positioning and strategy sessions</span>
//                     </li>
//                     <li className="flex items-start gap-3">
//                       <span className="accent-gold font-bold">→</span>
//                       <span>Industry insights from operational leaders</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           WHO & WHY
//       ====================================================== */}
//       <section className="px-6 md:px-12 py-24 md:py-32 border-b border-slate-800">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-3 gap-12 md:gap-16">
//             <motion.div
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//               variants={fadeUp}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="serif-display text-4xl md:text-5xl font-bold mb-6">
//                 Built for builders.
//               </h2>
//               <p className="text-slate-400 text-lg leading-relaxed">
//                 Not for everyone. Only those committed to bridging the gap between competence and mastery through rigorous, structured execution cycles.
//               </p>
//             </motion.div>

//             {[
//               { label: "Founders", desc: "Scaling products and teams" },
//               { label: "Engineers", desc: "Technical depth and leadership" },
//               { label: "Leads", desc: "Architectural decision-making" },
//             ].map((item, i) => (
//               <motion.div
//                 key={item.label}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 variants={fadeUp}
//                 transition={{ delay: i * 0.1, duration: 0.8 }}
//                 className="group relative"
//               >
//                 <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition duration-300" />
//                 <div className="relative border border-slate-700 p-6 group-hover:border-yellow-500/30 transition duration-300">
//                   <p className="serif-display text-2xl font-bold mb-3">{item.label}</p>
//                   <p className="text-slate-400 text-sm">{item.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           PROCESS FLOW
//       ====================================================== */}
//       <section
//         id="process"
//         className="px-6 md:px-12 py-24 md:py-32 border-b border-slate-800"
//       >
//         <div className="max-w-6xl mx-auto">
//           <motion.h2
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={fadeUp}
//             transition={{ duration: 0.8 }}
//             className="serif-display text-5xl md:text-6xl font-bold mb-16 text-center"
//           >
//             The Mentorship Flow
//           </motion.h2>

//           <div className="grid md:grid-cols-4 gap-6 md:gap-4">
//             {[
//               {
//                 num: "01",
//                 title: "Initial Assessment",
//                 desc: "Review your current trajectory, gaps, and goals. No surface-level evaluation.",
//               },
//               {
//                 num: "02",
//                 title: "Strategy Session",
//                 desc: "Develop a custom execution plan aligned with your stage and ambitions.",
//               },
//               {
//                 num: "03",
//                 title: "Structured Cycles",
//                 desc: "Regular feedback loops on decisions, code, architecture, and direction.",
//               },
//               {
//                 num: "04",
//                 title: "Mastery Checkpoints",
//                 desc: "Measurable progression with honest assessment of growth and blind spots.",
//               },
//             ].map((step, i) => (
//               <motion.div
//                 key={i}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 variants={fadeUp}
//                 transition={{ delay: i * 0.12, duration: 0.8 }}
//                 className="group relative"
//               >
//                 <div className="absolute -inset-0.5 bg-gradient-to-b from-yellow-500/20 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition duration-500 blur" />
//                 <div className="relative border border-slate-700 p-8 bg-slate-900/30 group-hover:border-yellow-500/50 transition duration-300">
//                   <p className="accent-gold serif-display text-4xl font-bold mb-4">
//                     {step.num}
//                   </p>
//                   <p className="serif-display text-xl font-bold mb-3">{step.title}</p>
//                   <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           TESTIMONIAL / PROOF
//       ====================================================== */}
//       <section className="px-6 md:px-12 py-24 md:py-32 border-b border-slate-800">
//         <div className="max-w-5xl mx-auto">
//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={fadeUp}
//             transition={{ duration: 0.8 }}
//             className="border border-slate-700 p-10 md:p-14 bg-slate-900/40 backdrop-blur-sm"
//           >
//             <p className="text-slate-500 text-sm font-semibold mb-6">Selective Program</p>
            
//             <blockquote className="serif-body text-2xl md:text-3xl leading-relaxed mb-8">
//               "This isn't generic career advice. It's unfiltered feedback on your execution, your decisions, your positioning. Exactly what serious builders need."
//             </blockquote>
            
//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600" />
//               <div>
//                 <p className="font-semibold text-sm">A Founder, Series A</p>
//                 <p className="text-slate-500 text-xs">Product / Growth</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* =====================================================
//           CTA FINAL
//       ====================================================== */}
//       <section className="px-6 md:px-12 py-32 md:py-40 text-center relative overflow-hidden">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 max-w-3xl mx-auto"
//         >
//           <p className="text-xs tracking-[0.2em] uppercase text-slate-500 mb-8">
//             Next Cohort Forming
//           </p>
          
//           <h2 className="serif-display text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-10">
//             Ready to commit?
//           </h2>

//           <p className="text-lg text-slate-300 mb-12 max-w-xl mx-auto leading-relaxed">
//             Mentorship spots fill fast. Early conversation required. 
//           </p>

//           <Link
//             href="/contact"
//             className="inline-block px-10 py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-950 font-semibold text-lg hover:shadow-xl hover:shadow-yellow-500/40 transition duration-300"
//           >
//             Apply for Mentorship
//           </Link>

//           <p className="mt-12 text-xs tracking-widest uppercase text-slate-600">
//             → Serious builders only ←
//           </p>
//         </motion.div>
//       </section>
//     </main>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0 },
// };

// export default function MentorshipSystem() {
//   return (
//     <main className="relative bg-black text-white overflow-x-hidden">

//       {/* =========================================
//           GLOBAL BACKGROUND GRID
//       ========================================== */}
//       <div
//         aria-hidden
//         className="fixed inset-0 -z-50 opacity-[0.07]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
//           backgroundSize: "60px 60px",
//         }}
//       />

//       {/* =========================================
//           HERO
//       ========================================== */}
//       <section className="relative px-6 py-32">

//         {/* subtle radial glow */}
//         <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 blur-[140px] -z-10" />

//         <div className="max-w-7xl mx-auto">

//           <motion.div
//             initial="hidden"
//             animate="show"
//             variants={fadeUp}
//             transition={{ duration: 0.8 }}
//           >
//             <p className="text-xs tracking-[0.3em] uppercase text-neutral-500">
//               SYSTEM STATUS: ACTIVE • LIMITED INTAKE
//             </p>

//             <h1 className="mt-8 text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tight leading-[1.05]">
//               Mentorship &
//               <br />
//               <span className="text-neutral-400">Career Guidance</span>
//             </h1>

//             <p className="mt-10 max-w-2xl text-neutral-400 text-lg leading-relaxed">
//               Structured, high-density feedback loops for engineers and product
//               builders who want clarity, precision, and execution velocity.
//             </p>

//             <div className="mt-12 flex gap-6 flex-wrap">
//               <Link
//                 href="/contact"
//                 className="px-10 py-4 bg-white text-black font-medium hover:scale-105 transition"
//               >
//                 Initialize Mentorship
//               </Link>

//               <Link
//                 href="#architecture"
//                 className="px-10 py-4 border border-white/20 hover:bg-white/5 transition"
//               >
//                 View Architecture
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* =========================================
//           ADVANTAGE SECTION
//       ========================================== */}
//       <section className="px-6 py-28 border-t border-white/10">
//         <div className="max-w-7xl mx-auto">

//           <h2 className="text-3xl font-semibold tracking-tight">
//             The Builder's Advantage
//           </h2>

//           <div className="mt-16 grid md:grid-cols-4 gap-6">
//             {[
//               "1:1 Builder Feedback",
//               "Career Navigation",
//               "Execution Review",
//               "Industry Insight",
//             ].map((title, i) => (
//               <motion.div
//                 key={title}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 variants={fadeUp}
//                 transition={{ delay: i * 0.08, duration: 0.7 }}
//                 whileHover={{ y: -6 }}
//                 className="
//                   relative group
//                   border border-white/10
//                   bg-white/[0.02]
//                   backdrop-blur-md
//                   p-8
//                   transition
//                 "
//               >
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/5 transition" />

//                 <h3 className="text-lg font-medium relative z-10">
//                   {title}
//                 </h3>

//                 <p className="mt-4 text-sm text-neutral-400 relative z-10">
//                   High-precision guidance with zero abstraction and real-world context.
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           WHO THIS IS FOR
//       ========================================== */}
//       <section className="px-6 py-28 border-t border-white/10">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

//           <div>
//             <h2 className="text-3xl font-semibold tracking-tight">
//               Who This Is For
//             </h2>

//             <p className="mt-8 text-neutral-400 leading-relaxed">
//               A selective environment designed for builders ready to elevate
//               execution standards and technical positioning.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 gap-6">
//             {["Builders", "Engineers", "Leads", "Founders"].map((role) => (
//               <div
//                 key={role}
//                 className="
//                   border border-white/10
//                   p-8
//                   bg-white/[0.02]
//                   hover:bg-white/[0.05]
//                   transition
//                 "
//               >
//                 {role}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           ARCHITECTURE FLOW
//       ========================================== */}
//       <section
//         id="architecture"
//         className="px-6 py-32 border-t border-white/10"
//       >
//         <div className="max-w-6xl mx-auto text-center">

//           <h2 className="text-3xl font-semibold tracking-tight">
//             Mentorship Flow
//           </h2>

//           <div className="mt-20 grid md:grid-cols-4 gap-8">
//             {[
//               "Initial Review",
//               "Strategy Session",
//               "Action Plan",
//               "Checkpoints",
//             ].map((step, i) => (
//               <motion.div
//                 key={step}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 variants={fadeUp}
//                 transition={{ delay: i * 0.1 }}
//                 className="
//                   border border-white/10
//                   bg-white/[0.02]
//                   p-8
//                 "
//               >
//                 {step}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           FINAL CTA
//       ========================================== */}
//       <section className="px-6 py-32 text-center border-t border-white/10">
//         <h2 className="text-5xl font-semibold tracking-tight">
//           Commit to mastery.
//         </h2>

//         <Link
//           href="/contact"
//           className="inline-block mt-12 px-16 py-5 bg-white text-black font-medium hover:scale-105 transition"
//         >
//           Initialize Application Process
//         </Link>

//         <p className="mt-8 text-xs tracking-widest uppercase text-neutral-500">
//           Next Cohort: Limited
//         </p>
//       </section>

//     </main>
//   );
// }
// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0 },
// };

// export default function MentorshipSystem() {
//   return (
//     <main className="relative bg-black text-white overflow-x-hidden">

//       {/* Background Grid */}
//       <div
//         aria-hidden
//         className="fixed inset-0 -z-50 opacity-[0.06]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
//           backgroundSize: "60px 60px",
//         }}
//       />

//       {/* ================================= HERO ================================= */}
//       <section className="relative px-6 py-32 text-center">
//         <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-white/5 blur-[160px] -z-10" />

//         <motion.div
//           initial="hidden"
//           animate="show"
//           variants={fadeUp}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto"
//         >
//           <p className="text-xs tracking-[0.3em] uppercase text-neutral-500">
//             COHORT-BASED • LIMITED SEATS
//           </p>

//           <h1 className="mt-8 text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tight leading-[1.05]">
//             Build Real Products.
//             <br />
//             <span className="text-neutral-400">Not Just Tutorials.</span>
//           </h1>

//           <p className="mt-10 text-neutral-400 text-lg leading-relaxed">
//             An execution-first mentorship program designed for serious builders 
//             who want production-level thinking, structured feedback, and real portfolio proof.
//           </p>

//           <div className="mt-12 flex justify-center gap-6 flex-wrap">
//             <Link
//               href="/apply"
//               className="px-10 py-4 bg-white text-black font-medium hover:scale-105 transition"
//             >
//               Apply for Cohort
//             </Link>

//             <Link
//               href="#program"
//               className="px-10 py-4 border border-white/20 hover:bg-white/5 transition"
//             >
//               View Program
//             </Link>
//           </div>
//         </motion.div>
//       </section>

//       {/* ================================= WHO THIS IS FOR ================================= */}
//       <section className="px-6 py-28 border-t border-white/10">
//         <div className="max-w-6xl mx-auto text-center">

//           <h2 className="text-3xl font-semibold tracking-tight">
//             This Program Is For You If —
//           </h2>

//           <div className="mt-16 grid md:grid-cols-2 gap-8 text-left">
//             {[
//               "You’re tired of endless tutorials.",
//               "You want real production-level feedback.",
//               "You’re serious about upgrading your execution.",
//               "You can commit 10–15 hrs per week.",
//             ].map((item, i) => (
//               <motion.div
//                 key={item}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 variants={fadeUp}
//                 transition={{ delay: i * 0.08 }}
//                 className="border border-white/10 bg-white/[0.02] p-8"
//               >
//                 {item}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================================= WHAT YOU GET ================================= */}
//       <section id="program" className="px-6 py-28 border-t border-white/10">
//         <div className="max-w-7xl mx-auto">

//           <h2 className="text-3xl font-semibold tracking-tight">
//             What You Get
//           </h2>

//           <div className="mt-16 grid md:grid-cols-3 gap-6">
//             {[
//               "Weekly Live Mentorship Sessions",
//               "Real-World Project Builds",
//               "1:1 Code & Architecture Review",
//               "Career & Positioning Guidance",
//               "Execution Feedback Loops",
//               "Portfolio-Ready Output",
//             ].map((item, i) => (
//               <motion.div
//                 key={item}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 variants={fadeUp}
//                 transition={{ delay: i * 0.05 }}
//                 className="border border-white/10 bg-white/[0.02] p-8"
//               >
//                 {item}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================================= STRUCTURE ================================= */}
//       <section className="px-6 py-28 border-t border-white/10 text-center">
//         <div className="max-w-5xl mx-auto">

//           <h2 className="text-3xl font-semibold tracking-tight">
//             Program Structure
//           </h2>

//           <p className="mt-6 text-neutral-400">
//             8 Weeks • Cohort-Based • Limited to 12 Builders
//           </p>

//           <div className="mt-16 grid md:grid-cols-4 gap-6">
//             {[
//               "Foundation Audit",
//               "Strategy & Planning",
//               "Build & Execution",
//               "Final Review & Positioning",
//             ].map((step) => (
//               <div
//                 key={step}
//                 className="border border-white/10 bg-white/[0.02] p-8"
//               >
//                 {step}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================================= PRICING ================================= */}
//       <section className="px-6 py-32 border-t border-white/10 text-center">
//         <div className="max-w-4xl mx-auto">

//           <h2 className="text-3xl font-semibold tracking-tight">
//             Cohort Investment
//           </h2>

//           <div className="mt-16 border border-white/10 bg-white/[0.02] p-12">
//             <p className="text-neutral-400 text-sm uppercase tracking-widest">
//               Early Cohort Pricing
//             </p>

//             <p className="mt-6 text-6xl font-semibold">
//               ₹15,000
//             </p>

//             <p className="mt-6 text-neutral-400">
//               Full 8-Week Program • Limited Seats • Application Required
//             </p>

//             <Link
//               href="/apply"
//               className="inline-block mt-10 px-12 py-4 bg-white text-black font-medium hover:scale-105 transition"
//             >
//               Apply Now
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ================================= FINAL CTA ================================= */}
//       <section className="px-6 py-32 text-center border-t border-white/10">
//         <h2 className="text-5xl font-semibold tracking-tight">
//           Serious About Building?
//         </h2>

//         <p className="mt-8 text-neutral-400">
//           We work with committed builders only.
//         </p>

//         <Link
//           href="/apply"
//           className="inline-block mt-12 px-16 py-5 bg-white text-black font-medium hover:scale-105 transition"
//         >
//           Start Application
//         </Link>
//       </section>

//     </main>
//   );
// }


// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0 },
// };

// export default function MentorshipSystem() {
//   return (
//     <main className="relative bg-black text-white overflow-x-hidden">

//       {/* Background Grid */}
//       <div
//         aria-hidden
//         className="fixed inset-0 -z-50 opacity-[0.05]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
//           backgroundSize: "60px 60px",
//         }}
//       />

//       {/* ================= HERO ================= */}
//       <section className="relative px-6 py-32 text-center">
//         <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-white/5 blur-[160px] -z-10" />

//         <motion.div
//           initial="hidden"
//           animate="show"
//           variants={fadeUp}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto"
//         >
//           <p className="text-xs tracking-[0.3em] uppercase text-neutral-500">
//             SILICALITY MENTORSHIP SYSTEM
//           </p>

//           <h1 className="mt-8 text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tight leading-[1.05]">
//             Execution Over Advice.
//             <br />
//             <span className="text-neutral-400">Systems Over Noise.</span>
//           </h1>

//           <p className="mt-10 text-neutral-400 text-lg leading-relaxed">
//             A premium mentorship ecosystem designed to transform serious builders 
//             into production-ready engineers through structured execution.
//           </p>

//           <div className="mt-12 flex justify-center gap-6 flex-wrap">
//             <Link
//               href="/apply"
//               className="px-10 py-4 bg-white text-black font-medium hover:scale-105 transition"
//             >
//               Apply for Flagship Program
//             </Link>
//           </div>
//         </motion.div>
//       </section>

//       {/* ================= PHILOSOPHY ================= */}
//       <section className="px-6 py-24 border-t border-white/10 text-center">
//         <div className="max-w-3xl mx-auto">
//           <h2 className="text-3xl font-semibold tracking-tight">
//             We Don’t Sell Calls.
//           </h2>

//           <p className="mt-8 text-neutral-400 leading-relaxed">
//             We build structured execution environments where builders learn 
//             through real output, rigorous feedback, and architectural thinking.
//           </p>
//         </div>
//       </section>

//       {/* ================= FLAGSHIP PROGRAM ================= */}
//       <section className="px-6 py-28 border-t border-white/10">
//         <div className="max-w-6xl mx-auto">

//           <h2 className="text-4xl font-semibold tracking-tight text-center">
//             Builder Acceleration Program
//           </h2>

//           <p className="text-center mt-6 text-neutral-400">
//             8 Weeks • Cohort-Based • Limited to 12 Builders
//           </p>

//           <div className="mt-16 grid md:grid-cols-3 gap-6">
//             {[
//               "Real Product Builds",
//               "Architecture & System Thinking",
//               "Weekly Live Feedback",
//               "Career Positioning",
//               "Portfolio Refinement",
//               "Interview Strategy",
//             ].map((item, i) => (
//               <motion.div
//                 key={item}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 variants={fadeUp}
//                 transition={{ delay: i * 0.05 }}
//                 className="border border-white/10 bg-white/[0.02] p-8"
//               >
//                 {item}
//               </motion.div>
//             ))}
//           </div>

//           <div className="text-center mt-16">
//             <p className="text-6xl font-semibold">₹15,000</p>
//             <p className="mt-4 text-neutral-400">
//               Full 8-Week Flagship Program
//             </p>

//             <Link
//               href="/apply"
//               className="inline-block mt-10 px-12 py-4 bg-white text-black font-medium hover:scale-105 transition"
//             >
//               Apply Now
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ================= FOCUSED TRACKS ================= */}
//       <section className="px-6 py-28 border-t border-white/10">
//         <div className="max-w-6xl mx-auto">

//           <h2 className="text-3xl font-semibold tracking-tight text-center">
//             Focused Mentorship Tracks
//           </h2>

//           <p className="mt-6 text-center text-neutral-400">
//             Not ready for the flagship program? Explore structured intensives.
//           </p>

//           <div className="mt-16 grid md:grid-cols-3 gap-6">
//             {[
//               {
//                 title: "Interview Strategy Intensive",
//                 price: "₹7,000",
//               },
//               {
//                 title: "Career Audit Session",
//                 price: "₹3,000",
//               },
//               {
//                 title: "System Design Mentorship",
//                 price: "₹8,000",
//               },
//             ].map((item) => (
//               <div
//                 key={item.title}
//                 className="border border-white/10 bg-white/[0.02] p-8"
//               >
//                 <h3 className="text-lg font-medium">{item.title}</h3>
//                 <p className="mt-6 text-3xl font-semibold">{item.price}</p>

//                 <Link
//                   href="/apply"
//                   className="inline-block mt-6 text-sm underline text-neutral-400"
//                 >
//                   Learn More
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= FINAL CTA ================= */}
//       <section className="px-6 py-32 text-center border-t border-white/10">
//         <h2 className="text-5xl font-semibold tracking-tight">
//           Build With Intent.
//         </h2>

//         <p className="mt-8 text-neutral-400">
//           We work with serious builders only.
//         </p>

//         <Link
//           href="/apply"
//           className="inline-block mt-12 px-16 py-5 bg-white text-black font-medium hover:scale-105 transition"
//         >
//           Start Application
//         </Link>
//       </section>

//     </main>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0 },
// };

// export default function MentorshipSystem() {
//   return (
//     <main className="relative bg-black text-white overflow-x-hidden">

//       {/* Background Grid */}
//       <div
//         aria-hidden
//         className="fixed inset-0 -z-50 opacity-[0.04]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
//           backgroundSize: "60px 60px",
//         }}
//       />

//       {/* ================= HERO ================= */}
//       <section className="relative px-6 py-32 text-center">
//         <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-white/5 blur-[160px] -z-10" />

//         <motion.div
//           initial="hidden"
//           animate="show"
//           variants={fadeUp}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto"
//         >
//           <p className="text-xs tracking-[0.3em] uppercase text-neutral-500">
//             SILICALITY MENTORSHIP STUDIO
//           </p>

//           <h1 className="mt-8 text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tight leading-[1.05]">
//             Build Like A Professional.
//             <br />
//             <span className="text-neutral-400">Not Like A Student.</span>
//           </h1>

//           <p className="mt-10 text-neutral-400 text-lg leading-relaxed">
//             A structured execution system delivered by a team of 5+ mentors 
//             designed to elevate builders into production-ready engineers.
//           </p>

//           <div className="mt-12">
//             <Link
//               href="/apply"
//               className="px-12 py-5 bg-white text-black font-medium hover:scale-105 transition"
//             >
//               Apply for Builder Program
//             </Link>
//           </div>
//         </motion.div>
//       </section>

//       {/* ================= HOW IT WORKS ================= */}
//       <section className="px-6 py-28 border-t border-white/10 text-center">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-semibold tracking-tight">
//             How The System Works
//           </h2>

//           <div className="mt-16 grid md:grid-cols-4 gap-6 text-left">
//             {[
//               "Skill & Portfolio Audit",
//               "Structured Build Plan",
//               "Multi-Mentor Feedback",
//               "Final Positioning & Strategy",
//             ].map((step, i) => (
//               <motion.div
//                 key={step}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 variants={fadeUp}
//                 transition={{ delay: i * 0.05 }}
//                 className="border border-white/10 bg-white/[0.02] p-8"
//               >
//                 {step}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= FLAGSHIP ================= */}
//       <section className="px-6 py-32 border-t border-white/10">
//         <div className="max-w-6xl mx-auto text-center">

//           <h2 className="text-4xl font-semibold tracking-tight">
//             Builder Acceleration Program
//           </h2>

//           <p className="mt-6 text-neutral-400">
//             8 Weeks • Cohort-Based • Delivered by the Silicality Mentor Team
//           </p>

//           <div className="mt-16 grid md:grid-cols-3 gap-6 text-left">
//             {[
//               "Real Production-Level Project",
//               "Architecture & System Design Sessions",
//               "Weekly Code & Execution Reviews",
//               "Interview & Positioning Strategy",
//               "Collaborative Peer Environment",
//               "Portfolio Refinement & Confidence Upgrade",
//             ].map((item) => (
//               <div
//                 key={item}
//                 className="border border-white/10 bg-white/[0.02] p-8"
//               >
//                 {item}
//               </div>
//             ))}
//           </div>

//           <div className="mt-20">
//             <p className="text-sm uppercase tracking-widest text-neutral-500">
//               Early Cohort Investment
//             </p>

//             <p className="mt-6 text-6xl font-semibold">
//               ₹15,000
//             </p>

//             <p className="mt-4 text-neutral-400">
//               Limited to 12 Builders Per Cohort
//             </p>

//             <Link
//               href="/apply"
//               className="inline-block mt-10 px-14 py-5 bg-white text-black font-medium hover:scale-105 transition"
//             >
//               Start Application
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ================= OPTIONAL INTENSIVES ================= */}
//       <section className="px-6 py-28 border-t border-white/10">
//         <div className="max-w-6xl mx-auto text-center">

//           <h2 className="text-3xl font-semibold tracking-tight">
//             Focused Intensives
//           </h2>

//           <p className="mt-6 text-neutral-400">
//             Short, structured tracks for specific goals.
//           </p>

//           <div className="mt-16 grid md:grid-cols-3 gap-6 text-left">
//             {[
//               { title: "Interview Strategy Intensive", price: "₹7,000" },
//               { title: "Career Audit Session", price: "₹3,000" },
//               { title: "System Design Mentorship", price: "₹8,000" },
//             ].map((item) => (
//               <div
//                 key={item.title}
//                 className="border border-white/10 bg-white/[0.02] p-8"
//               >
//                 <h3 className="text-lg font-medium">{item.title}</h3>
//                 <p className="mt-6 text-3xl font-semibold">{item.price}</p>

//                 <Link
//                   href="/apply"
//                   className="inline-block mt-6 text-sm underline text-neutral-400"
//                 >
//                   Learn More
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= FINAL CTA ================= */}
//       <section className="px-6 py-32 border-t border-white/10 text-center">
//         <h2 className="text-5xl font-semibold tracking-tight">
//           Serious Builders Only.
//         </h2>

//         <p className="mt-8 text-neutral-400">
//           This is not for passive learners.
//         </p>

//         <Link
//           href="/apply"
//           className="inline-block mt-12 px-16 py-5 bg-white text-black font-medium hover:scale-105 transition"
//         >
//           Apply Now
//         </Link>
//       </section>

//     </main>
//   );
// }
