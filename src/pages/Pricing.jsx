// src/pages/Pricing.jsx
import useSEO from "../hooks/useSEO";

import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

export default function Pricing() {
  // SEO — runs when Pricing page renders
  useSEO({
    title: "Pricing | Easy D Logistics Dispatching",
    description:
      "Simple dispatch pricing for owner-operators and small fleets: Starter 6%, Pro 7% (recommended), Premium 8%. Fleet support available.",
    path: "/pricing",
    ogImage: "/EasyD.png",
  });

  const plans = [
    {
      title: "Starter",
      price: "6% per load",
      features: ["Load Booking", "Rate Negotiation", "Carrier Packets", "24/7 Support"],
    },
    {
      title: "Pro",
      price: "7% per load",
      features: ["Everything in Starter", "Factoring Assistance", "Route Optimization", "Weekly Reports"],
      highlight: true,
    },
    {
      title: "Premium",
      price: "8% per load",
      features: ["Everything in Pro", "Back Office Support", "Priority Dispatching", "Dedicated Dispatcher"],
    },
  ];

  const cardClass =
    "p-6 rounded-xl bg-[var(--color-primary)] border border-white/20 " +
    "shadow-[0_0_22px_rgba(255,255,255,0.10)] " +
    "transition hover:shadow-[0_0_30px_rgba(255,255,255,0.14)] " +
    "flex flex-col";

  return (
    <section className="py-20 bg-[var(--color-primary-softer)] text-white px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h1 className="text-4xl font-bold text-center mb-12">Pricing Plans</h1>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <Reveal key={plan.title} delay={0.06 * idx}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.18 }}
                className={cardClass}
              >
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-semibold">{plan.title}</h2>

                  {plan.highlight && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-accent)] text-[var(--color-primary)]">
                      Recommended
                    </span>
                  )}
                </div>

                <p className="text-[var(--color-accent)] text-xl font-bold mb-4">
                  {plan.price}
                </p>

                <ul className="text-white/80 text-sm space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>

                {/* Primary CTA (keep as main) */}
                <a
                  href="/contact"
                  className="
                    mt-auto block text-center py-2 rounded-lg font-semibold
                    bg-[var(--color-accent)] text-[var(--color-primary)]
                    transition hover:opacity-90
                  "
                >
                  Talk to a Dispatcher
                </a>

                {/* Secondary CTA (low-risk visibility for Get Started route) */}
                <a
                  href="/get-started"
                  className="
                    mt-3 block text-center py-2 rounded-lg font-semibold
                    border border-white/20 text-white
                    transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                  "
                >
                  Get Started
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <div className="mt-10 text-center text-white/75">
            If you have more than one truck, we can help you too, contact us for fleet support and custom planning.
          </div>
        </Reveal>
      </div>
    </section>
  );
}