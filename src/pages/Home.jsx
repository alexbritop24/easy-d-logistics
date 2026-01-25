// src/pages/Home.jsx
import useSEO from "../hooks/useSEO";
import Reveal from "../components/Reveal";

import Hero from "../components/Hero";
import ServicesOverview from "../components/ServicesOverview";
import HowItWorks from "../components/HowItWorks";
import EarningsProjection from "../components/EarningsProjection";
import Testimonials from "../components/Testimonials";

export default function Home() {
  // SEO — runs when Home page renders
  useSEO({
    title: "Easy D Logistics | 24/7 Dispatching for Owner-Operators & Fleets",
    description:
      "24/7 dispatching for owner-operators and small fleets. We handle load booking, broker negotiation, and paperwork so you can focus on the road.",
    path: "/",
  });

  return (
    <>
      {/* HERO */}
      <Hero />

      {/* SERVICES */}
      <ServicesOverview />

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* EARNINGS */}
      <EarningsProjection />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA BANNER */}
      <Reveal y={18} delay={0.12}>
        <section className="bg-[var(--color-primary)] text-white">
          <div className="max-w-5xl mx-auto text-center px-6 py-12 md:py-16">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Ready To Maximize Your Earnings?
            </h2>

            <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
              Join Easy D Logistics and get premium dispatching, without the stress.
            </p>

            <div className="mt-6">
              <a
                href="/contact"
                className="inline-block bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold px-6 py-3 rounded-md hover:opacity-90 transition"
              >
                Talk to a Dispatcher
              </a>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}