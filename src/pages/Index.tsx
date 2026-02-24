import suryaPhoto from "@/assets/surya.jpg";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [expanded, setExpanded] = useState(false);
  const isMobile = useIsMobile();
  const extLink = { target: "_blank" as const, rel: "noopener noreferrer" };

  // Responsive image size: mobile 80px, tablet 140px, desktop 256px
  const imgSize = isMobile ? 80 : (window.innerWidth < 1024 ? 140 : 256);
  const imgOffset = isMobile ? 12 : 20;

  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [expanded]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setExpanded(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main style={{ maxWidth: 680, margin: "0 auto", padding: isMobile ? "20px 16px 60px" : "60px 24px 80px", fontFamily: "Georgia, 'Times New Roman', serif", lineHeight: 1.8, color: "#333" }}>

      {/* Overlay */}
      <div
        onClick={() => setExpanded(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          zIndex: 199,
          opacity: expanded ? 1 : 0,
          pointerEvents: expanded ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Fixed photo — always top right, click to zoom */}
      <img
        src={suryaPhoto}
        alt="surya maddula"
        onClick={() => setExpanded(prev => !prev)}
        style={{
          position: "fixed",
          top: expanded ? "50%" : imgOffset,
          right: expanded ? "50%" : imgOffset,
          transform: expanded ? "translate(50%, -50%)" : "translate(0, 0)",
          width: expanded ? "min(500px, 85vw)" : imgSize,
          objectFit: "cover",
          borderRadius: expanded ? 20 : (isMobile ? 8 : 12),
          boxShadow: expanded
            ? "0 24px 80px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.15)"
            : "0 2px 12px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.08)",
          cursor: "pointer",
          transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          zIndex: 200,
        }}
      />

      <header style={{ marginBottom: isMobile ? 36 : 60, paddingRight: isMobile ? imgSize + 20 : 0 }}>
        <h1 style={{ fontSize: isMobile ? 24 : 36, marginBottom: 4 }}>surya maddula</h1>
        <p style={{ fontSize: isMobile ? 14 : 18, color: "#555", marginTop: 0 }}>building physical-world intelligence infrastructure.</p>
      </header>

      <hr style={{ border: "none", borderTop: "1px solid #ddd", margin: "40px 0" }} />

      <section style={{ marginBottom: 50 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>who i am</h2>
        <p>
          i'm 18. i founded <strong><a href="https://whisperwave.in/" {...extLink}>whisperwave</a></strong> and patented an open-environment acoustic control system when i was 15. backed by <strong>emergent ventures</strong>, <strong>1517 fund</strong>, <strong>microsoft</strong>, <strong>aws</strong> and <strong>localhost</strong>.
        </p>
        <p>
          research at <strong>columbia</strong>. advising at <strong><a href="https://www.evm.capital/" {...extLink}>evm capital</a></strong>. resident at <strong>lossfunk</strong>. previously <strong>amazon</strong>, <strong>shell</strong>, <strong>cibc</strong>.
        </p>

        <h3 style={{ fontSize: 18, marginTop: 24, marginBottom: 10, color: "#666" }}>my journey</h3>
        <ul style={{ paddingLeft: 20 }}>
          <li style={{ marginBottom: 8 }}>started self-learning technical skills at <strong>age 13</strong>. got certified with <strong>70+ certifications</strong>.</li>
          <li style={{ marginBottom: 8 }}>first remote job as a <strong>data scientist & developer</strong> at <strong>age 14</strong> via discord.</li>
          <li style={{ marginBottom: 8 }}>consulted for mncs like <strong>cibc</strong>, <strong>shell</strong> & <strong>amazon</strong> at <strong>age 15</strong>.</li>
          <li style={{ marginBottom: 8 }}>worked on <strong>llms</strong> with <strong>columbia university</strong>. got a granted patent in india (& wipo) at <strong>age 16</strong>.</li>
          <li style={{ marginBottom: 8 }}>raised <strong>$45k</strong> & dropped out of uoft at <strong>age 17</strong> to build full-time.</li>
          <li style={{ marginBottom: 8 }}>got into <strong>iim b</strong> & partnered with india's <strong>best hardware lab</strong> at <strong>age 18</strong>.</li>
        </ul>

        <p style={{ fontStyle: "italic", color: "#444", marginTop: 20 }}>
          intelligence infrastructure that operates in the physical world — not just in software.
        </p>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #ddd", margin: "40px 0" }} />

      <section style={{ marginBottom: 50 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>what i focus on</h2>
        <ul style={{ paddingLeft: 20 }}>
          <li style={{ marginBottom: 8 }}><strong>ai infrastructure</strong> — foundation models adapted for physical-world sensor data.</li>
          <li style={{ marginBottom: 8 }}><strong>acoustic systems</strong> — open-environment noise cancellation that actually works outdoors.</li>
          <li style={{ marginBottom: 8 }}><strong>hardware × software</strong> — embedded systems where code meets physics.</li>
          <li style={{ marginBottom: 8 }}><strong>climate tech</strong> — measurement and verification for carbon restoration.</li>
          <li style={{ marginBottom: 8 }}><strong>venture building</strong> — turning research into companies.</li>
        </ul>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #ddd", margin: "40px 0" }} />

      <section style={{ marginBottom: 50 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>projects</h2>
        <ul style={{ paddingLeft: 20 }}>
          <li style={{ marginBottom: 12 }}>
            <strong>open air anc</strong><br />
            open-environment noise cancellation system. filed patent. the core wedge.
          </li>
          <li style={{ marginBottom: 10 }}><strong>anc w/ matplotlib</strong> — software layer for anc using ai and matplotlib visualization.</li>
          <li style={{ marginBottom: 10 }}><strong>product recommendation using ml</strong> — ml-powered recommendation model.</li>
          <li style={{ marginBottom: 10 }}><strong>hdr using ml</strong> — ml model that predicts handwritten numbers.</li>
        </ul>

        <h3 style={{ fontSize: 18, marginTop: 30, marginBottom: 10, color: "#666" }}>experiments</h3>
        <ul style={{ paddingLeft: 20 }}>
          <li style={{ marginBottom: 12 }}>
            <strong>ecoligna</strong><br />
            transparent wood replacing glass. 70% energy reduction. tks moonshot.
          </li>
          <li style={{ marginBottom: 12 }}>
            <strong>bcis for animal health</strong><br />
            use bcis to help alleviate/heal health problems in animals.
          </li>
        </ul>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #ddd", margin: "40px 0" }} />

      <section style={{ marginBottom: 50 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>consulting</h2>
        <ul style={{ paddingLeft: 20 }}>
          <li style={{ marginBottom: 12 }}>
            <strong>future of alexa</strong><br />
            improving the productivity of remote workers through alexa.
          </li>
          <li style={{ marginBottom: 12 }}>
            <strong>future of banking</strong><br />
            redesigned gtm for cibc bank to counter legacy banking and customer inertia.
          </li>
          <li style={{ marginBottom: 12 }}>
            <strong>digital mrv innovations in east africa</strong><br />
            satellite-to-soil verification system for carbon restoration. built at shell.
          </li>
        </ul>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #ddd", margin: "40px 0" }} />

      <section style={{ marginBottom: 50 }}>
        <h2 style={{ fontSize: 22, marginBottom: 16 }}><a href="https://suryamaddula.substack.com/" {...extLink}>surya's sonnets</a></h2>
        <blockquote>"the best infrastructure is invisible until it fails."</blockquote>
        <blockquote>"conviction is a signal. doubt is a feature."</blockquote>
        <blockquote>"systems outlast strategies."</blockquote>
        <blockquote>"build for the constraint, not the consensus."</blockquote>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #ddd", margin: "40px 0" }} />

      <section style={{ marginBottom: 50 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>what i love</h2>
        <p>
          swimming, basketball, billiards, working out, and running.
        </p>
        <p>
          i also love to write — both my <a href="https://suryamaddula.substack.com/" {...extLink}>newsletter</a> and my <a href="https://suryamaddula.medium.com" {...extLink}>articles on ai and tech</a>.
        </p>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #ddd", margin: "40px 0" }} />

      <section style={{ marginBottom: 50 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>what i'm building now</h2>
        <ul style={{ paddingLeft: 20 }}>
          <li style={{ marginBottom: 8 }}>building open-environment acoustic control infrastructure at <strong><a href="https://whisperwave.in/" {...extLink}>whisperwave</a></strong>.</li>
          <li style={{ marginBottom: 8 }}>targeting industrial and transit environments.</li>
          <li style={{ marginBottom: 8 }}>designing v2 system architecture.</li>
          <li style={{ marginBottom: 8 }}>advising at <strong><a href="https://www.evm.capital/" {...extLink}>evm capital</a></strong>.</li>
        </ul>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #ddd", margin: "40px 0" }} />

      <footer style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 8 }}>long-term alignment.</h2>
        <p style={{ marginBottom: 16 }}>
          <a href="mailto:me@suryamaddula.com">me@suryamaddula.com</a>
        </p>
        <p style={{ fontSize: 15 }}>
          <a href="https://github.com/Surya893" {...extLink}>github</a> · {" "}
          <a href="https://suryamaddula.medium.com" {...extLink}>medium</a> · {" "}
          <a href="https://suryamaddula.substack.com" {...extLink}>substack</a> · {" "}
          <a href="https://patents.google.com/patent/WO2024176209A2/en?q=(surya+maddula)&oq=surya+maddula" {...extLink}>patents</a> · {" "}
          <a href="https://linkedin.com/in/suryaseshamaddula" {...extLink}>linkedin</a> · {" "}
          <a href="https://x.com/suryamaddula_" {...extLink}>x</a> · {" "}
          <a href="https://www.instagram.com/suryamaddula_/" {...extLink}>instagram</a>
        </p>
        
        <hr style={{ border: "none", borderTop: "1px solid #ddd", margin: "40px 0" }} />
        <p style={{ fontSize: 14, color: "#888", margin: 0 }}>surya maddula</p>
        <p style={{ fontSize: 13, color: "#aaa", margin: "4px 0 0" }}>© 2026</p>
      </footer>
    </main>
  );
};

export default Index;
