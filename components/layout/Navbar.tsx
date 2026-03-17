"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Tools",    href: "/tools"    },
  { label: "Platform", href: "/platform" },
  { label: "About",    href: "/about"    },
];

export default function Navbar() {
  const pathname               = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header style={{
      position:            "sticky",
      top:                 0,
      zIndex:              100,
      borderBottom:        "0.5px solid #1e1e26",
      background:          scrolled ? "rgba(9,9,11,0.94)" : "rgba(9,9,11,0.82)",
      backdropFilter:      "blur(14px)",
      WebkitBackdropFilter:"blur(14px)",
      transition:          "background 0.3s",
    }}>
      <nav style={{
        display:        "flex",
        alignItems:     "center",
        justifyContent: "space-between",
        padding:        "1rem 3rem",
        maxWidth:       "1400px",
        margin:         "0 auto",
      }}>

        {/* LOGO */}
        <Link href="/" style={{
          fontFamily:     "'Syne', sans-serif",
          fontSize:       "18px",
          fontWeight:     800,
          letterSpacing:  "-0.3px",
          color:          "#f0ece6",
          textDecoration: "none",
          flexShrink:     0,
        }}>
          Silicality<span style={{ color: "#e8793a" }}>.</span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="nav-desktop" style={{
          display:    "flex",
          gap:        "2.5rem",
          alignItems: "center",
        }}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} style={{
              fontSize:       "13px",
              color:          pathname === link.href ? "#f0ece6" : "#7a7a88",
              textDecoration: "none",
              fontFamily:     "'DM Sans', sans-serif",
              transition:     "color 0.2s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f0ece6")}
              onMouseLeave={(e) => (e.currentTarget.style.color = pathname === link.href ? "#f0ece6" : "#7a7a88")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="nav-desktop">
          <Link href="/contact" style={{
            display:        "inline-block",
            background:     "#e8793a",
            color:          "#ffffff",
            padding:        "9px 22px",
            borderRadius:   "8px",
            fontSize:       "13px",
            fontFamily:     "'DM Sans', sans-serif",
            fontWeight:     500,
            textDecoration: "none",
            whiteSpace:     "nowrap",
          }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            Start a Project
          </Link>
        </div>

        {/* HAMBURGER */}
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}
          style={{ display:"none", flexDirection:"column", gap:"5px", padding:"6px", background:"transparent", border:"none", cursor:"pointer" }}
          aria-label="Toggle menu"
        >
          {[0,1,2].map((i) => (
            <span key={i} style={{
              display:   "block",
              width:     "20px",
              height:    "1.5px",
              background:"#f0ece6",
              transition:"all 0.3s",
              opacity:   i === 1 && menuOpen ? 0 : 1,
              transform: i === 0 && menuOpen ? "rotate(45deg) translateY(6.5px)"
                       : i === 2 && menuOpen ? "rotate(-45deg) translateY(-6.5px)"
                       : "none",
            }} />
          ))}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div style={{
        overflow:   "hidden",
        maxHeight:  menuOpen ? "380px" : "0",
        transition: "max-height 0.3s ease",
        borderTop:  menuOpen ? "0.5px solid #1e1e26" : "none",
        background: "#09090b",
      }}>
        <div style={{ display:"flex", flexDirection:"column", padding:"1rem 1.5rem", gap:"2px" }}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} style={{
              fontSize:       "14px",
              color:          pathname === link.href ? "#f0ece6" : "#7a7a88",
              textDecoration: "none",
              padding:        "12px 0",
              borderBottom:   "0.5px solid #1e1e26",
              fontFamily:     "'DM Sans', sans-serif",
            }}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" style={{
            display:"block", marginTop:"12px",
            background:"#e8793a", color:"#ffffff",
            textAlign:"center", padding:"12px",
            borderRadius:"8px", fontSize:"14px",
            fontFamily:"'DM Sans', sans-serif",
            fontWeight:500, textDecoration:"none",
          }}>
            Start a Project
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop   { display: none !important; }
          .nav-hamburger { display: flex !important; }
          nav { padding: 1rem 1.5rem !important; }
        }
      `}</style>
    </header>
  );
}