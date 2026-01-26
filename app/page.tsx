// // app/page.tsx

// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-black text-zinc-100 flex flex-col items-center px-6">
//       {/* Header */}
//       <header className="w-full max-w-5xl py-20 text-center">
//         <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
//           Silicality
//         </h1>
//         <p className="mt-4 text-lg text-zinc-400">
//           Building through Open Source & Community
//         </p>
//       </header>

//       {/* Events Section */}
//       <section className="w-full max-w-5xl pb-32">
//         <h2 className="text-xl font-semibold text-zinc-300 mb-10">
//           Events & Programs
//         </h2>

//         {/* Event Card */}
//         <Link
//           href="https://spring.silicality.com"
//           target="_blank"
//           className="group block rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-zinc-700 hover:bg-zinc-900"
//         >
//           <span className="text-xs uppercase tracking-widest text-zinc-500">
//             Open Source Program
//           </span>

//           <h3 className="mt-3 text-2xl font-semibold text-white">
//             Spring of Silicality 2026 🌸
//           </h3>

//           <p className="mt-4 max-w-xl text-zinc-400 leading-relaxed">
//             A beginner-friendly open source contribution program focused on
//             learning, collaboration, and real-world impact.
//           </p>

//           <div className="mt-6 flex items-center gap-2 text-sm text-zinc-400">
//             <span>March – June 2026</span>
//             <span className="text-zinc-600">•</span>
//             <span className="font-medium text-white group-hover:underline">
//               View Program →
//             </span>
//           </div>
//         </Link>
//       </section>

//       {/* Footer */}
//       <footer className="w-full border-t border-zinc-900 py-10 text-center text-sm text-zinc-500">
//         © {new Date().getFullYear()} Silicality · More programs coming soon
//       </footer>
//     </main>
//   );
// }
// export const metadata = {
//   title: "AI & Technology Ecosystem",
//   description:
//     "Silicality builds AI-powered products, web & app solutions, runs tech programs, and is developing a contribution-first platform.",
// };

// import Hero from "@/components/home/Hero";
// import WhatWeDo from "@/components/home/WhatWeDo";
// import Services from "@/components/home/Services";
// import Programs from "@/components/home/Programs";
// import Mentorship from "@/components/home/Mentorship";
// import Platform from "@/components/home/Platform";
// import Sponsors from "@/components/home/Sponsors";
// import FinalCTA from "@/components/home/FinalCTA";

// export default function HomePage() {
//   return (
//     <>
//       <Hero />
//       <WhatWeDo />
//       <Services />
//       <Programs />
//       <Mentorship />
//       <Platform />
//       <Sponsors />
//       <FinalCTA />
//     </>
//   );
// }



import type { Metadata } from "next";

import Hero from "@/components/home/Hero";
import WhatWeDo from "@/components/home/WhatWeDo";
import Services from "@/components/home/Services";
import Programs from "@/components/home/Programs";
import Mentorship from "@/components/home/Mentorship";
import Platform from "@/components/home/Platform";
import Sponsors from "@/components/home/Sponsors";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Build, Learn & Contribute to Real Technology",
  description:
    "Silicality is a contribution-first technology ecosystem where developers build real projects, learn AI & web development, and grow through open-source programs and mentorship.",
  keywords: [
    "open source platform",
    "developer ecosystem",
    "learn open source",
    "AI and web development",
    "tech programs for students",
    "Silicality",
  ],
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Services />
      <Programs />
      <Mentorship />
      <Platform />
      <Sponsors />
      <FinalCTA />
    </>
  );
}
