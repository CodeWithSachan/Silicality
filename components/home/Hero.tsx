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
