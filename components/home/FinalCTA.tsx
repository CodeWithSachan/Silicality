// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function FinalCTA() {
//   return (
//     <section className="py-40 px-6 relative overflow-hidden">
//       {/* Subtle background */}
//       <div className="absolute inset-0 -z-10 bg-linear-to-b from-neutral-900/60 to-black" />

//       <div className="max-w-4xl mx-auto text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-3xl md:text-4xl font-semibold tracking-tight"
//         >
//           Let’s build something meaningful.
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
//           className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto"
//         >
//           Whether you’re starting a product, exploring collaboration,
//           or looking for guidance — we’re open to thoughtful conversations.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
//           className="mt-12 flex flex-wrap justify-center gap-4"
//         >
//           <Link
//             href="/contact"
//             className="px-8 py-3 rounded-xl bg-white text-black font-medium
//             hover:bg-neutral-200 transition"
//           >
//             Start a Project
//           </Link>

//           <Link
//             href="/programs"
//             className="px-8 py-3 rounded-xl border border-neutral-700 text-white
//             hover:border-neutral-400 transition"
//           >
//             Explore Programs
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [6, -6]);
  const rotateY = useTransform(x, [-50, 50], [-6, 6]);

  function handleMove(e: any) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  return (
    <section
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="relative overflow-hidden py-44 px-6"
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-black" />

      {/* Convergence field */}
      <motion.div
        aria-hidden
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{ y: [0, -60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-1/4 right-1/4 w-md h-112 rounded-full bg-violet-400/10 blur-3xl"
        animate={{ y: [0, 60, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle axis */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-0 h-full w-px bg-neutral-800/60"
        animate={{ opacity: [0.15, 0.45, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative max-w-4xl mx-auto text-center"
      >
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          style={{ transform: "translateZ(40px)" }}
        >
          Let’s build something meaningful.
        </motion.h2>

        {/* Copy */}
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.9, ease: "easeOut" }}
          className="mt-8 text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto"
          style={{ transform: "translateZ(30px)" }}
        >
          Whether you’re starting a product, exploring collaboration,
          or looking for guidance — we’re open to thoughtful conversations.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          className="mt-14 flex flex-wrap justify-center gap-4"
          style={{ transform: "translateZ(50px)" }}
        >
          <Link
            href="/contact"
            className="
              inline-flex items-center gap-2
              px-9 py-4 rounded-xl
              bg-neutral-100 text-black font-medium
              hover:bg-neutral-200
              transition
            "
          >
            Start a Project
          </Link>

          <Link
            href="/programs"
            className="
              inline-flex items-center gap-2
              px-9 py-4 rounded-xl
              border border-neutral-700 text-white
              hover:border-neutral-400
              transition
            "
          >
            Explore Programs
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
