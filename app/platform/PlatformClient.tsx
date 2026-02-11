// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// /* --------------------------------
//    Motion presets
// --------------------------------- */
// const fadeUp = {
//   hidden: { opacity: 0, y: 32 },
//   show: { opacity: 1, y: 0 },
// };

// /* --------------------------------
//    Data
// --------------------------------- */
// const systems = [
//   { image: "/system-01.png" },
//   { image: "/system-02.png" },
//   { image: "/system-03.png" },
// ];

// export default function PlatformPage() {
//   return (
//     <main className="bg-black text-white overflow-x-hidden">
//       {/* =====================================================
//           HERO — CINEMATIC INTRO
//       ====================================================== */}
// <header
//   className="relative min-h-screen px-6 isolate"
//   aria-labelledby="platform-title"
// >
//   {/* =====================
//       BACKGROUND IMAGE LAYER
//   ====================== */}
//   <div
//     aria-hidden
//     className="absolute inset-0 z-0"
//   >
//     <Image
//       src="/platformbg2.jpg"
//       alt=""
//       fill
//       priority
//       sizes="100vw"
//       className="object-cover"
//     />
//     {/* dark film overlay */}
//     <div className="absolute inset-0 bg-black/70" />
//   </div>

//   {/* =====================
//       DECORATIVE OBJECT
//   ====================== */}
//   <div
//     aria-hidden
//     className="absolute inset-0 z-1 flex items-center justify-center pointer-events-none"
//   >
//     <div className="w-105 h-105 rounded-full border border-white/10 blur-sm opacity-60" />
//   </div>

//   {/* =====================
//       CONTENT
//   ====================== */}
//   <div className="relative z-10 flex min-h-screen items-center justify-center">
//     <motion.div
//       initial="hidden"
//       animate="show"
//       variants={fadeUp}
//       transition={{ duration: 0.9, ease: "easeOut" }}
//       className="max-w-5xl text-center text-white"
//     >
//       <span className="text-[11px] tracking-[0.3em] uppercase text-yellow-400 font-semibold">
//         Version 1.0 — Contribution Platform
//       </span>

//       <h1
//         id="platform-title"
//         className="mt-6 text-5xl sm:text-7xl lg:text-[110px] font-extrabold leading-[0.9] tracking-tight"
//       >
//         THE SILICALITY
//         <br />
//         PLATFORM
//       </h1>

//       <p className="mt-8 text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto">
//         A contribution-first system built to help developers grow through
//         real work, real feedback, and real collaboration.
//       </p>

//       <nav
//         aria-label="Primary platform actions"
//         className="mt-12 flex flex-wrap justify-center gap-4"
//       >
//         <Link
//           href="/"
//           className="px-10 py-5 rounded-full bg-yellow-400 text-black font-semibold hover:scale-105 transition"
//         >
//           Enter Platform
//         </Link>

//         <Link
//           href="/programs"
//           className="px-10 py-5 rounded-full border border-white/20 hover:bg-white/5 transition"
//         >
//           View Programs
//         </Link>
//       </nav>
//     </motion.div>
//   </div>

//   {/* =====================
//       SCROLL INDICATOR
//   ====================== */}
//   <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-xs tracking-widest opacity-40">
//     Scroll to explore ↓
//   </div>
// </header>



//       {/* =====================================================
//           HOW IT WORKS — STICKY MECHANISM
//       ====================================================== */}
//       <section
//         className="relative flex min-h-[200vh]"
//         aria-labelledby="how-it-works"
//       >
//         {/* LEFT — sticky explanation */}
//         <div className="w-full lg:w-1/2 sticky top-0 h-screen flex items-center px-8 lg:px-24">
//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={fadeUp}
//             transition={{ duration: 0.8 }}
//             className="max-w-md"
//           >
//             <span className="text-[11px] tracking-[0.3em] uppercase text-yellow-400 font-semibold">
//               Mechanism
//             </span>

//             <h2
//               id="how-it-works"
//               className="mt-4 text-4xl sm:text-5xl font-bold"
//             >
//               How it works
//             </h2>

//             <p className="mt-6 text-neutral-400 leading-relaxed">
//               The Silicality platform synchronizes contributors, mentors, and
//               projects into a living system. Every contribution strengthens the
//               ecosystem.
//             </p>

//             <ul className="mt-10 space-y-4 text-sm">
//               <li className="text-cyan-400">● Contribution Nodes</li>
//               <li className="text-neutral-500">● Review & Feedback Loops</li>
//               <li className="text-neutral-500">● Open Progress Tracking</li>
//             </ul>
//           </motion.div>
//         </div>

//         {/* RIGHT — system modules */}
//         <div className="w-full lg:w-1/2 py-40 flex flex-col items-center gap-28">
//           {systems.map((system, i) => (
//             <motion.article
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.15, duration: 0.8 }}
//               className={`
//                 relative w-72 h-96 rounded-2xl
//                 border border-white/10
//                 bg-white/3
//                 backdrop-blur-xl
//                 p-6
//                 ${i === 1 ? "translate-x-10" : ""}
//                 ${i === 2 ? "-translate-x-10" : ""}
//               `}
//             >
//               {/* Image */}
//               <div className="absolute inset-6 rounded-xl overflow-hidden">
//                 <Image
//                   src={system.image}
//                   alt="Silicality core module visualization"
//                   fill
//                   className="object-contain opacity-90"
//                   priority={i === 0}
//                 />
//               </div>

//               {/* Overlay */}
//               <div className="relative z-10 h-full rounded-xl border border-white/5 flex items-end p-4 bg-black/20">
//                 <h3 className="text-lg font-semibold">
//                   Silicality Core
//                 </h3>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </section>

//       {/* =====================================================
//           CORE PRINCIPLES
//       ====================================================== */}
//       <section
//         className="py-32 px-6 lg:px-32"
//         aria-labelledby="core-principles"
//       >
//         <div className="mb-20">
//           <span className="text-[11px] tracking-[0.3em] uppercase text-yellow-400 font-semibold">
//             Values
//           </span>
//           <h2
//             id="core-principles"
//             className="mt-4 text-4xl sm:text-5xl font-bold"
//           >
//             Core Principles
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-4">
//           <PrincipleCard title="Real Contributions" span="md:col-span-3" />
//           <PrincipleCard title="Mentor Governance" span="md:col-span-3" />
//           <PrincipleCard title="Protocol Integrity" span="md:col-span-2" />
//           <PrincipleCard title="Scalable Growth" span="md:col-span-4" wide />
//         </div>
//       </section>

//       {/* =====================================================
//           FINAL CTA
//       ====================================================== */}
//       <section className="py-40 px-6 flex justify-center">
//         <div className="relative w-full max-w-6xl rounded-[40px] border border-white/10 bg-white/3 backdrop-blur-xl p-20 text-center">
//           <h2 className="text-4xl sm:text-6xl font-extrabold text-neutral-200">
//             Ready to contribute?
//           </h2>

//           <Link
//             href="/programs"
//             className="inline-flex mt-12 px-16 py-6 rounded-full bg-yellow-400 text-black font-bold text-xl hover:scale-105 transition"
//           >
//             Explore Events →
//           </Link>

//           <p className="mt-8 text-xs tracking-widest uppercase text-neutral-500">
//             Platform Status: Active
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// }

// /* --------------------------------
//    Helper Component
// --------------------------------- */
// function PrincipleCard({
//   title,
//   span,
//   wide,
// }: {
//   title: string;
//   span: string;
//   wide?: boolean;
// }) {
//   return (
//     <div
//       className={`
//         ${span}
//         rounded-2xl
//         border border-white/10
//         bg-white/3
//         backdrop-blur-xl
//         p-10
//         flex flex-col justify-between
//         ${wide ? "flex-row gap-10" : ""}
//       `}
//     >
//       <div>
//         <h3 className="text-2xl font-bold">{title}</h3>
//         <p className="mt-3 text-neutral-400 text-sm max-w-md">
//           Designed as a foundational pillar of the Silicality ecosystem.
//         </p>
//       </div>

//       {wide && (
//         <div
//           aria-hidden
//           className="hidden lg:block w-40 h-40 border border-white/10 rounded-xl opacity-40"
//         />
//       )}
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* --------------------------------
   Motion presets
--------------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

export default function PlatformPage() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* =====================================================
          HERO — DO NOT TOUCH
      ====================================================== */}
      <header
        className="relative min-h-screen px-6 isolate"
        aria-labelledby="platform-title"
      >
        {/* Background image */}
        <div aria-hidden className="absolute inset-0 z-0">
          <Image
            src="/platformbg2.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Decorative object */}
        <div
          aria-hidden
          className="absolute inset-0 z-1 flex items-center justify-center pointer-events-none"
        >
          <div className="w-105 h-105 rounded-full border border-white/10 blur-sm opacity-60" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center justify-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-5xl text-center"
          >
            <span className="text-[11px] tracking-[0.3em] uppercase text-yellow-400 font-semibold">
              Version 1.0 — Contribution Platform
            </span>

            <h1
              id="platform-title"
              className="mt-6 text-5xl sm:text-7xl lg:text-[110px] font-extrabold leading-[0.9] tracking-tight"
            >
              THE SILICALITY
              <br />
              PLATFORM
            </h1>

            <p className="mt-8 text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto">
              A contribution-first system built to help developers grow through
              real work, real feedback, and real collaboration.
            </p>

            <nav
              aria-label="Primary platform actions"
              className="mt-12 flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/"
                className="px-10 py-5 rounded-full bg-yellow-400 text-black font-semibold hover:scale-105 transition"
              >
                Enter Platform
              </Link>

              <Link
                href="/programs"
                className="px-10 py-5 rounded-full border border-white/20 hover:bg-white/5 transition"
              >
                View Programs
              </Link>
            </nav>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-xs tracking-widest opacity-40">
          Scroll to explore ↓
        </div>
      </header>

      {/* =====================================================
          PLATFORM ARCHITECTURE
      ====================================================== */}
      <section className="py-32 px-6 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <span className="text-[11px] tracking-[0.3em] uppercase text-yellow-400 font-semibold">
            Architecture
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
            A system, not a course
          </h2>

          <p className="mt-6 max-w-2xl text-neutral-400">
            Silicality is built as a living platform where contributors,
            mentors, and real projects evolve together — not as a content
            library or certification funnel.
          </p>

          <div className="mt-20 grid gap-12 md:grid-cols-3">
            {[
              {
                title: "Contribution Layer",
                desc: "Real repositories, scoped tasks, and meaningful deliverables.",
              },
              {
                title: "Mentorship Layer",
                desc: "Guidance from practitioners who review work in real context.",
              },
              {
                title: "Progress Layer",
                desc: "Visible growth through consistency, not credentials.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-white/10 rounded-2xl p-8 bg-white/2"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTRIBUTION LOOP
      ====================================================== */}
      <section className="py-32 px-6 lg:px-24 bg-[#0B0E14]">
        <div className="max-w-6xl mx-auto grid gap-20 lg:grid-cols-2">
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase text-yellow-400 font-semibold">
              Flow
            </span>

            <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
              How contribution creates growth
            </h2>

            <p className="mt-6 text-neutral-400 max-w-md">
              Growth on Silicality is earned. Every step compounds through
              feedback, iteration, and visible progress.
            </p>
          </div>

          <div className="space-y-6">
            {[
              "Join a real initiative or program",
              "Work on scoped, meaningful tasks",
              "Receive mentor feedback",
              "Refine and resubmit work",
              "Build a public contribution track record",
            ].map((step, i) => (
              <div
                key={i}
                className="flex gap-4 border border-white/10 rounded-xl p-6"
              >
                <span className="text-yellow-400 font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-neutral-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          GOVERNANCE & TRUST
      ====================================================== */}
      <section className="py-32 px-6 lg:px-24 bg-black">
        <div className="max-w-5xl mx-auto">
          <span className="text-[11px] tracking-[0.3em] uppercase text-yellow-400 font-semibold">
            Governance
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
            Built with accountability
          </h2>

          <p className="mt-6 text-neutral-400 max-w-2xl">
            Silicality avoids noise, vanity metrics, and passive participation.
            Trust is earned through visible work and mentor validation.
          </p>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            <div className="border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold">Mentor-led validation</h3>
              <p className="mt-4 text-sm text-neutral-400">
                Feedback comes from experienced builders, not automated scores.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold">Transparent progress</h3>
              <p className="mt-4 text-sm text-neutral-400">
                Contributions and growth remain visible over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CORE PRINCIPLES
      ====================================================== */}
      <section className="py-32 px-6 lg:px-24 bg-[#0B0E14]">
        <div className="max-w-6xl mx-auto">
          <span className="text-[11px] tracking-[0.3em] uppercase text-yellow-400 font-semibold">
            Principles
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
            What the platform stands for
          </h2>

          <div className="mt-20 grid gap-12 md:grid-cols-3">
            {[
              "Real work over simulated learning",
              "Depth over speed",
              "Mentorship over metrics",
              "Consistency over virality",
              "Growth through contribution",
              "Open progress, earned trust",
            ].map((principle) => (
              <div
                key={principle}
                className="border border-white/10 rounded-xl p-6 text-neutral-300"
              >
                {principle}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="py-40 px-6 bg-black flex justify-center">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-neutral-200">
            The platform is open.
          </h2>

          <p className="mt-6 text-neutral-400 max-w-xl mx-auto">
            If you want real experience, real feedback, and real growth —
            Silicality is built for you.
          </p>

          <Link
            href="/programs"
            className="inline-flex mt-12 px-16 py-6 rounded-full bg-yellow-400 text-black font-bold text-xl hover:scale-105 transition"
          >
            Explore Programs →
          </Link>

          <p className="mt-10 text-xs tracking-widest uppercase text-neutral-500">
            Platform Status: Active
          </p>
        </div>
      </section>
    </main>
  );
}
