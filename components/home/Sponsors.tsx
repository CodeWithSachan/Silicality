// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// const partnerships = [
//   {
//     title: "Event Sponsors",
//     desc: "Support programs, hackathons, and initiatives that reach a growing community of builders and learners.",
//   },
//   {
//     title: "Technology Partners",
//     desc: "Collaborate on tools, platforms, and infrastructure that power real-world learning and development.",
//   },
//   {
//     title: "Community Partners",
//     desc: "Work with us to grow and support an ecosystem focused on contribution and long-term impact.",
//   },
// ];

// export default function Sponsors() {
//   return (
//     <section className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
//       {/* background */}
//       <div className="absolute inset-0 -z-10 bg-linear-to-b from-neutral-900/40 to-black" />

//       <div className="max-w-6xl mx-auto grid gap-16 lg:grid-cols-12">

//         {/* LEFT — narrative */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="lg:col-span-5 text-center lg:text-left"
//         >
//           <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
//             Sponsors & Partners
//           </h2>

//           <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-neutral-400 max-w-md mx-auto lg:mx-0">
//             We collaborate with organizations and individuals who believe in
//             building real products, nurturing talent, and creating meaningful,
//             long-term opportunities.
//           </p>

//           <p className="mt-6 sm:mt-8 text-sm text-neutral-500 max-w-md mx-auto lg:mx-0">
//             Partnerships at Silicality are not transactional.
//             They’re built on shared values, long-term intent,
//             and a belief in learning through real work.
//           </p>

//           <div className="mt-8 sm:mt-10">
//             <Link
//               href="/contact"
//               className="
//                 inline-flex w-full sm:w-auto justify-center items-center gap-2
//                 px-7 py-3 rounded-xl
//                 bg-white text-black font-medium
//                 hover:bg-neutral-200 transition
//               "
//             >
//               Partner With Us →
//             </Link>
//           </div>
//         </motion.div>

//         {/* RIGHT — aligned roles */}
//         <div className="lg:col-span-7 space-y-6 sm:space-y-8">
//           {partnerships.map((item, i) => (
//             <motion.div
//               key={item.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.7,
//                 ease: "easeOut",
//                 delay: i * 0.1,
//               }}
//               className="
//                 rounded-2xl border border-neutral-800
//                 bg-neutral-900/40 backdrop-blur-xl
//                 p-5 sm:p-7
//               "
//             >
//               <h3 className="text-base sm:text-xl font-medium">
//                 {item.title}
//               </h3>

//               <p className="mt-2 sm:mt-3 text-sm sm:text-base text-neutral-400 max-w-xl">
//                 {item.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";

const partnerships = [
  {
    title: "Event Sponsors",
    desc: "Support programs, hackathons, and initiatives that reach a growing community of builders and learners.",
    color: "amber",
    depth: 40,
  },
  {
    title: "Technology Partners",
    desc: "Collaborate on tools, platforms, and infrastructure that power real-world learning and development.",
    color: "cyan",
    depth: 60,
    featured: true,
  },
  {
    title: "Community Partners",
    desc: "Work with us to grow and support an ecosystem focused on contribution and long-term impact.",
    color: "violet",
    depth: 35,
  },
];

export default function Sponsors() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden py-28 sm:py-36 px-6"
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-black" />

      {/* Partnership field (ambient objects) */}
      <motion.div
        aria-hidden
        className="absolute top-24 left-24 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl"
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
        {/* LEFT — narrative */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="lg:col-span-5 text-center lg:text-left"
        >
          <span className="inline-flex mb-6 px-4 py-1 text-xs rounded-full border border-neutral-700 text-neutral-300">
            Partnerships
          </span>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            Sponsors & Partners
          </h2>

          <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-md mx-auto lg:mx-0">
            We collaborate with organizations and individuals who believe in
            <strong className="text-neutral-200"> building real products</strong>,
            nurturing talent, and creating long-term impact.
          </p>

          <p className="mt-8 text-sm text-neutral-500 max-w-md mx-auto lg:mx-0">
            Partnerships at Silicality are not transactional.
            <br />
            They’re built on shared values, patience, and real work.
          </p>

          <div className="mt-12">
            <Link
              href="/contact"
              className="
                inline-flex items-center gap-2
                px-8 py-4 rounded-xl
                bg-neutral-100 text-black font-medium
                hover:bg-neutral-200 transition
              "
            >
              Partner With Us →
            </Link>
          </div>
        </motion.div>

        {/* RIGHT — partnership nodes */}
        <div className="lg:col-span-7 relative space-y-14">
          {partnerships.map((item, i) => (
            <PartnerCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------
   Partner Node (3D, responsive)
--------------------------------- */
function PartnerCard({ item, index }: any) {
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
      className={`
        relative rounded-3xl p-8 sm:p-9
        bg-neutral-900/70 backdrop-blur-xl
        border border-white/10
        shadow-2xl
        hover:scale-[1.03]
        transition
        ${item.featured ? "ring-1 ring-cyan-500/30" : ""}
      `}
    >
      {/* Orbiting value signal */}
      <div
        aria-hidden
        className={`
          absolute -top-10 -right-10 w-40 h-40 rounded-full
          bg-${item.color}-400/20 blur-2xl
        `}
      />

      <h3 className="text-xl sm:text-2xl font-medium">
        {item.title}
      </h3>

      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
        {item.desc}
      </p>
    </motion.article>
  );
}
