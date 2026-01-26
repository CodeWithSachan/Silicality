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
//     <section className="relative py-28 sm:py-32 px-4 sm:px-6 overflow-hidden">
//       {/* background depth */}
//       <div className="absolute inset-0 -z-10 bg-linear-to-b from-neutral-900/40 via-black to-black" />

//       <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16">

//         {/* LEFT — narrative */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           className="lg:col-span-5"
//         >
//           <span
//             className="inline-block mb-6 px-4 py-1 text-xs rounded-full
//             border border-yellow-500/30 text-yellow-400"
//           >
//             Build For Future
//           </span>

//           <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
//             The Silicality Platform
//           </h2>

//           <p className="mt-5 text-base sm:text-lg text-neutral-400 max-w-md">
//             A contribution-first platform designed to help learners grow
//             through real work, mentorship, and collaboration —
//             not certificates.
//           </p>

//           <p className="mt-8 text-sm text-neutral-500 max-w-md">
//             This is not a course platform.  
//             It’s an ecosystem that rewards learning by building,
//             feedback by doing, and growth by consistency.
//           </p>
//         </motion.div>

//         {/* RIGHT — vertical system */}
//         <div className="lg:col-span-7 relative">

//           {/* spine */}
//           <motion.div
//             initial={{ height: 0 }}
//             whileInView={{ height: "100%" }}
//             viewport={{ once: true }}
//             transition={{ duration: 1.2, ease: "easeOut" }}
//             className="absolute left-3 top-0 w-px bg-neutral-800"
//           />

//           <div className="space-y-14">
//             {pillars.map((item, i) => (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, x: 32 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.8,
//                   ease: "easeOut",
//                   delay: i * 0.12,
//                 }}
//                 className="relative pl-10"
//               >
//                 {/* node */}
//                 <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-neutral-500" />

//                 <div
//                   className="
//                     rounded-2xl border border-neutral-800
//                     bg-neutral-900/40 backdrop-blur-xl
//                     p-6 sm:p-7
//                   "
//                 >
//                   <h3 className="text-lg sm:text-xl font-medium">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl">
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
//             className="mt-14 text-sm text-neutral-500 max-w-xl pl-10"
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

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Real Contributions",
    desc: "Participants work on real projects — not artificial assignments or toy problems.",
  },
  {
    title: "Mentor-Guided Growth",
    desc: "Learning is shaped by feedback from people actively building in the industry.",
  },
  {
    title: "Open & Transparent",
    desc: "Built openly with the community — decisions, progress, and mistakes included.",
  },
];

export default function Platform() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      {/* background depth */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-neutral-900/40 via-black to-black" />

      <div className="max-w-6xl mx-auto grid gap-16 lg:grid-cols-12">

        {/* LEFT — narrative */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 text-center lg:text-left"
        >
          <span
            className="
              inline-block mb-5 px-4 py-1 text-xs rounded-full
              border border-yellow-500/30 text-yellow-400
            "
          >
            Build For Future
          </span>

          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
            The Silicality Platform
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-neutral-400 max-w-md mx-auto lg:mx-0">
            A contribution-first platform designed to help learners grow
            through real work, mentorship, and collaboration —
            not certificates.
          </p>

          <p className="mt-6 sm:mt-8 text-sm text-neutral-500 max-w-md mx-auto lg:mx-0">
            This is not a course platform.  
            It’s an ecosystem that rewards learning by building,
            feedback by doing, and growth by consistency.
          </p>
        </motion.div>

        {/* RIGHT — vertical system */}
        <div className="lg:col-span-7 relative">

          {/* spine (hidden on small screens) */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute left-2 top-0 w-px bg-neutral-800 hidden sm:block"
          />

          <div className="space-y-10 sm:space-y-14">
            {pillars.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: i * 0.1,
                }}
                className="relative sm:pl-10"
              >
                {/* node (desktop only) */}
                <span className="absolute left-0 top-4 h-3 w-3 rounded-full bg-neutral-500 hidden sm:block" />

                <div
                  className="
                    rounded-2xl border border-neutral-800
                    bg-neutral-900/40 backdrop-blur-xl
                    p-5 sm:p-7
                  "
                >
                  <h3 className="text-base sm:text-xl font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-2 sm:mt-3 text-sm sm:text-base text-neutral-400 max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* status */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-10 sm:mt-14 text-sm text-neutral-500 max-w-xl sm:pl-10"
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
