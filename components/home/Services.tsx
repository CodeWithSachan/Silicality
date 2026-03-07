"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";

/* --------------------------------
   Data
--------------------------------- */
const services = [
  {
    title: "AI Systems",
    label: "AI",
    desc: "Custom AI systems integrated into real products and workflows — designed for reliability, usability, and measurable impact.",
    points: [
      "AI assistants & copilots",
      "AI integrations & APIs",
      "Automation systems & internal tools",
    ],
    color: "bg-blue-500",
    text: "text-blue-400",
  },
  {
    title: "Web Platforms",
    label: "BUILD",
    desc: "Scalable web platforms engineered for performance, maintainability, and long-term growth.",
    points: [
      "Startup MVP platforms",
      "Dashboards & SaaS products",
      "High-performance web applications",
    ],
    color: "bg-rose-500",
    text: "text-rose-400",
    featured: true,
  },
  {
    title: "Product Design",
    label: "DESIGN",
    desc: "Clear product interfaces and visual systems built to support usability, clarity, and strong product communication.",
    points: [
      "UI/UX design systems",
      "Brand identity & product visuals",
      "Pitch decks & launch assets",
      "Video editing & motion graphics",
    ],
    color: "bg-violet-500",
    text: "text-violet-400",
  },
];

/* --------------------------------
   Main Component
--------------------------------- */
export default function Services() {
  return (
    <section className="relative py-32 px-6 bg-[#0B0E14] overflow-hidden">
      {/* Architectural base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.04),transparent_55%)]" />

      {/* Dot grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ambient glow */}
      <motion.div
        aria-hidden
        className="absolute right-[-20%] top-[10%] w-150 h-150 rounded-full bg-violet-500/10 blur-[120px]"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex mb-5 px-4 py-1 text-xs rounded-full border border-white/10 text-neutral-300">
            Silicality Labs
          </span>

          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-100">
            Services built for
            <span className="block text-neutral-400">
              real-world products
            </span>
          </h2>

          <p className="mt-6 text-lg text-neutral-400">
            We help founders and teams turn ideas into
            <span className="text-neutral-200">
              {" "}production-ready digital products
            </span>{" "}
            — combining AI systems, engineering, and product design.
          </p>
        </motion.header>

        {/* Services Grid */}
        <div className="relative mt-24 grid gap-12 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-medium hover:bg-neutral-200 transition"
          >
            Start a Project →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* --------------------------------
   Service Card
--------------------------------- */
function ServiceCard({ service }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-40, 40], [6, -6]);
  const rotateY = useTransform(x, [-40, 40], [-6, 6]);

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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`
        relative rounded-3xl p-8
        bg-[#121621]
        border border-white/10
        transition
        hover:border-white/20
        hover:-translate-y-1
        ${service.featured ? "md:-mt-10" : ""}
      `}
    >
      {/* Color spine */}
      <div
        className={`absolute left-0 top-0 h-full w-1 rounded-l-3xl ${service.color}`}
      />

      {/* Ambient blob */}
      <motion.div
        aria-hidden
        className={`absolute -top-12 -right-12 w-32 h-32 rounded-full ${service.color} opacity-[0.08] blur-3xl`}
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <span className={`text-xs tracking-widest ${service.text}`}>
        {service.label}
      </span>

      <h3 className="mt-3 text-xl font-medium text-neutral-100">
        {service.title}
      </h3>

      <p className="mt-4 text-neutral-400 leading-relaxed">
        {service.desc}
      </p>

      {/* Divider */}
      <div className="mt-6 h-px bg-white/10" />

      <ul className="mt-6 space-y-2 text-sm text-neutral-300">
        {service.points.map((point: string) => (
          <li key={point}>— {point}</li>
        ))}
      </ul>
    </motion.article>
  );
}