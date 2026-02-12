// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="relative w-full min-h-svh overflow-hidden">
//       {/* 🎥 BACKGROUND VIDEO */}
// {/* <video
//   className="absolute inset-0 w-full h-full object-cover"
//   src="/hero-bg.mp4"
//   autoPlay
//   muted
//   playsInline
//   style={{
//     objectPosition: "125% right",
//   }}
// /> */}

// <video
//   className="absolute inset-0 h-full w-full object-cover"
//   src="https://res.cloudinary.com/dtc3kiepa/video/upload/f_auto,q_auto,vc_auto/hero-bg_sx3xnh"
//   poster="https://res.cloudinary.com/dtc3kiepa/video/upload/so_0/hero-bg_sx3xnh.jpg"
//   autoPlay
//   // loop
//   muted
//   playsInline
//   preload="metadata"
// />



//       {/* 🌫️ OVERLAY (controls contrast) */}
//       <div className="absolute inset-0 bg-black/25" />

//       {/* CONTENT */}
//       <div className="relative z-10 flex items-center min-h-svh px-4 sm:px-6">
//         <div className="max-w-6xl sm:pl-0 md:pl-16">
//           {/* Headline */}
//           <motion.h1
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, ease: "easeOut" }}
//             className="
//               text-3xl sm:text-4xl md:text-7xl
//               font-semibold tracking-tight
//               leading-tight sm:leading-[1.05]
//               text-white
//             "
//           >
//             We build AI-powered Products
//             <br />
//             and Programs.
//           </motion.h1>

//           {/* Subheadline */}
//           <motion.p
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.15, duration: 0.9, ease: "easeOut" }}
//             className="
//               mt-5 sm:mt-8
//               text-base sm:text-lg md:text-xl
//               text-white
//               max-w-2xl
//             "
//           >
//             Silicality helps startups, creators, and organizations
//             turn ideas into real-world impact.
//           </motion.p>

//           {/* CTA */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
//             className="mt-8 sm:mt-12 flex flex-wrap gap-3 sm:gap-4"
//           >
//             <Link
//               href="/contact"
//               className="
//                 px-6 sm:px-7 py-3 rounded-xl
//                 bg-white text-black font-medium
//                 hover:bg-neutral-800 transition
//               "
//             >
//               Start a Project
//             </Link>

//             <Link
//               href="/programs"
//               className="
//                 px-6 sm:px-7 py-3 rounded-xl
//                 border border-white/30 text-white
//                 hover:border-white transition
//               "
//             >
//               Explore Programs
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="relative w-full min-h-svh overflow-hidden bg-[#0B0E14] text-white">
//       {/* =====================================================
//           BACKGROUND LAYERS
//       ====================================================== */}

//       {/* Subtle dot matrix texture */}
//       <div
//         aria-hidden
//         className="absolute inset-0 opacity-[0.04] pointer-events-none"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
//           backgroundSize: "28px 28px",
//         }}
//       />

//       {/* Large atmospheric mass (right side) */}
//       <motion.div
//         aria-hidden
//         className="
//           absolute right-[-20%] top-[10%]
//           w-[700px] h-[700px]
//           rounded-full
//           bg-rose-500/10
//           blur-[140px]
//         "
//         animate={{ y: [0, -30, 0] }}
//         transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Secondary ambient mass */}
//       <motion.div
//         aria-hidden
//         className="
//           absolute left-[-15%] bottom-[-10%]
//           w-[600px] h-[600px]
//           rounded-full
//           bg-indigo-500/10
//           blur-[140px]
//         "
//         animate={{ y: [0, 20, 0] }}
//         transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Diagonal architectural cut */}
//       <div
//         aria-hidden
//         className="
//           absolute top-[12%] right-[-20%]
//           w-[120%] h-[220px]
//           bg-white/5
//           rotate-[-6deg]
//         "
//       />

//       {/* =====================================================
//           CONTENT
//       ====================================================== */}
//       <div className="relative z-10 flex items-center min-h-svh px-6">
//         <div className="max-w-6xl mx-auto w-full">
//           <div className="max-w-4xl">
//             {/* Eyebrow */}
//             <motion.span
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="inline-flex px-4 py-1 text-xs rounded-full border border-white/10 text-neutral-300 tracking-widest uppercase"
//             >
//               Silicality Labs
//             </motion.span>

//             {/* Headline */}
//             <motion.h1
//               initial={{ opacity: 0, y: 24 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
//               className="
//                 mt-8
//                 text-4xl sm:text-6xl lg:text-[84px]
//                 font-semibold tracking-tight
//                 leading-[1.05]
//               "
//             >
//               We build
//               <span className="block text-neutral-400">
//                 AI-powered products
//               </span>
//               and contribution-driven programs.
//             </motion.h1>

//             {/* Subheadline */}
//             <motion.p
//               initial={{ opacity: 0, y: 24 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
//               className="
//                 mt-8
//                 text-lg sm:text-xl
//                 text-neutral-400
//                 max-w-2xl
//               "
//             >
//               Silicality helps startups, creators, and organizations
//               turn ambitious ideas into production-ready systems —
//               with structure, mentorship, and execution.
//             </motion.p>

//             {/* CTA */}
//             <motion.div
//               initial={{ opacity: 0, y: 24 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.35, duration: 0.9, ease: "easeOut" }}
//               className="mt-12 flex flex-wrap gap-4"
//             >
//               <Link
//                 href="/contact"
//                 className="
//                   px-8 py-4 rounded-xl
//                   bg-white text-black font-medium
//                   hover:bg-neutral-200 transition
//                 "
//               >
//                 Start a Project
//               </Link>

//               <Link
//                 href="/programs"
//                 className="
//                   px-8 py-4 rounded-xl
//                   border border-white/20 text-white
//                   hover:border-white transition
//                 "
//               >
//                 Explore Programs
//               </Link>
//             </motion.div>

//             {/* Micro trust line */}
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.6 }}
//               transition={{ delay: 0.6, duration: 1 }}
//               className="mt-10 text-xs tracking-widest uppercase text-neutral-500"
//             >
//               AI • Engineering • Mentorship • Real Contribution
//             </motion.p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import React from "react";
// import Link from "next/link";
// import {
//   motion,
//   useMotionValue,
//   useMotionTemplate,
//   useAnimationFrame,
//   useTransform,
// } from "framer-motion";

// function useWindowSize() {
//   const [size, setSize] = React.useState({ width: 0, height: 0 });

//   React.useEffect(() => {
//     function update() {
//       setSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }

//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

//   return size;
// }

// const cards = [
//   {
//     title: "AI Products",
//     desc: "Custom AI systems and automation tools built for production.",
//   },
//   {
//     title: "Websites",
//     desc: "High-performance platforms engineered for speed and scalability.",
//   },
//   {
//     title: "Applications",
//     desc: "Modern cross-platform apps designed for real-world growth.",
//   },
// ];

// // Animated Background Blob Component
// interface BlobProps {
//   delay: number;
//   size: number;
//   opacity: number;
//   position: React.CSSProperties;
// }

// function AnimatedBlob({ delay, size, opacity, position }: BlobProps) {
//   return (
//     <motion.div
//       className="absolute rounded-full bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-pink-600/10 blur-3xl"
//       style={{
//         width: size,
//         height: size,
//         ...position,
//       }}
//       animate={{
//         x: [0, 100, -100, 0],
//         y: [0, -120, 80, 0],
//         opacity: [opacity * 0.3, opacity, opacity * 0.5],
//         scale: [1, 1.1, 0.9, 1],
//       }}
//       transition={{
//         duration: 20 + Math.random() * 10,
//         repeat: Infinity,
//         delay,
//         ease: "easeInOut",
//       }}
//     />
//   );
// }

// // Floating Particle Component
// interface ParticleProps {
//   delay: number;
//   duration: number;
// }

// function Particle({ delay, duration }: ParticleProps) {
//   const randomX = Math.random() * 100;
//   const randomY = Math.random() * 100;
//   const randomDuration = 15 + Math.random() * 20;

//   return (
//     <motion.div
//       className="absolute w-1 h-1 bg-indigo-400 rounded-full"
//       style={{
//         left: `${randomX}%`,
//         top: `${randomY}%`,
//         opacity: 0.6,
//       }}
//       animate={{
//         y: [0, -300, -600],
//         opacity: [0, 0.8, 0],
//         x: [0, Math.cos(Math.random()) * 100, Math.cos(Math.random()) * 200],
//       }}
//       transition={{
//         duration: randomDuration,
//         repeat: Infinity,
//         delay,
//         ease: "easeOut",
//       }}
//     />
//   );
// }

// // Geometric Pattern Component
// function GeometricPattern() {
//   return (
//     <motion.svg
//       className="absolute inset-0 w-full h-full opacity-[0.08]"
//       viewBox="0 0 1000 1000"
//       animate={{ rotate: 360 }}
//       transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
//       style={{ filter: "drop-shadow(0 0 30px rgba(99, 102, 241, 0.1))" }}
//     >
//       <defs>
//         <pattern id="dots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
//           <circle cx="50" cy="50" r="2" fill="rgba(99, 102, 241, 0.4)" />
//         </pattern>
//       </defs>
      
//       {/* Concentric circles */}
//       <circle cx="500" cy="500" r="200" fill="none" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1" />
//       <circle cx="500" cy="500" r="300" fill="none" stroke="rgba(139, 92, 246, 0.12)" strokeWidth="1" />
//       <circle cx="500" cy="500" r="400" fill="none" stroke="rgba(99, 102, 241, 0.1)" strokeWidth="1" />
      
//       {/* Grid lines */}
//       {Array.from({ length: 8 }).map((_, i) => {
//         const angle = (i * 360) / 8;
//         const rad = (angle * Math.PI) / 180;
//         const x2 = 500 + 500 * Math.cos(rad);
//         const y2 = 500 + 500 * Math.sin(rad);
//         return (
//           <line
//             key={i}
//             x1="500"
//             y1="500"
//             x2={x2}
//             y2={y2}
//             stroke="rgba(99, 102, 241, 0.1)"
//             strokeWidth="1"
//           />
//         );
//       })}
//     </motion.svg>
//   );
// }

// // Animated Gradient Background
// function AnimatedGradientBg() {
//   return (
//     <motion.div
//       className="absolute inset-0 overflow-hidden"
//       animate={{
//         background: [
//           "radial-gradient(ellipse 200% 200% at 0% 0%, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.04) 25%, transparent 100%)",
//           "radial-gradient(ellipse 200% 200% at 100% 100%, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.04) 25%, transparent 100%)",
//           "radial-gradient(ellipse 200% 200% at 50% 50%, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.04) 25%, transparent 100%)",
//           "radial-gradient(ellipse 200% 200% at 0% 0%, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.04) 25%, transparent 100%)",
//         ],
//       }}
//       transition={{
//         duration: 20,
//         repeat: Infinity,
//         ease: "easeInOut",
//       }}
//     />
//   );
// }

// export default function Hero() {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const orbit = useMotionValue(0);

//   const { width } = useWindowSize();
//   const radius = width < 640 ? 110 : width < 1024 ? 160 : 220;

//   // Smooth continuous orbit
//   useAnimationFrame((time) => {
//     const speed = width < 640 ? 0.008 : 0.015;
//     orbit.set((time * speed) % 360);
//   });

//   function handleMouseMove(
//     event: React.MouseEvent<HTMLElement>
//   ) {
//     const { clientX, clientY, currentTarget } = event;
//     const { left, top } = currentTarget.getBoundingClientRect();
//     mouseX.set(clientX - left);
//     mouseY.set(clientY - top);
//   }

//   return (
//     <section
//       onMouseMove={handleMouseMove}
//       className="relative w-full min-h-screen overflow-hidden bg-[#030406] text-white flex items-center"
//     >
//       {/* 🌌 Animated Gradient Background */}
//       <AnimatedGradientBg />

//       {/* 🎆 Floating Animated Blobs */}
//       <AnimatedBlob
//         delay={0}
//         size={400}
//         opacity={0.6}
//         position={{ top: "-10%", left: "-5%" }}
//       />
//       <AnimatedBlob
//         delay={2}
//         size={300}
//         opacity={0.5}
//         position={{ bottom: "-5%", right: "-10%" }}
//       />
//       <AnimatedBlob
//         delay={4}
//         size={350}
//         opacity={0.4}
//         position={{ top: "40%", right: "-8%" }}
//       />

//       {/* 🌀 Geometric Pattern */}
//       <GeometricPattern />

//       {/* ✨ Floating Particles */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {Array.from({ length: 40 }).map((_, i) => (
//           <Particle key={i} delay={Math.random() * 5} duration={20} />
//         ))}
//       </div>

//       {/* 🌌 Mouse Atmosphere */}
//       <motion.div
//         className="pointer-events-none absolute inset-0 z-0 opacity-40"
//         style={{
//           background: useMotionTemplate`
//             radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(99,102,241,0.15), transparent 80%)
//           `,
//         }}
//       />

//       {/* 💫 Noise + Enhanced Grid */}
//       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150 pointer-events-none" />
      
//       {/* Animated Grid */}
//       <motion.div
//         className="absolute inset-0 opacity-[0.08]"
//         style={{
//           backgroundImage:
//             "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
//           backgroundSize: "40px 40px",
//         }}
//         animate={{
//           backgroundPosition: ["0px 0px", "40px 40px"],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />

//       {/* 🔆 Radial Light Rays */}
//       <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]">
//         <defs>
//           <radialGradient id="rays">
//             <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" />
//             <stop offset="100%" stopColor="transparent" />
//           </radialGradient>
//         </defs>
//         {Array.from({ length: 12 }).map((_, i) => {
//           const angle = (i * 360) / 12;
//           const rad = (angle * Math.PI) / 180;
//           const x = 50 + 30 * Math.cos(rad);
//           const y = 50 + 30 * Math.sin(rad);
//           return (
//             <line
//               key={i}
//               x1="50%"
//               y1="50%"
//               x2={`${x}%`}
//               y2={`${y}%`}
//               stroke="rgba(99, 102, 241, 0.2)"
//               strokeWidth="0.5"
//             />
//           );
//         })}
//       </svg>

//       <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
        
//         {/* LEFT CONTENT */}
//         <motion.div 
//           className="flex-1 text-center lg:text-left"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <motion.div 
//             className="inline-block px-4 py-1.5 mb-6 rounded-full border border-indigo-400/30 bg-indigo-400/10 backdrop-blur-md text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-indigo-300"
//             whileHover={{ scale: 1.05, borderColor: "rgba(99, 102, 241, 0.6)" }}
//             transition={{ type: "spring", stiffness: 300, damping: 10 }}
//           >
//             Silicality Labs
//           </motion.div>

//           <motion.h1 
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             <span className="block">We build</span>
//             <span className="block mt-3">intelligent digital products</span>
//             <span className="block mt-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//               powered by AI, design, and engineering.
//             </span>
//           </motion.h1>

//           <motion.p 
//             className="mt-6 sm:mt-8 text-sm sm:text-base text-neutral-400 max-w-md mx-auto lg:mx-0 leading-relaxed"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             Silicality partners with startups and teams to design, build, and scale
//             high-impact digital platforms.
//           </motion.p>

//           <motion.div 
//             className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//           >
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Link
//                 href="/contact"
//                 className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 font-semibold transition-all shadow-[0_0_30px_rgba(99,102,241,0.5)] text-sm sm:text-base"
//               >
//                 Start Project
//               </Link>
//             </motion.div>

//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Link
//                 href="/programs"
//                 className="px-6 py-3 rounded-full border border-indigo-400/30 bg-indigo-400/5 backdrop-blur-md hover:bg-indigo-400/10 hover:border-indigo-400/50 transition-all text-sm sm:text-base"
//               >
//                 Explore Programs
//               </Link>
//             </motion.div>
//           </motion.div>
//         </motion.div>

//         {/* 🌠 RIGHT CONSTELLATION SYSTEM */}
//         <motion.div 
//           className="relative flex-1 flex items-center justify-center mt-16 lg:mt-0"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.3, duration: 1, type: "spring", stiffness: 100 }}
//         >
//           <div className="relative w-75 h-75 sm:w-105 sm:h-105 lg:w-140 lg:h-140">

//             {/* ⭐ Star Field with Enhanced Animation */}
//             {Array.from({ length: 30 }).map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute bg-white rounded-full shadow-lg"
//                 style={{
//                   width: Math.random() * 1.5 + 0.5,
//                   height: Math.random() * 1.5 + 0.5,
//                   top: `${Math.random() * 100}%`,
//                   left: `${Math.random() * 100}%`,
//                   boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(255, 255, 255, 0.8)`,
//                 }}
//                 animate={{ 
//                   opacity: [0.1, 0.8, 0.1],
//                   scale: [1, 1.5, 1],
//                 }}
//                 transition={{
//                   duration: 3 + Math.random() * 4,
//                   repeat: Infinity,
//                   delay: Math.random() * 2,
//                 }}
//               />
//             ))}

//             {/* 🪐 Rotating Rings - Enhanced */}
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
//               className="absolute inset-0 rounded-full border border-indigo-500/20"
//               style={{
//                 boxShadow: "inset 0 0 40px rgba(99, 102, 241, 0.2)",
//               }}
//             />
//             <motion.div
//               animate={{ rotate: -360 }}
//               transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//               className="absolute inset-12 rounded-full border border-purple-500/20"
//               style={{
//                 boxShadow: "inset 0 0 30px rgba(139, 92, 246, 0.15)",
//               }}
//             />

//             {/* Extra orbital rings */}
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
//               className="absolute -inset-6 rounded-full border border-pink-500/10"
//             />

//             {/* 🌟 Center Core - Enhanced */}
//             <motion.div
//               animate={{
//                 boxShadow: [
//                   "0 0 40px rgba(99,102,241,0.4), inset 0 0 40px rgba(99,102,241,0.2)",
//                   "0 0 80px rgba(99,102,241,0.8), inset 0 0 60px rgba(139,92,246,0.4)",
//                   "0 0 40px rgba(99,102,241,0.4), inset 0 0 40px rgba(99,102,241,0.2)",
//                 ],
//               }}
//               transition={{ duration: 4, repeat: Infinity }}
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500"
//             />

//             {/* 🔗 Constellation Lines */}
//             <svg className="absolute inset-0 w-full h-full pointer-events-none filter drop-shadow(0 0 10px rgba(99, 102, 241, 0.3))">
//               {cards.map((_, i) => {
//                 const angle1 =
//                   ((orbit.get() +
//                     i * (360 / cards.length) +
//                     (i % 2 ? 15 : -20)) *
//                     Math.PI) /
//                   180;

//                 const angle2 =
//                   ((orbit.get() +
//                     ((i + 1) % cards.length) *
//                       (360 / cards.length)) *
//                     Math.PI) /
//                   180;

//                 const center = width < 640 ? 150 : width < 1024 ? 210 : 280;

//                 const x1 = center + Math.cos(angle1) * radius;
//                 const y1 = center + Math.sin(angle1) * radius;
//                 const x2 = center + Math.cos(angle2) * radius;
//                 const y2 = center + Math.sin(angle2) * radius;

//                 return (
//                   <motion.line
//                     key={i}
//                     x1={x1}
//                     y1={y1}
//                     x2={x2}
//                     y2={y2}
//                     stroke="rgba(99,102,241,0.5)"
//                     strokeWidth="1.5"
//                     animate={{ opacity: [0.2, 0.8, 0.2] }}
//                     transition={{ duration: 3, repeat: Infinity }}
//                     filter="drop-shadow(0 0 5px rgba(99, 102, 241, 0.4))"
//                   />
//                 );
//               })}
//             </svg>

//             {/* 🌍 Orbiting Cards */}
//             {cards.map((card, i) => {
//               const baseAngle =
//                 i * (360 / cards.length) + (i % 2 === 0 ? 20 : -15);

//               const x = useTransform(orbit, (o) => {
//                 const angle = ((o + baseAngle) * Math.PI) / 180;
//                 return Math.cos(angle) * radius;
//               });

//               const y = useTransform(orbit, (o) => {
//                 const angle = ((o + baseAngle) * Math.PI) / 180;
//                 return Math.sin(angle) * radius;
//               });

//               return (
//                 <motion.div
//                   key={i}
//                   className="absolute top-1/2 left-1/2"
//                   style={{ x, y }}
//                 >
//                   <motion.div
//                     whileHover={{ y: -12, scale: 1.08 }}
//                     transition={{ type: "spring", stiffness: 300, damping: 10 }}
//                     className="relative -ml-28 -mt-16 w-56 cursor-pointer group"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-transparent blur-3xl rounded-2xl group-hover:from-indigo-500/50 group-hover:via-purple-500/30 transition-all" />

//                     <div className="relative p-5 rounded-2xl border border-indigo-400/40 bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl shadow-2xl group-hover:border-indigo-400/60 transition-all">
//                       <h3 className="text-base font-bold text-white/95">
//                         {card.title}
//                       </h3>
//                       <p className="mt-2 text-sm text-neutral-300 leading-snug">
//                         {card.desc}
//                       </p>
                      
//                       {/* Hover indicator */}
//                       <motion.div
//                         className="mt-3 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
//                         initial={{ scaleX: 0 }}
//                         whileHover={{ scaleX: 1 }}
//                         transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                       />
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import React from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
  useTransform,
} from "framer-motion";

function useWindowSize() {
  const [size, setSize] = React.useState({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    function update() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
}

const cards = [
  {
    title: "AI Products",
    desc: "Custom AI systems and automation tools built for production.",
  },
  {
    title: "Websites",
    desc: "High-performance platforms engineered for speed and scalability.",
  },
  {
    title: "Applications",
    desc: "Modern cross-platform apps designed for real-world growth.",
  },
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const orbit = useMotionValue(0);

  const { width } = useWindowSize();

  // Responsive values
  const isMobile = width < 640;
  const isTablet = width < 1024;

  let containerSize = 280;
  let radiusMain = 110;
  let radiusSecondary = 60;
  let animationSpeed = 0.01;
  let cardWidth = "w-40";
  let cardMarginLeft = "-ml-20";
  let cardMarginTop = "-mt-14";
  let cardPaddingClass = "p-3";
  let titleSize = "text-xs";
  let descSize = "text-[10px]";
  let coreWidth = "w-16 h-16";
  let coreInner = "w-6 h-6";

  if (isTablet && !isMobile) {
    containerSize = 380;
    radiusMain = 160;
    radiusSecondary = 90;
    animationSpeed = 0.015;
    cardWidth = "w-56";
    cardMarginLeft = "-ml-28";
    cardMarginTop = "-mt-20";
    cardPaddingClass = "p-5";
    titleSize = "text-base";
    descSize = "text-sm";
    coreWidth = "w-28 h-28";
    coreInner = "w-10 h-10";
  } else if (!isTablet && !isMobile) {
    containerSize = 500;
    radiusMain = 220;
    radiusSecondary = 120;
    animationSpeed = 0.02;
    cardWidth = "w-64";
    cardMarginLeft = "-ml-32";
    cardMarginTop = "-mt-24";
    cardPaddingClass = "p-6";
    titleSize = "text-lg";
    descSize = "text-sm";
    coreWidth = "w-32 h-32";
    coreInner = "w-12 h-12";
  }

  const halfSize = containerSize / 2;

  // Animation
  useAnimationFrame((time) => {
    orbit.set((time * animationSpeed) % 360);
  });

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Helper function to calculate card positions for SVG
  const getCardPosition = (
    index: number,
    animationAngle: number,
    rad: number
  ) => {
    const baseAngle = index * (360 / cards.length);
    const angle = ((animationAngle + baseAngle) * Math.PI) / 180;
    return {
      x: Math.cos(angle) * rad,
      y: Math.sin(angle) * rad,
    };
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen overflow-hidden bg-[#030406] text-white flex items-center py-12 sm:py-0"
    >
      {/* Dynamic atmosphere */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-20 sm:opacity-30"
        style={{
          background: useMotionTemplate`
            radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(99,102,241,0.1), transparent 80%)
          `,
        }}
      />

      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-20 max-w-7xl mx-auto">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[9px] sm:text-[11px] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-indigo-400"
          >
            Silicality Labs
          </motion.div>

<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
  className="
    text-xl 
    sm:text-3xl 
    md:text-4xl 
    lg:text-5xl 
    font-bold 
    tracking-tight 
    leading-[1.15]
  "
>
  <span className="block">We build</span>
  <span className="block mt-1.5 sm:mt-2">
    intelligent digital products
  </span>
  <span className="block mt-1.5 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 via-white to-purple-400">
    powered by AI, design, and engineering.
  </span>
</motion.h1>


<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2 }}
  className="
    mt-4 sm:mt-6
    text-sm sm:text-base
    text-neutral-400
    max-w-md
    mx-auto lg:mx-0
    leading-relaxed
  "
>
  Silicality partners with startups and teams to design, build, and scale
  high-impact digital platforms.
</motion.p>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 sm:mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center lg:justify-start w-full sm:w-auto"
          >
            <Link
              href="/contact"
              className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 font-semibold transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] text-xs sm:text-base whitespace-nowrap"
            >
              Start Project
            </Link>

            <Link
              href="/programs"
              className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all text-xs sm:text-base whitespace-nowrap"
            >
              Explore Programs
            </Link>
          </motion.div>
        </div>

        {/* RIGHT ORBIT - ENHANCED & MOBILE RESPONSIVE */}
        <div className="relative w-full sm:flex-1 flex items-center justify-center">
          <div
            className="relative mx-auto"
            style={{
              width: containerSize,
              height: containerSize,
            }}
          >

            {/* SVG for constellation lines and connections */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                filter: "drop-shadow(0 0 15px rgba(79, 70, 229, 0.25))",
              }}
              viewBox={`0 0 ${containerSize} ${containerSize}`}
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="rgba(129, 140, 248, 0.4)" />
                  <stop offset="50%" stopColor="rgba(99, 102, 241, 0.6)" />
                  <stop offset="100%" stopColor="rgba(79, 70, 229, 0.3)" />
                </linearGradient>
              </defs>

              {/* Animated constellation connecting lines */}
              {cards.map((_, i) => {
                const nextI = (i + 1) % cards.length;
                const currPos = getCardPosition(i, 0, radiusMain);
                const nextPos = getCardPosition(nextI, 0, radiusMain);

                const x1 = halfSize + currPos.x;
                const y1 = halfSize + currPos.y;
                const x2 = halfSize + nextPos.x;
                const y2 = halfSize + nextPos.y;

                return (
                  <line
                    key={`line-${i}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="url(#lineGradient)"
                    strokeWidth={isMobile ? "1" : "1.5"}
                    opacity="0.4"
                    style={{
                      filter: "blur(0.5px)",
                    }}
                  />
                );
              })}

              {/* Secondary smaller nodes orbit */}
              {[0, 1, 2].map((i) => {
                const baseAngle = i * 120 + 60;
                const x = useTransform(orbit, (o) => {
                  const angle = ((o + baseAngle) * Math.PI) / 180;
                  return halfSize + Math.cos(angle) * radiusSecondary;
                });

                const y = useTransform(orbit, (o) => {
                  const angle = ((o + baseAngle) * Math.PI) / 180;
                  return halfSize + Math.sin(angle) * radiusSecondary;
                });

                return (
                  <motion.circle
                    key={`node-${i}`}
                    cx={x}
                    cy={y}
                    r={isMobile ? "2" : "3"}
                    fill="rgba(129, 140, 248, 0.6)"
                    filter="drop-shadow(0 0 8px rgba(79, 70, 229, 0.8))"
                  />
                );
              })}
            </svg>

            {/* Multiple orbital rings with different styles */}
            <div className="absolute inset-0 rounded-full border border-indigo-500/5" />
            <div className="absolute inset-0 rounded-full border border-indigo-500/5 scale-[0.75]" />
            <div className="absolute inset-0 rounded-full border border-indigo-500/5 scale-[0.55]" />

            {/* Decorative rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-indigo-400/10"
            />

            {/* Center Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className={`relative ${coreWidth}`}>
                {/* Animated pulsing rings around core */}
                {[1, 2].map((i) => (
                  <motion.div
                    key={`pulse-${i}`}
                    className="absolute inset-0 rounded-full border border-indigo-500/30"
                    animate={{ scale: [1, 1.3], opacity: [0.8, 0] }}
                    transition={{
                      duration: 3,
                      delay: i * 0.5,
                      repeat: Infinity,
                    }}
                  />
                ))}

                <div className="absolute inset-0 bg-indigo-500/20 blur-[50px] animate-pulse" />
                <div className="relative w-full h-full rounded-full border border-indigo-500/40 bg-black/40 backdrop-blur-3xl flex items-center justify-center">
                  <div className={`relative ${coreInner} rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 shadow-[0_0_40px_rgba(79,70,229,1)]`} />
                </div>
              </div>
            </div>

            {/* Main orbiting cards */}
            {cards.map((card, i) => {
              const baseAngle = i * (360 / cards.length);

              const x = useTransform(orbit, (o) => {
                const angle = ((o + baseAngle) * Math.PI) / 180;
                return Math.cos(angle) * radiusMain;
              });

              const y = useTransform(orbit, (o) => {
                const angle = ((o + baseAngle) * Math.PI) / 180;
                return Math.sin(angle) * radiusMain;
              });

              return (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2"
                  style={{ x, y }}
                >
                  <motion.div
                    whileHover={
                      isMobile
                        ? { scale: 1.05 }
                        : {
                            y: -8,
                            scale: 1.06,
                            boxShadow:
                              "0 0 40px rgba(79, 70, 229, 0.4), 0 0 60px rgba(99, 102, 241, 0.2)",
                          }
                    }
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className={`relative ${cardMarginLeft} ${cardMarginTop} ${cardWidth} cursor-pointer group`}
                  >
                    {/* Glow backdrop */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/10 blur-2xl sm:blur-3xl rounded-xl sm:rounded-2xl lg:rounded-3xl"
                      whileHover={{ opacity: 0.8 }}
                      initial={{ opacity: 0.4 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Card border glow */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-indigo-500/50 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
                    </div>

                    {/* Content container */}
                    <div className={`relative ${cardPaddingClass} rounded-xl sm:rounded-2xl lg:rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl hover:bg-gradient-to-br hover:from-white/12 hover:to-white/6 transition-all duration-300`}>
                      <h3 className={`${titleSize} font-bold text-white/90 group-hover:text-white transition-colors duration-300`}>
                        {card.title}
                      </h3>

                      <p className={`mt-2 ${descSize} text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 leading-snug`}>
                        {card.desc}
                      </p>

                      {/* Indicator dots */}
                      <motion.div
                        className="mt-2 sm:mt-3 flex gap-2"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {[0, 1, 2].map((dot) => (
                          <div
                            key={dot}
                            className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-indigo-500/60"
                          />
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
