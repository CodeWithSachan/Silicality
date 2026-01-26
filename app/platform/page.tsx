// "use client";

// import { motion } from "framer-motion";

// export default function Platform() {
//   return (
//     <section className="py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden">
//       {/* Subtle background layer */}
//       <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-900/50 to-black" />

//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="max-w-3xl"
//         >
//           <span
//             className="inline-block mb-5 sm:mb-6 px-4 py-1 text-xs sm:text-sm rounded-full
//             border border-yellow-500/40 text-yellow-400"
//           >
//             Building in Public
//           </span>

//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
//             The Silicality Platform
//           </h2>

//           <p className="mt-4 sm:mt-5 text-base sm:text-lg text-neutral-400">
//             A contribution-first platform designed to help people grow through
//             real projects, mentorship, and collaboration — not certificates
//             or shortcuts.
//           </p>
//         </motion.div>

//         {/* Core principles */}
//         <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 md:grid-cols-3">
//           {[
//             {
//               title: "Real Contributions",
//               desc: "Work on meaningful projects that solve real problems instead of artificial tasks.",
//             },
//             {
//               title: "Guided by Mentors",
//               desc: "Learning shaped by feedback from people actively building in the industry.",
//             },
//             {
//               title: "Open & Transparent",
//               desc: "Built openly with the community — including progress, decisions, and mistakes.",
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={item.title}
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.8,
//                 ease: "easeOut",
//                 delay: i * 0.08,
//               }}
//               className="rounded-2xl border border-neutral-800 bg-neutral-900/40
//               p-6 sm:p-8 hover:border-neutral-600 hover:bg-neutral-900 transition"
//             >
//               <h3 className="text-lg sm:text-xl font-medium">
//                 {item.title}
//               </h3>
//               <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-400">
//                 {item.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Status note */}
//         <motion.p
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="mt-16 sm:mt-20 max-w-3xl text-sm sm:text-base text-neutral-500"
//         >
//           The platform is currently under active development.
//           Early experiments and programs are already live through Silicality
//           initiatives as we continue to build in public.
//         </motion.p>
//       </div>
//     </section>
//   );
// }


"use client";

import type { Metadata } from "next";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Contribution Platform",
  description:
    "The Silicality contribution-first platform helps developers grow through real-world projects, mentorship, and open collaboration.",
  keywords: [
    "open source platform",
    "developer contributions",
    "learn open source",
    "mentorship platform",
    "Silicality platform",
  ],
};

export default function PlatformPage() {
  return (
    <section
      className="py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden"
      aria-labelledby="platform-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-neutral-900/50 to-black" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span
            className="inline-block mb-5 sm:mb-6 px-4 py-1 text-xs sm:text-sm rounded-full
            border border-yellow-500/40 text-yellow-400"
          >
            Building in Public
          </span>

          <h1
            id="platform-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight"
          >
            The Silicality Contribution Platform
          </h1>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-neutral-400">
            A contribution-first platform built to help developers grow through
            real-world projects, mentor guidance, and open collaboration — not
            certificates or shortcuts.
          </p>
        </motion.div>

        {/* Core principles */}
        <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 md:grid-cols-3">
          {[
            {
              title: "Real Open-Source Contributions",
              desc: "Work on meaningful projects that solve real problems and reflect real industry workflows.",
            },
            {
              title: "Mentor-Guided Learning",
              desc: "Learn with feedback from experienced developers actively building in the ecosystem.",
            },
            {
              title: "Open & Transparent Development",
              desc: "Everything is built in public — progress, decisions, experiments, and learnings.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: i * 0.08,
              }}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/40
              p-6 sm:p-8 hover:border-neutral-600 hover:bg-neutral-900 transition"
            >
              <h2 className="text-lg sm:text-xl font-medium">
                {item.title}
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Status note */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-16 sm:mt-20 max-w-3xl text-sm sm:text-base text-neutral-500"
        >
          The Silicality platform is currently under active development.
          Early programs and contribution initiatives are already live as we
          continue to build in public.
        </motion.p>
      </div>
    </section>
  );
}
