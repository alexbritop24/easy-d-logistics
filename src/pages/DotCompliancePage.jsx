// src/pages/DotCompliancePage.jsx
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

export default function DotCompliancePage() {
  const complianceItems = [
    "MC Authority",
    "USDOT Registration",
    "BOC-3 Filing",
    "Insurance",
    "Safety & Permits",
  ];

  return (
    <main className="bg-[var(--color-primary)] text-white min-h-screen">
      <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(143,199,238,0.12),transparent_38%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-center">
          <div>
            <Reveal y={18}>
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-white/75">
                DOT & MC Compliance
              </div>
            </Reveal>

            <Reveal y={18} delay={0.04}>
              <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Stay Compliant.
                <span className="block text-[var(--color-accent)]">
                  Stay on the Road.
                </span>
              </h1>
            </Reveal>

            <Reveal y={14} delay={0.08}>
              <p className="mt-6 text-base md:text-xl text-white/78 max-w-2xl leading-relaxed">
                We handle your DOT & MC compliance so you can focus on driving
                and making money.
              </p>
            </Reveal>

            <Reveal y={14} delay={0.12}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="/get-started"
                  className="
                    inline-flex items-center justify-center
                    px-8 py-3.5 rounded-xl font-semibold
                    bg-[var(--color-accent)] text-[var(--color-primary)]
                    transition hover:opacity-90
                  "
                >
                  Get Started
                </a>

                <a
                  href="/contact"
                  className="
                    inline-flex items-center justify-center
                    px-8 py-3.5 rounded-xl font-semibold
                    border border-white/20 text-white
                    transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                  "
                >
                  Book a Call
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal y={18} delay={0.08}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.18 }}
              className="
                rounded-3xl border border-white/10
                bg-[var(--color-primary-softer)]
                p-6 md:p-8
                shadow-[var(--shadow-card)]
              "
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-white/42">
                    Compliance Overview
                  </p>
                  <h2 className="mt-2 text-2xl md:text-3xl font-bold">
                    Setup & Filing Support
                  </h2>
                </div>

                <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[var(--color-accent)] font-bold">
                  ✓
                </div>
              </div>

              <div className="space-y-4">
                {complianceItems.map((item) => (
                  <div
                    key={item}
                    className="
                      flex items-center justify-between gap-4
                      rounded-2xl border border-white/10
                      bg-white/[0.03]
                      px-4 py-4
                    "
                  >
                    <span className="text-white/82 font-medium">{item}</span>
                    <span className="text-[var(--color-accent)] text-sm font-semibold">
                      Active
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}