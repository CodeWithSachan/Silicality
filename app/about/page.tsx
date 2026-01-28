// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "About Silicality",
//   description:
//     "Silicality is a contribution-first AI and technology ecosystem building real-world products, programs, and platforms focused on long-term impact.",
//   keywords: [
//     "Silicality",
//     "technology ecosystem",
//     "AI platform",
//     "open source programs",
//     "developer community",
//   ],
// };

// export default function AboutPage() {
//   return (
//     <section
//       className="py-32 px-6"
//       aria-labelledby="about-silicality"
//     >
//       <div className="max-w-3xl mx-auto">
//         <h1
//           id="about-silicality"
//           className="text-4xl font-semibold tracking-tight"
//         >
//           About Silicality
//         </h1>

//         <p className="mt-6 text-lg text-neutral-400">
//           Silicality is a contribution-first AI and technology ecosystem focused
//           on building real-world products, programs, and platforms.
//         </p>

//         <p className="mt-6 text-neutral-400">
//           We work with startups, creators, and organizations to design and build
//           AI-driven solutions, run learning-focused programs, and create
//           opportunities for developers and contributors to grow through real
//           execution.
//         </p>

//         <p className="mt-6 text-neutral-400">
//           Our approach emphasizes clarity, collaboration, and long-term impact
//           over hype or shortcuts. Many Silicality initiatives are built openly
//           and in public, allowing the community to learn, contribute, and grow
//           together.
//         </p>

//         <p className="mt-10 text-sm text-neutral-500">
//           Contact:{" "}
//           <a
//             href="mailto:silicality.dev@gmail.com"
//             className="underline hover:text-neutral-300 transition"
//           >
//             silicality.dev@gmail.com
//           </a>
//         </p>
//       </div>
//     </section>
//   );
// }

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Silicality",
  description:
    "Silicality is a contribution-first AI and technology ecosystem building real-world products, programs, and platforms focused on long-term impact.",
  keywords: [
    "Silicality",
    "technology ecosystem",
    "AI platform",
    "open source programs",
    "developer community",
  ],
};

export default function AboutPage() {
  return (
    <section
      className="py-32 px-6"
      aria-labelledby="about-silicality"
    >
      <div className="max-w-3xl mx-auto">
        <h1
          id="about-silicality"
          className="text-4xl font-semibold tracking-tight"
        >
          About Silicality
        </h1>

        <p className="mt-6 text-lg text-neutral-400">
          Silicality is a contribution-first AI and technology ecosystem focused
          on building real-world products, programs, and platforms.
        </p>

        {/* ✅ Founder clarity */}
        <p className="mt-6 text-neutral-400">
          Silicality was founded by Ayush Sachan with the vision of creating a
          contribution-first technology ecosystem where developers grow by
          building real-world projects and creating meaningful impact.
        </p>

        <p className="mt-6 text-neutral-400">
          We work with startups, creators, and organizations to design and build
          AI-driven solutions, run learning-focused programs, and create
          opportunities for developers and contributors to grow through real
          execution.
        </p>

        <p className="mt-6 text-neutral-400">
          Our approach emphasizes clarity, collaboration, and long-term impact
          over hype or shortcuts. Many Silicality initiatives are built openly
          and in public, allowing the community to learn, contribute, and grow
          together.
        </p>

        <p className="mt-10 text-sm text-neutral-500">
          Contact:{" "}
          <a
            href="mailto:silicality.dev@gmail.com"
            className="underline hover:text-neutral-300 transition"
          >
            silicality.dev@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
