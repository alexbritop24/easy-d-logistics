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
    title: "Truck Dispatch Services & DOT Compliance | Easy D Logistics",
    description:
      "Easy D Logistics provides truck dispatch services, DOT compliance support, MC setup help, load booking, broker negotiation, and paperwork support for owner-operators and small fleets nationwide.",
    path: "/",
    ogImage: "/easy-d-logo.png",
  });

  return (
    <>
      <Hero />
      <TrustBadges />
      <ServicesOverview />

      {/* COMPLIANCE + SEO LINKING SECTION */}
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
              {/* TEXT */}
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
                  We help with DOT compliance, MC authority setup, USDOT registration,
                  and filing support so your trucking operation can stay active and moving.
                </p>
              </div>

              {/* 🔥 UPDATED BUTTON GROUP */}
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <a
                  href="/dot-compliance"
                  className="
                    inline-flex items-center justify-center
                    px-6 py-3 rounded-xl font-semibold
                    bg-[var(--color-accent)] text-[var(--color-primary)]
                    hover:opacity-90 transition
                  "
                >
                  DOT Compliance
                </a>

                <a
                  href="/truck-dispatch-services"
                  className="
                    inline-flex items-center justify-center
                    px-6 py-3 rounded-xl font-semibold
                    border border-white/20 text-white
                    hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                    transition
                  "
                >
                  Dispatch Services
                </a>

                <a
                  href="/mc-number-setup"
                  className="
                    inline-flex items-center justify-center
                    px-6 py-3 rounded-xl font-semibold
                    border border-white/20 text-white
                    hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                    transition
                  "
                >
                  MC Setup
                </a>
              </div>
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