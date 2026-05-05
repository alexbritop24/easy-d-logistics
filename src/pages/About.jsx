// src/pages/About.jsx
import useSEO from "../hooks/useSEO";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

import aboutImage from "../assets/dispatch-team-portrait.jpeg";

export default function About() {
  useSEO({
    title: "About Easy D Logistics | Dispatch & Compliance Support",
    description:
      "Easy D Logistics is based in Provo, Utah and provides truck dispatch services, DOT compliance support, MC setup help, and paperwork coordination for owner-operators and small fleets nationwide.",
    path: "/about",
    ogImage: "/easy-d-logo.png",
  });

  const reasons = [
    "Transparent communication at all times",
    "Strong negotiation for top-paying loads",
    "24/7 dispatch support",
    "Paperwork and compliance support",
    "Focus on helping drivers stay loaded and road-ready",
  ];

  return (
    <main className="bg-[var(--color-primary)] text-white">
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
            <Reveal y={18}>
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-white/75">
                About Easy D Logistics
              </div>
            </Reveal>

            <Reveal y={18} delay={0.04}>
              <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Dispatch Support Built
                <span className="block text-[var(--color-accent)]">
                  Around The Driver
                </span>
              </h1>
            </Reveal>

            <Reveal y={14} delay={0.08}>
              <p className="mt-5 text-white/78 text-base md:text-lg leading-relaxed">
                Based in Provo, Utah, Easy D Logistics helps owner-operators and
                small fleets nationwide with truck dispatch services, DOT & MC
                compliance support, load coordination, and paperwork management.
              </p>
            </Reveal>
          </header>

          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
            <div className="space-y-6">
              <Reveal y={16}>
                <div className="rounded-2xl border border-white/10 bg-[var(--color-primary-softer)] p-7 shadow-[var(--shadow-card)]">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Who We Are
                  </h2>

                  <p className="text-white/75 text-lg leading-relaxed">
                    Easy D Logistics is committed to helping truckers maximize
                    earnings, reduce downtime, and eliminate administrative stress.
                    We assist owner-operators and small fleets with reliable
                    dispatching, broker communication, DOT compliance support,
                    MC setup guidance, and paperwork coordination.
                  </p>
                </div>
              </Reveal>

              <Reveal y={16} delay={0.05}>
                <div className="rounded-2xl border border-white/10 bg-[var(--color-primary-softer)] p-7 shadow-[var(--shadow-card)]">
                  <h2 className="text-2xl font-bold text-[var(--color-accent)] mb-4">
                    Our Mission
                  </h2>

                  <p className="text-white/75 leading-relaxed">
                    Our mission is to provide dependable dispatch and compliance
                    support that helps drivers stay loaded, road-ready, and prepared
                    to grow sustainably in a competitive trucking market.
                  </p>
                </div>
              </Reveal>

              <Reveal y={16} delay={0.08}>
                <div className="rounded-2xl border border-white/10 bg-[var(--color-primary-softer)] p-7 shadow-[var(--shadow-card)]">
                  <h2 className="text-2xl font-bold text-[var(--color-accent)] mb-5">
                    Why Choose Us
                  </h2>

                  <ul className="space-y-3">
                    {reasons.map((reason) => (
                      <li key={reason} className="flex items-start gap-3 text-white/78">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal y={16} delay={0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.18 }}
                  className="rounded-2xl border border-[var(--color-border-strong)] bg-white/[0.03] p-7 shadow-[var(--shadow-accent)]"
                >
                  <h3 className="text-xl font-semibold text-[var(--color-accent)] mb-2">
                    Drivers first — always.
                  </h3>

                  <p className="text-white/72 text-sm md:text-base leading-relaxed">
                    Everything we do is built around supporting truckers, protecting
                    their time, helping them move more profitably, and keeping their
                    operations organized and compliant.
                  </p>
                </motion.div>
              </Reveal>
            </div>

            <Reveal y={18} delay={0.06}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="relative h-full min-h-[420px] rounded-3xl overflow-hidden border border-white/10 shadow-[var(--shadow-card)]"
              >
                <img
                  src={aboutImage}
                  alt="Easy D Logistics dispatch and compliance support team"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm text-xs font-semibold tracking-wide text-white/90">
                    Real Dispatch + Compliance Support
                  </div>

                  <p className="mt-4 max-w-md text-white/85 text-sm md:text-base leading-relaxed">
                    Built for owner-operators and small fleets who want better
                    rates, fewer headaches, compliance support, and a partner they can rely on.
                  </p>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal y={18} delay={0.12}>
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-[var(--color-primary-softer)] px-8 py-10 md:px-12 md:py-12 shadow-[var(--shadow-card)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
                  Ready To Work With A
                  <span className="block text-[var(--color-accent)]">
                    Reliable Dispatch Partner?
                  </span>
                </h2>

                <p className="mt-3 text-white/75 max-w-2xl">
                  Let us help you stay loaded, reduce stress, handle paperwork,
                  and keep your operation moving with confidence.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-xl font-semibold bg-[var(--color-accent)] text-[var(--color-primary)] hover:opacity-90 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}