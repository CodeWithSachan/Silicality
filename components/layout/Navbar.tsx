"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Programs", href: "/programs" },
    { label: "Mentorship", href: "/mentorship" },
    { label: "Sponsors", href: "/sponsors" },
  ];

  return (
    <nav
      className="
        sticky top-0 z-50
        bg-black/25
        backdrop-blur-xl
        shadow-[0_1px_0_rgba(255,255,255,0.06)]
      "
    >
      <div className="px-6 sm:px-8 pt-[env(safe-area-inset-top)]">
        <div className="max-w-6xl mx-auto flex h-20 items-center justify-between">
          
          {/* ===== LOGO ===== */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={120}
              height={120}
              priority
              className="opacity-95"
            />
          </Link>

          {/* ===== DESKTOP NAV ===== */}
          <div className="hidden md:flex items-center gap-10 text-sm text-neutral-300">
            {!isHome && (
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            )}

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition ${
                  pathname === link.href
                    ? "text-white"
                    : "hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="
                ml-4 px-6 py-2.5 rounded-xl
                bg-white text-black font-medium
                hover:bg-neutral-200 transition
              "
            >
              Start a Project
            </Link>
          </div>

          {/* ===== MOBILE TOGGLE ===== */}
          <button
            onClick={() => setOpen(!open)}
            className="
              md:hidden flex h-11 w-11 items-center justify-center
              rounded-xl text-neutral-300
              hover:text-white hover:bg-white/10 transition
            "
            aria-label="Toggle menu"
          >
            <span className="relative block h-5 w-5">
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-transform duration-200
                ${open ? "rotate-45" : "-translate-y-2"}`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-opacity duration-200
                ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-transform duration-200
                ${open ? "-rotate-45" : "translate-y-2"}`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              md:hidden
              bg-black/70
              backdrop-blur-xl
              shadow-[0_20px_40px_rgba(0,0,0,0.4)]
            "
          >
            <div className="px-8 py-8 flex flex-col gap-6 text-neutral-300">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={`text-base ${
                  isHome ? "text-white" : "hover:text-white"
                }`}
              >
                Home
              </Link>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-base transition ${
                    pathname === link.href
                      ? "text-white"
                      : "hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="
                  mt-2 px-6 py-3 rounded-xl
                  bg-white text-black font-medium
                  text-center hover:bg-neutral-200 transition
                "
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();
//   const isHome = pathname === "/";

//   const navLinks = [
//     { label: "Services", href: "/services" },
//     { label: "Programs", href: "/programs" },
//     { label: "Mentorship", href: "/mentorship" },
//     { label: "Sponsors", href: "/sponsors" },
//   ];

//   return (
//     <nav className="sticky top-6 z-50 flex justify-center px-6">
//       {/* ===== FLOATING CONTAINER ===== */}
//       <div
//         className="
//           w-full max-w-6xl
//           rounded-2xl
//           bg-black/40
//           backdrop-blur-xl
//           border border-white/10
//           shadow-[0_8px_40px_rgba(0,0,0,0.5)]
//         "
//       >
//         <div className="px-6 sm:px-8">
//           <div className="flex h-20 items-center justify-between">

//             {/* ===== LOGO ===== */}
//             <Link href="/" className="flex items-center gap-3">
//               <Image
//                 src="/logo.png"
//                 alt="Logo"
//                 width={120}
//                 height={120}
//                 priority
//                 className="opacity-95"
//               />
//             </Link>

//             {/* ===== DESKTOP NAV ===== */}
//             <div className="hidden md:flex items-center gap-10 text-sm text-neutral-300">
//               {!isHome && (
//                 <Link href="/" className="hover:text-white transition">
//                   Home
//                 </Link>
//               )}

//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className={`transition ${
//                     pathname === link.href
//                       ? "text-white"
//                       : "hover:text-white"
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               ))}

//               <Link
//                 href="/contact"
//                 className="
//                   ml-4 px-6 py-2.5 rounded-full
//                   bg-white text-black font-medium
//                   hover:bg-neutral-200 transition
//                 "
//               >
//                 Start a Project
//               </Link>
//             </div>

//             {/* ===== MOBILE TOGGLE ===== */}
//             <button
//               onClick={() => setOpen(!open)}
//               className="
//                 md:hidden flex h-11 w-11 items-center justify-center
//                 rounded-xl text-neutral-300
//                 hover:text-white hover:bg-white/10 transition
//               "
//               aria-label="Toggle menu"
//             >
//               <span className="relative block h-5 w-5">
//                 <span
//                   className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-transform duration-200
//                   ${open ? "rotate-45" : "-translate-y-2"}`}
//                 />
//                 <span
//                   className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-opacity duration-200
//                   ${open ? "opacity-0" : "opacity-100"}`}
//                 />
//                 <span
//                   className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-transform duration-200
//                   ${open ? "-rotate-45" : "translate-y-2"}`}
//                 />
//               </span>
//             </button>
//           </div>
//         </div>

//         {/* ===== MOBILE MENU ===== */}
//         <AnimatePresence>
//           {open && (
//             <motion.div
//               initial={{ opacity: 0, y: -12 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -12 }}
//               transition={{ duration: 0.25, ease: "easeOut" }}
//               className="
//                 md:hidden
//                 rounded-b-2xl
//                 bg-black/60
//                 backdrop-blur-xl
//                 border-t border-white/10
//               "
//             >
//               <div className="px-8 py-8 flex flex-col gap-6 text-neutral-300">
//                 <Link
//                   href="/"
//                   onClick={() => setOpen(false)}
//                   className={`text-base ${
//                     isHome ? "text-white" : "hover:text-white"
//                   }`}
//                 >
//                   Home
//                 </Link>

//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     onClick={() => setOpen(false)}
//                     className={`text-base transition ${
//                       pathname === link.href
//                         ? "text-white"
//                         : "hover:text-white"
//                     }`}
//                   >
//                     {link.label}
//                   </Link>
//                 ))}

//                 <Link
//                   href="/contact"
//                   onClick={() => setOpen(false)}
//                   className="
//                     mt-2 px-6 py-3 rounded-full
//                     bg-white text-black font-medium
//                     text-center hover:bg-neutral-200 transition
//                   "
//                 >
//                   Start a Project
//                 </Link>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </nav>
//   );
// }
// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();
//   const isHome = pathname === "/";

//   const navLinks = [
//     { label: "Services", href: "/services" },
//     { label: "Programs", href: "/programs" },
//     { label: "Mentorship", href: "/mentorship" },
//     { label: "Sponsors", href: "/sponsors" },
//   ];

//   return (
//     /* 1. Changed to 'fixed' and 'inset-x-0' so it floats OVER the hero.
//        2. added 'pointer-events-none' so the empty sides of the nav 
//           don't block interactions with the hero section.
//     */
//     <nav className="fixed top-6 inset-x-0 z-50 flex justify-center px-6 pointer-events-none">
      
//       {/* ===== FLOATING CONTAINER ===== */}
//       <div
//         className="
//           w-full max-w-6xl
//           rounded-2xl
//           bg-black/40
//           backdrop-blur-xl
//           border border-white/10
//           shadow-[0_8px_40px_rgba(0,0,0,0.5)]
//           /* Re-enable pointer events for the actual navbar UI */
//           pointer-events-auto
//         "
//       >
//         <div className="px-6 sm:px-8">
//           <div className="flex h-20 items-center justify-between">

//             {/* ===== LOGO ===== */}
//             <Link href="/" className="flex items-center gap-3">
//               <Image
//                 src="/logo.png"
//                 alt="Logo"
//                 width={120}
//                 height={120}
//                 priority
//                 className="opacity-95"
//               />
//             </Link>

//             {/* ===== DESKTOP NAV ===== */}
//             <div className="hidden md:flex items-center gap-10 text-sm text-neutral-300">
//               {!isHome && (
//                 <Link href="/" className="hover:text-white transition">
//                   Home
//                 </Link>
//               )}

//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className={`transition ${
//                     pathname === link.href
//                       ? "text-white"
//                       : "hover:text-white"
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               ))}

//               <Link
//                 href="/contact"
//                 className="
//                   ml-4 px-6 py-2.5 rounded-full
//                   bg-white text-black font-medium
//                   hover:bg-neutral-200 transition
//                 "
//               >
//                 Start a Project
//               </Link>
//             </div>

//             {/* ===== MOBILE TOGGLE ===== */}
//             <button
//               onClick={() => setOpen(!open)}
//               className="
//                 md:hidden flex h-11 w-11 items-center justify-center
//                 rounded-xl text-neutral-300
//                 hover:text-white hover:bg-white/10 transition
//               "
//               aria-label="Toggle menu"
//             >
//               <span className="relative block h-5 w-5">
//                 <span
//                   className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-transform duration-200
//                   ${open ? "rotate-45" : "-translate-y-2"}`}
//                 />
//                 <span
//                   className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-opacity duration-200
//                   ${open ? "opacity-0" : "opacity-100"}`}
//                 />
//                 <span
//                   className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-transform duration-200
//                   ${open ? "-rotate-45" : "translate-y-2"}`}
//                 />
//               </span>
//             </button>
//           </div>
//         </div>

//         {/* ===== MOBILE MENU ===== */}
//         <AnimatePresence>
//           {open && (
//             <motion.div
//               initial={{ opacity: 0, y: -12 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -12 }}
//               transition={{ duration: 0.25, ease: "easeOut" }}
//               className="
//                 md:hidden
//                 rounded-b-2xl
//                 bg-black/80
//                 backdrop-blur-2xl
//                 border-t border-white/10
//               "
//             >
//               <div className="px-8 py-8 flex flex-col gap-6 text-neutral-300">
//                 <Link
//                   href="/"
//                   onClick={() => setOpen(false)}
//                   className={`text-base ${
//                     isHome ? "text-white" : "hover:text-white"
//                   }`}
//                 >
//                   Home
//                 </Link>

//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     onClick={() => setOpen(false)}
//                     className={`text-base transition ${
//                       pathname === link.href
//                         ? "text-white"
//                         : "hover:text-white"
//                     }`}
//                   >
//                     {link.label}
//                   </Link>
//                 ))}

//                 <Link
//                   href="/contact"
//                   onClick={() => setOpen(false)}
//                   className="
//                     mt-2 px-6 py-3 rounded-full
//                     bg-white text-black font-medium
//                     text-center hover:bg-neutral-200 transition
//                   "
//                 >
//                   Start a Project
//                 </Link>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </nav>
//   );
// }
// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();
//   const isHome = pathname === "/";

//   /* ===== Scroll Detection ===== */
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   /* ===== Lock Body Scroll When Mobile Menu Open ===== */
//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "auto";
//   }, [open]);

//   /* ===== Close menu on route change ===== */
//   useEffect(() => {
//     setOpen(false);
//   }, [pathname]);

//   const navLinks = [
//     { label: "Services", href: "/services" },
//     { label: "Programs", href: "/programs" },
//     { label: "Mentorship", href: "/mentorship" },
//     { label: "Sponsors", href: "/sponsors" },
//   ];

//   return (
//     <>
//       {/* ===== NAVBAR ===== */}
//       <nav className="fixed top-4 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
//         <div
//           className={`
//             w-full max-w-6xl rounded-2xl transition-all duration-300
//             pointer-events-auto
//             ${
//               scrolled
//                 ? "bg-black/80 backdrop-blur-2xl border border-white/10 shadow-xl"
//                 : "bg-black/40 backdrop-blur-xl border border-white/10"
//             }
//           `}
//         >
//           <div className="px-4 sm:px-8">
//             <div className="flex h-16 sm:h-20 items-center justify-between">

//               {/* LOGO */}
//               <Link href="/" className="flex items-center gap-2">
//                 <Image
//                   src="/logo.png"
//                   alt="Logo"
//                   width={95}
//                   height={95}
//                   priority
//                   className="opacity-95"
//                 />
//               </Link>

//               {/* DESKTOP NAV */}
//               <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
//                 {!isHome && (
//                   <NavItem label="Home" href="/" pathname={pathname} />
//                 )}
//                 {navLinks.map((link) => (
//                   <NavItem
//                     key={link.href}
//                     label={link.label}
//                     href={link.href}
//                     pathname={pathname}
//                   />
//                 ))}

//                 <Link
//                   href="/contact"
//                   className="ml-6 px-6 py-2.5 rounded-full bg-white text-black font-semibold hover:scale-[1.03] transition"
//                 >
//                   Start a Project
//                 </Link>
//               </div>

//               {/* MOBILE BUTTON */}
//               <button
//                 onClick={() => setOpen(!open)}
//                 className="md:hidden flex h-11 w-11 items-center justify-center rounded-xl text-neutral-300 hover:bg-white/10"
//               >
//                 <span className="relative block h-5 w-5">
//                   <span
//                     className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-transform duration-200
//                     ${open ? "rotate-45" : "-translate-y-2"}`}
//                   />
//                   <span
//                     className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-opacity duration-200
//                     ${open ? "opacity-0" : "opacity-100"}`}
//                   />
//                   <span
//                     className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-transform duration-200
//                     ${open ? "-rotate-45" : "translate-y-2"}`}
//                   />
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* ===== FULL SCREEN MOBILE DRAWER ===== */}
//       <AnimatePresence>
//         {open && (
//           <>
//             {/* Dark Overlay */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
//               onClick={() => setOpen(false)}
//             />

//             {/* Drawer */}
//             <motion.div
//               initial={{ y: "-100%" }}
//               animate={{ y: 0 }}
//               exit={{ y: "-100%" }}
//               transition={{ duration: 0.35, ease: "easeOut" }}
//               className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-2xl border-b border-white/10"
//             >
//               <div className="px-6 pt-24 pb-10 flex flex-col gap-8 text-xl font-semibold text-neutral-300">

//                 <MobileItem href="/" label="Home" close={() => setOpen(false)} />

//                 {navLinks.map((link) => (
//                   <MobileItem
//                     key={link.href}
//                     href={link.href}
//                     label={link.label}
//                     close={() => setOpen(false)}
//                   />
//                 ))}

//                 <Link
//                   href="/contact"
//                   onClick={() => setOpen(false)}
//                   className="mt-6 px-6 py-4 rounded-full bg-white text-black text-center font-semibold"
//                 >
//                   Start a Project
//                 </Link>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// /* ===== Desktop Nav Item ===== */
// interface NavItemProps {
//   label: string;
//   href: string;
//   pathname: string;
// }

// function NavItem({ label, href, pathname }: NavItemProps) {
//   const active = pathname === href;

//   return (
//     <Link href={href} className="relative group">
//       <span
//         className={`transition-colors ${
//           active ? "text-white" : "group-hover:text-white"
//         }`}
//       >
//         {label}
//       </span>

//       <span
//         className={`absolute -bottom-1 left-0 h-[2px] bg-white transition-all duration-300
//         ${active ? "w-full" : "w-0 group-hover:w-full"}`}
//       />
//     </Link>
//   );
// }


// /* ===== Mobile Nav Item ===== */
// interface MobileItemProps {
//   label: string;
//   href: string;
//   close: () => void;
// }

// function MobileItem({ label, href, close }: MobileItemProps) {
//   return (
//     <Link
//       href={href}
//       onClick={close}
//       className="py-3 border-b border-white/10 hover:text-white transition"
//     >
//       {label}
//     </Link>
//   );
// }
