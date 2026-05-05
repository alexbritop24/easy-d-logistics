// src/pages/DotCompliancePage.jsx
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import useSEO from "../hooks/useSEO";

export default function DotCompliancePage() {
  useSEO({
    title: "DOT Compliance Services | MC, USDOT, IFTA & IRP Setup | Easy D Logistics",
    description:
      "Easy D Logistics handles DOT compliance, MC and USDOT setup, LLC and EIN setup, insurance coordination, IFTA, IRP, permit management, drug program enrollment, and audit preparation.",
    path: "/dot-compliance",
  });

  const complianceItems = [
    "LLC + EIN Setup",
    "MC + USDOT Setup",
    "Insurance Coordination",
    "IFTA + IRP",
    "Drug Program Enrollment",
    "Permit Management",
    "Audit Preparation",
  ];

  const detailedServices = [
    {
      title: "LLC + EIN Setup",
      desc: "We help new trucking businesses get properly structured with LLC and EIN setup before moving into authority and compliance filings.",
    },
    {
      title: "MC + USDOT Setup",
      desc: "We assist with MC authority and USDOT registration so your trucking operation can become active and legally ready to operate.",
    },
    {
      title: "Insurance Coordination",
      desc: "We help coordinate the insurance process so your filings and authority setup move forward without unnecessary delays.",
    },
    {
      title: "IFTA + IRP",
      desc: "We support IFTA and IRP setup for carriers that need fuel tax and apportioned registration compliance across multiple states.",
    },
    {
      title: "Drug Program Enrollment",
      desc: "We help connect carriers with required drug and alcohol program enrollment to stay compliant with FMCSA expectations.",
    },
    {
      title: "Permit Management",
      desc: "We help manage trucking permits and required documents so your operation stays organized and road-ready.",
    },
    {
      title: "Audit Preparation",
      desc: "We help prepare your paperwork and compliance records so you are better positioned for DOT audits or safety reviews.",
    },
  ];

  return (
    <main className="bg-[var(--color-primary)] text-white min-h-screen">
      {/* HERO */}
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
                We handle DOT compliance, MC and USDOT setup, filings, permits,
                insurance coordination, and compliance support so you can focus
                on driving and making money.
              </p>
            </Reveal>

            <Reveal y={14} delay={0.12}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
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
                      Supported
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* SEO CONTENT SECTION */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              DOT Compliance Services For Owner-Operators
            </h2>
          </Reveal>

          <Reveal delay={0.04}>
            <p className="mt-6 text-white/72 text-base md:text-lg leading-relaxed">
              Starting a trucking business or maintaining compliance can be overwhelming.
              Easy D Logistics helps owner-operators and small fleets with LLC and EIN setup,{" "}
              <a
                href="/mc-number-setup"
                className="text-[var(--color-accent)] underline underline-offset-4 hover:opacity-85 transition"
              >
                MC number setup
              </a>
              , USDOT registration, BOC-3 filing, insurance coordination, IFTA, IRP,
              permit management, drug program enrollment, and audit preparation.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-4 text-white/72 text-base md:text-lg leading-relaxed">
              Whether you're just getting started or fixing compliance issues,
              our team helps keep your paperwork organized and your authority moving
              forward so you can avoid delays, shutdowns, and missed load opportunities.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DETAILED SERVICES */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/75">
                Compliance Services
              </div>

              <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Full Compliance Support
                <span className="block text-[var(--color-accent)]">
                  For Trucking Operations
                </span>
              </h2>

              <p className="mt-4 text-white/72 text-base md:text-lg leading-relaxed">
                We support the setup, filings, and ongoing compliance work needed
                to keep your trucking business organized and road-ready.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {detailedServices.map((service, index) => (
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
                  Need Help Getting
                  <span className="block text-[var(--color-accent)]">
                    Compliant And Road-Ready?
                  </span>
                </h2>

                <p className="mt-3 text-white/74 max-w-2xl leading-relaxed">
                  Tell us where you are in the process and we’ll help you understand
                  the next step for your trucking business.
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
                  Start Compliance Setup
                </a>

                <a
                  href="/mc-number-setup"
                  className="
                    inline-flex items-center justify-center
                    px-7 py-3 rounded-xl font-semibold
                    border border-white/15 text-white
                    hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                    transition
                  "
                >
                  MC Number Setup
                </a>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}