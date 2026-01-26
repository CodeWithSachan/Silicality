(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/programs/ProgramsClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgramsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";
// export default function ProgramsPage() {
//   return (
//     <section className="relative overflow-hidden py-20 sm:py-24 md:py-32 px-4 sm:px-6">
//       {/* subtle background grid + glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.08),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.08),transparent_40%)]" />
//       <div className="relative max-w-6xl mx-auto space-y-20 sm:space-y-24 md:space-y-32">
//         {/* ================= HERO ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 32 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           className="relative overflow-hidden rounded-2xl sm:rounded-3xl
//           border border-white/10 bg-neutral-900/40 backdrop-blur-sm
//           p-6 sm:p-10 md:p-16"
//         >
//           {/* Background image */}
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: "url('/program-hero-bg.png')" }}
//           />
//           {/* VERY LIGHT vignette */}
//           <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/20 to-transparent" />
//           {/* Content */}
//           <div className="relative max-w-2xl space-y-6 sm:space-y-8">
//             <span
//               className="inline-flex items-center gap-2 rounded-full
//               border border-pink-500/40 bg-pink-500/10
//               px-4 py-1 text-xs font-medium text-pink-400"
//             >
//               Spring cycle active
//             </span>
//             <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight">
//               Spring of{" "}
//               <span className="text-pink-400 italic">Silicality 2026</span>
//             </h1>
//             <p className="text-base sm:text-lg text-neutral-300">
//               A beginner-friendly open-source contribution program focused on
//               learning by doing, collaboration, and building in public.
//             </p>
//             <div className="flex flex-wrap gap-3 sm:gap-4">
//               <Link
//                 href="https://spring.silicality.com"
//                 target="_blank"
//                 className="rounded-full bg-pink-500 px-6 sm:px-7 py-3
//                 text-sm font-semibold text-black hover:bg-pink-400 transition"
//               >
//                 Register Now
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//         {/* ================= STATS ================= */}
//         <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
//           {[
//             { label: "Global Contributors", value: "100+" },
//             { label: "Lines of Code", value: "50k+" },
//             { label: "Nodes Active", value: "200" },
//           ].map((stat) => (
//             <div
//               key={stat.label}
//               className="rounded-2xl border border-white/10
//               bg-neutral-900/60 p-6 sm:p-8 backdrop-blur-xl"
//             >
//               <p className="text-xs uppercase tracking-widest text-neutral-500">
//                 {stat.label}
//               </p>
//               <p className="mt-2 sm:mt-3 text-3xl sm:text-4xl font-semibold">
//                 {stat.value}
//               </p>
//               <div className="mt-5 sm:mt-6 h-1.5 w-full rounded-full bg-white/5">
//                 <div className="h-full w-3/4 rounded-full bg-linear-to-r from-pink-500 to-violet-500" />
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* ================= ROADMAP + EXPERIMENTS ================= */}
//         <div className="grid gap-16 sm:gap-20 lg:grid-cols-12">
//           {/* Roadmap */}
//           <div className="lg:col-span-5 space-y-8 sm:space-y-10">
//             <div>
//               <h2 className="text-2xl sm:text-3xl font-semibold">
//                 Program Roadmap
//               </h2>
//               <p className="mt-2 text-sm sm:text-base text-neutral-400">
//                 Follow the seasonal evolution of the ecosystem.
//               </p>
//             </div>
//             <ol className="space-y-6 sm:space-y-8 border-l border-white/10 pl-5 sm:pl-6">
//               {[
//                 ["Registration Opens", "January 20"],
//                 ["Contributor Registration Opens", "January 20"],
//                 ["Coding Period Begins", "March 1"],
//                 ["Coding Period Ends", "May 30"],
//                 ["Certificates Awarded", "May 31"],
//               ].map(([title, time]) => (
//                 <li key={title}>
//                   <h4 className="font-medium">{title}</h4>
//                   <p className="text-sm text-neutral-500">{time}</p>
//                 </li>
//               ))}
//             </ol>
//           </div>
//           {/* Experiments */}
//           <div className="lg:col-span-7 space-y-6 sm:space-y-8">
//             <div className="flex items-start sm:items-center justify-between gap-4">
//               <div>
//                 <h2 className="text-2xl sm:text-3xl font-semibold">
//                   Upcoming Programs
//                 </h2>
//                 <p className="mt-2 text-sm sm:text-base text-neutral-400">
//                   Building in public. Real-time R&D modules.
//                 </p>
//               </div>
//               {/* <Link
//                 href="/experiments"
//                 className="text-sm font-medium text-pink-400 hover:underline whitespace-nowrap"
//               >
//                 View all →
//               </Link> */}
//             </div>
//             <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
//               {["Quizzes", "Hackathon", "SkillBuild"].map((title) => (
//                 <div
//                   key={title}
//                   className="rounded-2xl border border-white/10
//                   bg-neutral-900/60 p-5 sm:p-6 backdrop-blur-xl
//                   hover:border-pink-400/40 transition"
//                 >
//                   <h3 className="font-medium">{title}</h3>
//                   <p className="mt-2 text-sm text-neutral-400" />
//                 </div>
//               ))}
//               <div className="flex items-center justify-center rounded-2xl
//               border border-dashed border-white/20 p-5 sm:p-6
//               text-sm text-neutral-400 hover:border-pink-400/40 transition">
//                 ...
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* ================= CTA ================= */}
//         <section className="relative rounded-2xl sm:rounded-3xl
//         border border-white/10 bg-neutral-900/70
//         p-8 sm:p-14 text-center backdrop-blur-xl">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
//             Ready to Contribute?
//           </h2>
//           <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">
//             Be among the first contributors and get early access to Spring of Silicality.
//           </p>
//           <div className="mt-6 sm:mt-8 flex justify-center">
//             <Link
//               href="https://spring.silicality.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center justify-center
//               h-11 sm:h-12 rounded-full bg-pink-500 px-7 sm:px-8
//               font-semibold text-black hover:bg-pink-400 transition"
//             >
//               Register Now
//             </Link>
//           </div>
//           <p className="mt-4 text-xs uppercase tracking-widest text-neutral-500">
//             Secured with Silicality encryption
//           </p>
//         </section>
//       </div>
//     </section>
//   );
// }
"use client";
;
;
;
function ProgramsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden py-20 sm:py-24 md:py-32 px-4 sm:px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.08),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.08),transparent_40%)]"
            }, void 0, false, {
                fileName: "[project]/app/programs/ProgramsClient.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-6xl mx-auto space-y-20 sm:space-y-24 md:space-y-32",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 32
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.9,
                            ease: "easeOut"
                        },
                        className: "relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-neutral-900/40 backdrop-blur-sm p-6 sm:p-10 md:p-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                className: "absolute inset-0 w-full h-full object-cover",
                                src: "/program-bg.mp4",
                                autoPlay: true,
                                loop: true,
                                muted: true,
                                playsInline: true
                            }, void 0, false, {
                                fileName: "[project]/app/programs/ProgramsClient.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/app/programs/ProgramsClient.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative max-w-2xl space-y-6 sm:space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-2 rounded-full border border-pink-500/40 bg-pink-500/10 px-4 py-1 text-xs font-medium text-pink-400",
                                        children: "Spring cycle active"
                                    }, void 0, false, {
                                        fileName: "[project]/app/programs/ProgramsClient.tsx",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-white",
                                        children: [
                                            "Spring of",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-pink-400 italic",
                                                children: "Silicality 2026"
                                            }, void 0, false, {
                                                fileName: "[project]/app/programs/ProgramsClient.tsx",
                                                lineNumber: 241,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/programs/ProgramsClient.tsx",
                                        lineNumber: 239,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base sm:text-lg text-neutral-200",
                                        children: "A beginner-friendly open-source contribution program focused on learning by doing, collaboration, and building in public."
                                    }, void 0, false, {
                                        fileName: "[project]/app/programs/ProgramsClient.tsx",
                                        lineNumber: 244,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-3 sm:gap-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "https://spring.silicality.com",
                                            target: "_blank",
                                            className: "rounded-full bg-pink-500 px-6 sm:px-7 py-3 text-sm font-semibold text-black hover:bg-pink-400 transition",
                                            children: "Register Now"
                                        }, void 0, false, {
                                            fileName: "[project]/app/programs/ProgramsClient.tsx",
                                            lineNumber: 250,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/programs/ProgramsClient.tsx",
                                        lineNumber: 249,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/programs/ProgramsClient.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/programs/ProgramsClient.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:gap-6 md:grid-cols-3",
                        children: [
                            {
                                label: "Global Contributors",
                                value: "100+"
                            },
                            {
                                label: "Lines of Code",
                                value: "50k+"
                            },
                            {
                                label: "Nodes Active",
                                value: "200"
                            }
                        ].map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8 backdrop-blur-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs uppercase tracking-widest text-neutral-500",
                                        children: stat.label
                                    }, void 0, false, {
                                        fileName: "[project]/app/programs/ProgramsClient.tsx",
                                        lineNumber: 274,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 sm:mt-3 text-3xl sm:text-4xl font-semibold",
                                        children: stat.value
                                    }, void 0, false, {
                                        fileName: "[project]/app/programs/ProgramsClient.tsx",
                                        lineNumber: 277,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 sm:mt-6 h-1.5 w-full rounded-full bg-white/5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full w-3/4 rounded-full bg-linear-to-r from-pink-500 to-violet-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/programs/ProgramsClient.tsx",
                                            lineNumber: 281,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/programs/ProgramsClient.tsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, stat.label, true, {
                                fileName: "[project]/app/programs/ProgramsClient.tsx",
                                lineNumber: 269,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/programs/ProgramsClient.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-16 sm:gap-20 lg:grid-cols-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-5 space-y-8 sm:space-y-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl sm:text-3xl font-semibold",
                                                children: "Program Roadmap"
                                            }, void 0, false, {
                                                fileName: "[project]/app/programs/ProgramsClient.tsx",
                                                lineNumber: 291,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm sm:text-base text-neutral-400",
                                                children: "Follow the seasonal evolution of the ecosystem."
                                            }, void 0, false, {
                                                fileName: "[project]/app/programs/ProgramsClient.tsx",
                                                lineNumber: 294,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/programs/ProgramsClient.tsx",
                                        lineNumber: 290,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                        className: "space-y-6 sm:space-y-8 border-l border-white/10 pl-5 sm:pl-6",
                                        children: [
                                            [
                                                "Registration Opens",
                                                "January 20"
                                            ],
                                            [
                                                "Contributor Registration Opens",
                                                "January 20"
                                            ],
                                            [
                                                "Coding Period Begins",
                                                "March 1"
                                            ],
                                            [
                                                "Coding Period Ends",
                                                "May 30"
                                            ],
                                            [
                                                "Certificates Awarded",
                                                "May 31"
                                            ]
                                        ].map(([title, time])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-medium",
                                                        children: title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/programs/ProgramsClient.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-neutral-500",
                                                        children: time
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/programs/ProgramsClient.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, title, true, {
                                                fileName: "[project]/app/programs/ProgramsClient.tsx",
                                                lineNumber: 307,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/programs/ProgramsClient.tsx",
                                        lineNumber: 299,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/programs/ProgramsClient.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-7 space-y-6 sm:space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start sm:items-center justify-between gap-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl sm:text-3xl font-semibold",
                                                    children: "Upcoming Programs"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/programs/ProgramsClient.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-sm sm:text-base text-neutral-400",
                                                    children: "Building in public. Real-time R&D modules."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/programs/ProgramsClient.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/programs/ProgramsClient.tsx",
                                            lineNumber: 318,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/programs/ProgramsClient.tsx",
                                        lineNumber: 317,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 sm:gap-6 sm:grid-cols-2",
                                        children: [
                                            [
                                                "Quizzes",
                                                "Hackathon",
                                                "SkillBuild"
                                            ].map((title)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl border border-white/10 bg-neutral-900/60 p-5 sm:p-6 backdrop-blur-xl hover:border-pink-400/40 transition",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-medium",
                                                            children: title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/programs/ProgramsClient.tsx",
                                                            lineNumber: 343,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-2 text-sm text-neutral-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/programs/ProgramsClient.tsx",
                                                            lineNumber: 344,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, title, true, {
                                                    fileName: "[project]/app/programs/ProgramsClient.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 17
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center rounded-2xl border border-dashed border-white/20 p-5 sm:p-6 text-sm text-neutral-400 hover:border-pink-400/40 transition",
                                                children: "..."
                                            }, void 0, false, {
                                                fileName: "[project]/app/programs/ProgramsClient.tsx",
                                                lineNumber: 348,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/programs/ProgramsClient.tsx",
                                        lineNumber: 335,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/programs/ProgramsClient.tsx",
                                lineNumber: 316,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/programs/ProgramsClient.tsx",
                        lineNumber: 287,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative rounded-2xl sm:rounded-3xl border border-white/10 bg-neutral-900/70 p-8 sm:p-14 text-center backdrop-blur-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl sm:text-3xl md:text-4xl font-semibold",
                                children: "Ready to Contribute?"
                            }, void 0, false, {
                                fileName: "[project]/app/programs/ProgramsClient.tsx",
                                lineNumber: 361,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto",
                                children: "Be among the first contributors and get early access to Spring of Silicality."
                            }, void 0, false, {
                                fileName: "[project]/app/programs/ProgramsClient.tsx",
                                lineNumber: 364,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 sm:mt-8 flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "https://spring.silicality.com",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "inline-flex items-center justify-center h-11 sm:h-12 rounded-full bg-pink-500 px-7 sm:px-8 font-semibold text-black hover:bg-pink-400 transition",
                                    children: "Register Now"
                                }, void 0, false, {
                                    fileName: "[project]/app/programs/ProgramsClient.tsx",
                                    lineNumber: 369,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/programs/ProgramsClient.tsx",
                                lineNumber: 368,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-xs uppercase tracking-widest text-neutral-500",
                                children: "Secured with Silicality encryption"
                            }, void 0, false, {
                                fileName: "[project]/app/programs/ProgramsClient.tsx",
                                lineNumber: 381,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/programs/ProgramsClient.tsx",
                        lineNumber: 358,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/programs/ProgramsClient.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/programs/ProgramsClient.tsx",
        lineNumber: 202,
        columnNumber: 5
    }, this);
}
_c = ProgramsPage;
var _c;
__turbopack_context__.k.register(_c, "ProgramsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_programs_ProgramsClient_tsx_04c3f7b0._.js.map