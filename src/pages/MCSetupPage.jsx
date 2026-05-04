// src/pages/MCSetupPage.jsx
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import useSEO from "../hooks/useSEO";

export default function MCSetupPage() {
  useSEO({
    title: "MC Number Setup Services | Start Your Trucking Company | Easy D Logistics",
    description:
      "Get your MC number, USDOT registration, BOC-3 filing, and insurance setup done fast. We handle everything so you can start your trucking business without delays.",
    path: "/mc-number-setup",
  });

  const steps = [
    "USDOT Registration",
    "MC Authority Filing",
    "BOC-3 Filing",
    "Insurance Setup",
    "Activation & Compliance",
  ];

  return (
    <main className="bg-[var(--color-primary)] text-white min-h-screen">
      
      {/* HERO */}
      <section className="relative px-6 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(143,199,238,0.12),transparent_38%)]" />
        
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          
          <div>
            <Reveal>
              <div className="inline-flex px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/75">
                Start Your Trucking Business
              </div>
            </Reveal>

            <Reveal delay={0.04}>
              <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
                Get Your MC Number
                <span className="block text-[var(--color-accent)]">
                  The Right Way
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-6 text-white/75 text-base md:text-lg max-w-xl">
                We handle your MC authority, USDOT registration, and compliance setup
                so you can launch your trucking business fast and without mistakes.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="px-8 py-3 rounded-xl bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold hover:opacity-90 transition"
                >
                  Get Started
                </a>

                <a
                  href="/dot-compliance"
                  className="px-8 py-3 rounded-xl border border-white/20 hover:border-[var(--color-accent)] transition"
                >
                  Learn About Compliance
                </a>
              </div>
            </Reveal>
          </div>

          {/* PROCESS CARD */}
          <Reveal delay={0.08}>
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-white/10 bg-[var(--color-primary-softer)] p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold mb-6">
                What We Handle For You
              </h2>

              <div className="space-y-4">
                {steps.map((step) => (
                  <div
                    key={step}
                    className="flex justify-between items-center border border-white/10 rounded-xl px-4 py-4 bg-white/[0.03]"
                  >
                    <span>{step}</span>
                    <span className="text-[var(--color-accent)] text-sm font-semibold">
                      Included
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* SEO SECTION */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            MC Number Setup For Owner-Operators
          </h2>

          <p className="mt-6 text-white/70 leading-relaxed">
            Getting your MC number is one of the most important steps when starting a trucking business.
            Without proper setup, you can face delays, rejected filings, or compliance issues that stop
            you from getting loads.
          </p>

          <p className="mt-4 text-white/70 leading-relaxed">
            We simplify the process by handling your USDOT registration, MC authority filing,
            BOC-3 filing, and insurance requirements. Our goal is to get you compliant and
            ready to operate as quickly as possible.
          </p>
        </div>
      </section>

    </main>
  );
}