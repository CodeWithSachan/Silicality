import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import type { Metadata } from "next";
import { Architecture } from "@/types/architect";

// ── Next.js 16 requires params to be a Promise ───────────────────
interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getProject(slug: string) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const { data } = await supabase
      .from("projects")
      .select("*, architecture_json")
      .eq("slug", slug)
      .single();
    return data;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug }  = await params;
  const project   = await getProject(slug);
  return {
    title: project
      ? `${project.title} — AI Architecture by Silicality`
      : "AI Architecture — Silicality",
    description: project?.architecture_json?.overview
      ?? "Generated with AI Product Architect by Silicality.",
  };
}

export default async function SharePage({ params }: PageProps) {
  const { slug } = await params;
  const project  = await getProject(slug);
  const arch: Architecture | null = project?.architecture_json ?? null;

  return (
    <div style={{ background:"#09090b", minHeight:"100vh", color:"#f0ece6", fontFamily:"'DM Sans',sans-serif" }}>

      {/* Banner */}
      <div style={{
        background:"#111114", borderBottom:"0.5px solid #1e1e26",
        padding:"12px 2rem", display:"flex", alignItems:"center",
        justifyContent:"space-between", flexWrap:"wrap", gap:"1rem",
      }}>
        <div style={{ fontSize:"13px", color:"#7a7a88" }}>
          Generated with{" "}
          <span style={{ color:"#e8793a", fontWeight:500 }}>AI Product Architect</span>
          {" "}by{" "}
          <Link href="/" style={{ color:"#f0ece6", textDecoration:"none" }}>Silicality</Link>
        </div>
        <Link href="/tools/product-architect" style={{
          background:"#e8793a", color:"#fff", padding:"8px 18px",
          borderRadius:"8px", fontSize:"13px", textDecoration:"none", fontWeight:500,
        }}>
          Create your own →
        </Link>
      </div>

      {!arch ? (
        <div style={{ textAlign:"center", padding:"6rem 2rem" }}>
          <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"24px", fontWeight:700, marginBottom:"1rem" }}>
            Project not found
          </div>
          <Link href="/tools/product-architect" style={{ color:"#e8793a", textDecoration:"none" }}>
            Generate your own architecture →
          </Link>
        </div>
      ) : (
        <div style={{ maxWidth:"900px", margin:"0 auto", padding:"3rem 2rem" }}>

          {/* Header */}
          <div style={{ marginBottom:"2.5rem" }}>
            <div style={{
              display:"inline-flex", alignItems:"center", gap:"8px",
              background:"rgba(232,121,58,0.1)", border:"0.5px solid rgba(232,121,58,0.3)",
              borderRadius:"6px", padding:"4px 12px", marginBottom:"1rem",
              fontSize:"10px", color:"#e8793a", letterSpacing:"0.1em", textTransform:"uppercase",
            }}>
              PROJECT ARCHITECTURE · ID: SIL-{slug.slice(-4).toUpperCase()}
            </div>
            <h1 style={{
              fontFamily:"'Syne',sans-serif",
              fontSize:"clamp(1.8rem,4vw,2.8rem)",
              fontWeight:800, letterSpacing:"-1px",
              margin:"0 0 0.75rem",
            }}>
              {arch.product_name}
            </h1>
            <p style={{ fontSize:"15px", color:"#7a7a88", lineHeight:1.7, maxWidth:"600px", margin:0 }}>
              {arch.overview}
            </p>
          </div>

          {/* Two-col grid */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"16px" }} className="share-grid">
            <ShareSection title="Core Features" icon="≡">
              <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:"7px" }}>
                {arch.features.map((f, i) => (
                  <li key={i} style={{ fontSize:"14px", color:"#7a7a88", display:"flex", gap:"8px" }}>
                    <span style={{ color:"#e8793a" }}>•</span>{f}
                  </li>
                ))}
              </ul>
            </ShareSection>

            <ShareSection title="Tech Stack" icon="⚙">
              {Object.entries(arch.tech_stack).map(([k, v]) => (
                <div key={k} style={{ marginBottom:"8px" }}>
                  <div style={{ fontSize:"10px", color:"#3a3a46", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:"3px" }}>{k}</div>
                  <div style={{
                    display:"inline-block", background:"#1a1a1e",
                    border:"0.5px solid #2c2c36", color:"#f0ece6",
                    fontSize:"12px", padding:"4px 10px", borderRadius:"6px",
                  }}>{v}</div>
                </div>
              ))}
            </ShareSection>

            <ShareSection title="MVP Roadmap" icon="📋">
              {arch.mvp_roadmap.map((p, i) => (
                <div key={i} style={{ display:"flex", gap:"10px", marginBottom:"12px", alignItems:"flex-start" }}>
                  <div style={{
                    width:"22px", height:"22px", borderRadius:"50%",
                    background:"#e8793a", color:"#fff", fontSize:"11px",
                    fontWeight:700, display:"flex", alignItems:"center",
                    justifyContent:"center", flexShrink:0,
                  }}>{i+1}</div>
                  <div>
                    <div style={{ fontSize:"13px", color:"#e8793a", fontWeight:500, marginBottom:"2px" }}>{p.phase}</div>
                    <div style={{ fontSize:"12px", color:"#7a7a88", fontFamily:"monospace" }}>{p.tasks.join(", ")}.</div>
                  </div>
                </div>
              ))}
            </ShareSection>

            <ShareSection title="Monetization" icon="💳">
              {arch.monetization.map((t, i) => (
                <div key={i} style={{
                  display:"flex", justifyContent:"space-between", alignItems:"center",
                  padding:"10px 12px",
                  background: t.highlighted ? "rgba(232,121,58,0.05)" : "#111114",
                  border: `0.5px solid ${t.highlighted ? "rgba(232,121,58,0.3)" : "#1e1e26"}`,
                  borderRadius:"9px", marginBottom:"8px",
                }}>
                  <div>
                    <div style={{ fontSize:"13px", color:"#f0ece6", fontWeight:500 }}>{t.name}</div>
                    <div style={{ fontSize:"11px", color:"#7a7a88" }}>{t.description}</div>
                  </div>
                  <div style={{ fontSize:"14px", color:"#e8793a", fontWeight:600 }}>{t.price}</div>
                </div>
              ))}
            </ShareSection>
          </div>

          {/* CTA */}
          <div style={{
            marginTop:"3rem", padding:"2.5rem", background:"#111114",
            border:"0.5px solid #1e1e26", borderRadius:"14px", textAlign:"center",
          }}>
            <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"22px", fontWeight:700, margin:"0 0 0.75rem" }}>
              Want Silicality to build this product?
            </h3>
            <p style={{ fontSize:"14px", color:"#7a7a88", margin:"0 0 1.75rem" }}>
              We turn architectures like this into real, deployed products in 6–8 weeks.
            </p>
            <div style={{ display:"flex", gap:"12px", justifyContent:"center", flexWrap:"wrap" }}>
              <Link href="/contact" style={{
                background:"#e8793a", color:"#fff", padding:"13px 28px",
                borderRadius:"9px", fontSize:"14px", textDecoration:"none", fontWeight:500,
              }}>
                Start a Project
              </Link>
              <Link href="/contact?type=estimate" style={{
                background:"transparent", color:"#f0ece6",
                border:"0.5px solid #2c2c36", padding:"13px 28px",
                borderRadius:"9px", fontSize:"14px", textDecoration:"none",
              }}>
                Get MVP Estimate
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .share-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function ShareSection({ title, icon, children }: {
  title: string; icon: string; children: React.ReactNode;
}) {
  return (
    <div style={{
      background:"#111114", border:"0.5px solid #1e1e26",
      borderRadius:"12px", overflow:"hidden",
    }}>
      <div style={{
        display:"flex", alignItems:"center", gap:"8px",
        padding:"12px 14px", borderBottom:"0.5px solid #1e1e26",
      }}>
        <span style={{ color:"#e8793a", fontSize:"14px" }}>{icon}</span>
        <span style={{ fontFamily:"'Syne',sans-serif", fontSize:"14px", fontWeight:700 }}>{title}</span>
      </div>
      <div style={{ padding:"14px" }}>{children}</div>
    </div>
  );
}