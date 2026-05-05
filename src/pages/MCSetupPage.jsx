// src/pages/MCSetupPage.jsx
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import useSEO from "../hooks/useSEO";

export default function MCSetupPage() {
  useSEO({
    title: "MC Number Setup Services | USDOT, BOC-3 & Authority Setup | Easy D Logistics",
    description:
      "Easy D Logistics helps owner-operators set up MC authority, USDOT registration, BOC-3 filing, insurance coordination, LLC and EIN setup, and trucking compliance support.",
    path: "/mc-number-setup",
  });

  const setupItems = [
    "LLC + EIN Setup",
    "USDOT Registration",
    "MC Authority Filing",
    "BOC-3 Filing",
    "Insurance Coordination",
    "Activation & Compliance",
  ];

  const setupServices = [
    {
      title: "LLC + EIN Setup",
      desc: "We help you get your trucking business properly structured before moving into authority and compliance filings.",
    },
    {
      title: "USDOT Registration",
      desc: "We assist with USDOT registration so your operation is properly identified for federal trucking requirements.",
    },
    {
      title: "MC Authority Filing",
      desc: "We help with MC authority filing so you can move toward operating as a legal for-hire carrier.",
    },
    {
      title: "BOC-3 Filing",
      desc: "We help coordinate BOC-3 filing, which is required before your MC authority can become active.",
    },
    {
      title: "Insurance Coordination",
      desc: "We help coordinate the insurance process so your authority setup does not get delayed by missing requirements.",
    },
    {
      title: "Activation & Compliance",
      desc: "We help you understand the next compliance steps so your trucking business can stay road-ready after setup.",
    },
  ];

  return (
    <main className="bg-[var(--color-primary)] text-white min-h-screen">
      {/* HERO */}
      <section className="relative px-6 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(143,199,238,0.12),transparent_38%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-center">
          <div>
            <Reveal y={18}>
              <div className="inline-flex px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/75">
                Start Your Trucking Business
              </div>
            </Reveal>

            <Reveal y={18} delay={0.04}>
              <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                MC Number Setup
                <span className="block text-[var(--color-accent)]">
                  Done The Right Way
                </span>
              </h1>
            </Reveal>

            <Reveal y={14} delay={0.08}>
              <p className="mt-6 text-white/78 text-base md:text-xl max-w-2xl leading-relaxed">
                We help owner-operators set up MC authority, USDOT registration,
                BOC-3 filing, insurance coordination, LLC and EIN setup, and the
                compliance steps needed to start operating correctly.
              </p>
            </Reveal>

            <Reveal y={14} delay={0.12}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href="/get-started"
                  className="
                    inline-flex items-center justify-center
                    px-8 py-3.5 rounded-xl
                    bg-[var(--color-accent)]
                    text-[var(--color-primary)]
                    font-semibold
                    hover:opacity-90 transition
                  "
                >
                  Get Started
                </a>

                <a
                  href="/dot-compliance"
                  className="
                    inline-flex items-center justify-center
                    px-8 py-3.5 rounded-xl
                    border border-white/20 text-white
                    hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                    transition font-semibold
                  "
                >
                  DOT Compliance
                </a>
              </div>
            </Reveal>
          </div>

          {/* PROCESS CARD */}
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
              <p className="text-sm uppercase tracking-[0.18em] text-white/42">
                Setup Overview
              </p>

              <h2 className="mt-2 text-2xl md:text-3xl font-bold mb-6">
                What We Handle For You
              </h2>

              <div className="space-y-4">
                {setupItems.map((step) => (
                  <div
                    key={step}
                    className="
                      flex justify-between items-center gap-4
                      border border-white/10 rounded-2xl
                      px-4 py-4 bg-white/[0.03]
                    "
                  >
                    <span className="text-white/82 font-medium">{step}</span>
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
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              MC Number Setup For Owner-Operators
            </h2>
          </Reveal>

          <Reveal delay={0.04}>
            <p className="mt-6 text-white/72 text-base md:text-lg leading-relaxed">
              Getting your MC number is one of the most important steps when starting
              a trucking business. Without proper setup, you can face delays, rejected
              filings, insurance problems, or compliance issues that stop you from
              booking loads.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-4 text-white/72 text-base md:text-lg leading-relaxed">
              Easy D Logistics simplifies the process by helping with LLC and EIN setup,
              USDOT registration, MC authority filing, BOC-3 filing, insurance coordination,
              and compliance support. You can also review our{" "}
              <a
                href="/dot-compliance"
                className="text-[var(--color-accent)] underline underline-offset-4 hover:opacity-85 transition"
              >
                DOT compliance services
              </a>{" "}
              if you need ongoing filing, permit, IFTA, IRP, or audit preparation support.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DETAILED SETUP SERVICES */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/75">
                MC Authority Setup
              </div>

              <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Start Your Trucking Company
                <span className="block text-[var(--color-accent)]">
                  With The Right Foundation
                </span>
              </h2>

              <p className="mt-4 text-white/72 text-base md:text-lg leading-relaxed">
                We help you move through the authority setup process with clearer
                steps, organized paperwork, and fewer avoidable delays.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {setupServices.map((service, index) => (
              <Reveal key={service.title} y={16} delay={0.04 * index}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.18 }}
                  className="
                    h-full rounded-2xl border border-white/10
                    bg-[var(--color-primary-softer)]
                    p-6 md:p-7
                    shadow-[var(--shadow-card)]
                    transition hover:border-[var(--color-border-strong)]
                  "
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[var(--color-accent)] font-bold">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-bold leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-white/70 leading-relaxed text-sm md:text-base">
                    {service.desc}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <Reveal y={18}>
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-[var(--color-primary-softer)] px-8 py-10 md:px-12 md:py-12 shadow-[var(--shadow-card)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
                  Ready To Set Up
                  <span className="block text-[var(--color-accent)]">
                    Your MC Authority?
                  </span>
                </h2>

                <p className="mt-3 text-white/74 max-w-2xl leading-relaxed">
                  Tell us where you are in the process and we’ll help you understand
                  the next step for your trucking business setup.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/get-started"
                  className="
                    inline-flex items-center justify-center
                    px-7 py-3 rounded-xl font-semibold
                    bg-[var(--color-accent)] text-[var(--color-primary)]
                    hover:opacity-90 transition
                  "
                >
                  Start MC Setup
                </a>

                <a
                  href="/contact"
                  className="
                    inline-flex items-center justify-center
                    px-7 py-3 rounded-xl font-semibold
                    border border-white/15 text-white
                    hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                    transition
                  "
                >
                  Book a Call
                </a>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}