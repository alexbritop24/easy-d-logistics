// src/pages/Home.jsx
import useSEO from "../hooks/useSEO";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

import Hero from "../components/Hero";
import TrustBadges from "../components/TrustBadges";
import ServicesOverview from "../components/ServicesOverview";
import HowItWorks from "../components/HowItWorks";
import EarningsProjection from "../components/EarningsProjection";
import Testimonials from "../components/Testimonials";
import CTABanner from "../components/CTABanner";

export default function Home() {
  useSEO({
    title: "Easy D Logistics | 24/7 Dispatching for Owner-Operators & Fleets",
    description:
      "24/7 dispatching for owner-operators and small fleets. We handle load booking, broker negotiation, and paperwork so you can focus on the road.",
    path: "/",
    ogImage: "/easy-d-logo.png",
  });

  return (
    <>
      <Hero />
      <TrustBadges />
      <ServicesOverview />

      <section className="bg-[var(--color-primary)] text-white px-6 py-8 md:py-10">
        <div className="max-w-6xl mx-auto">
          <Reveal y={18}>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.18 }}
              className="
                rounded-3xl border border-white/10
                bg-[var(--color-primary-softer)]
                px-7 py-8 md:px-10 md:py-10
                shadow-[var(--shadow-card)]
                flex flex-col md:flex-row md:items-center md:justify-between gap-6
              "
            >
              <div>
                <div className="text-sm uppercase tracking-[0.18em] text-white/42">
                  DOT & MC Compliance
                </div>

                <h2 className="mt-3 text-2xl md:text-4xl font-extrabold leading-tight">
                  Stay Compliant.
                  <span className="block text-[var(--color-accent)]">
                    Stay on the Road.
                  </span>
                </h2>

                <p className="mt-3 text-white/72 max-w-2xl leading-relaxed">
                  We help with DOT and MC compliance support so you can focus on
                  driving, dispatching, and keeping your operation moving.
                </p>
              </div>

              <a
                href="/dot-compliance"
                className="
                  inline-flex items-center justify-center
                  px-7 py-3 rounded-xl font-semibold
                  bg-[var(--color-accent)] text-[var(--color-primary)]
                  hover:opacity-90 transition
                  shrink-0
                "
              >
                View Compliance
              </a>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <HowItWorks />
      <EarningsProjection />
      <Testimonials />
      <CTABanner />
    </>
  );
}