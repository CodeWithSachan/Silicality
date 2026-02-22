"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function ServicesClient() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 md:py-32 px-4 sm:px-6">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-neutral-900/60 via-black to-black" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-125 w-125 rounded-full bg-purple-500/10 blur-[120px]" />


      <div className="max-w-6xl mx-auto">
        {/* ================= HEADER ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative"
        >
<span
  className="
    absolute inset-0 flex items-center justify-center
    font-bold text-white/5 select-none pointer-events-none
    text-[clamp(4.5rem,16vw,18rem)]
    whitespace-nowrap
  "
>
  SILICALITY
</span>


          <motion.h1
            variants={fadeUp}
            className="relative text-3xl sm:text-4xl md:text-5xl font-semibold"
          >
            Our Services
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="relative mt-4 text-neutral-400 max-w-3xl"
          >
            Practical AI, technology, and design solutions for startups,
            creators, and organizations — focused on outcomes, not buzzwords.
          </motion.p>
        </motion.div>

        {/* ================= SERVICES ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid gap-6 sm:grid-cols-2 md:grid-cols-3"
        >
          {[
{
  title: "AI & Automation",
  desc:
    "Practical AI solutions that streamline operations and integrate seamlessly into your existing workflows.",
  items: [
    "Custom Model Training & Fine-Tuning",
    "Chatbots & AI Assistants",
    "AI System Integrations",
    "Workflow & Process Automation",
  ],
},
{
  title: "Web Development",
  desc:
    "Modern, scalable web products built for performance, usability, and long-term growth.",
  items: [
    "Web Platforms & Dashboards",
    "Custom Web Applications",
    "Startup MVP Development",
    "Performance Optimization",
  ],
},
{
  title: "App Development",
  desc:
    "High-performance mobile applications designed for seamless user experience and business impact.",
  items: [
    "Android & iOS App Development",
    "Cross-Platform Applications",
    "Startup MVP Apps",
    "UI/UX Implementation",
  ],
},
{
  title: "Design & Branding",
  desc:
    "Strategic design systems and brand identities that create clarity, trust, and recognition.",
  items: [
    "UI/UX Design",
    "Brand Identity & Logo Design",
    "Visual Systems & Guidelines",
    "Marketing & Pitch Deck Design",
  ],
},
{
  title: "Video Editing",
  desc:
    "High-quality video content crafted to engage audiences and elevate your brand presence.",
  items: [
    "Promotional & Brand Videos",
    "Reels & Short-Form Content",
    "YouTube Video Editing",
    "Corporate & Event Videos",
  ],
},
{
  title: "Social Media Management",
  desc:
    "Strategic content and account management to grow your audience and strengthen digital presence.",
  items: [
    "Content Strategy & Planning",
    "Creative Post Design",
    "Account Management",
    "Analytics & Growth Optimization",
  ],
}
          ].map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur p-7 hover:border-neutral-600 transition"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-neutral-400">{service.desc}</p>

              <ul className="mt-6 space-y-2 text-sm text-neutral-300">
                {service.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= HOW WE WORK ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-28 grid gap-14 md:grid-cols-2 items-center"
        >
          <div>
            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-3xl font-semibold"
            >
              How We Work
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-neutral-400"
            >
              Transparent. Structured. Collaborative.
            </motion.p>

            <div className="mt-10 space-y-6">
              {[
                "Understand goals & constraints",
                "Define scope & timeline",
                "Build with continuous feedback",
                "Deliver, iterate, and support",
              ].map((step, i) => (
                <motion.div
                  key={step}
                  variants={fadeUp}
                  className="flex items-start gap-4"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-white/70" />
                  <p className="text-neutral-300">
                    <span className="text-neutral-500 mr-2">{i + 1}.</span>
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

<motion.div
  variants={fadeUp}
  className="relative h-64 sm:h-80 md:h-96"
>

            <Image
              src="/how-we-work.png"
              alt="How we work"
              fill
              className="object-contain opacity-90"
            />
          </motion.div>
        </motion.div>

        {/* ================= CTA ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-28 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Let's work together
          </h2>
          <p className="mt-4 text-neutral-400">
            Have an idea or project in mind? Tell us what you're building.
          </p>

          <Link
            href="/contact"
            className="inline-flex mt-8 px-8 py-3 rounded-xl bg-white text-black font-medium hover:bg-neutral-200 transition"
          >
            Get a Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
}