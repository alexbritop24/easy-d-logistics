// src/pages/Pricing.jsx
import useSEO from "../hooks/useSEO";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

export default function Pricing() {
  useSEO({
    title: "Pricing | Easy D Logistics Dispatching",
    description:
      "Transparent dispatch pricing for owner-operators and fleets. Choose the level of dispatch support that fits your operation.",
    path: "/pricing",
    ogImage: "https://easydlogistics.com/easy-d-logo.png",
  });

  const plans = [
    {
      title: "Starter",
      price: "6% per load",
      description:
        "A clean starting point for owner-operators who need reliable dispatch support without extra complexity.",
      features: [
        "Load Booking",
        "Rate Negotiation",
        "Carrier Packets",
        "24/7 Support",
      ],
    },
    {
      title: "Pro",
      price: "7% per load",
      description:
        "Our most balanced plan for drivers who want stronger coordination, better optimization, and more support.",
      features: [
        "Everything in Starter",
        "Factoring Assistance",
        "Route Optimization",
        "Weekly Reports",
      ],
      highlight: true,
    },
    {
      title: "Premium",
      price: "8% per load",
      description:
        "Built for operators who want priority handling, more dedicated support, and higher-touch dispatch service.",
      features: [
        "Everything in Pro",
        "Back Office Support",
        "Priority Dispatching",
        "Dedicated Dispatcher",
      ],
    },
  ];

  return (
    <main className="bg-[var(--color-primary)] text-white">
      {/* Header */}
      <section className="px-6 pt-24 pb-12">
        <div className="max-w-6xl mx-auto text-center">
          <Reveal y={18}>
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/75">
              Transparent Dispatch Pricing
            </div>
          </Reveal>

          <Reveal y={18} delay={0.04}>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Pricing That Fits
              <span className="block text-[var(--color-accent)]">
                Your Operation
              </span>
            </h1>
          </Reveal>

          <Reveal y={14} delay={0.08}>
            <p className="mt-5 text-base md:text-lg text-white/75 max-w-3xl mx-auto leading-relaxed">
              Simple pricing for owner-operators and growing fleets. Choose the level
              of support that matches your goals, your lanes, and the way you operate.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 pb-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-7">
          {plans.map((plan, idx) => (
            <Reveal key={plan.title} delay={0.06 * idx}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className={[
                  "h-full rounded-2xl border p-7 md:p-8 flex flex-col",
                  "bg-[var(--color-primary-softer)] shadow-[var(--shadow-card)]",
                  plan.highlight
                    ? "border-[var(--color-border-strong)]"
                    : "border-white/10",
                ].join(" ")}
              >
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-2xl font-bold">{plan.title}</h2>

                  {plan.highlight && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-accent)] text-[var(--color-primary)]">
                      Recommended
                    </span>
                  )}
                </div>

                <div className="text-[var(--color-accent)] text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
                  {plan.price}
                </div>

                <p className="text-white/72 leading-relaxed mb-6">
                  {plan.description}
                </p>

                <div className="mb-6 h-px bg-white/10" />

                <ul className="space-y-3 text-white/80 text-sm md:text-base mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto space-y-3">
                  <a
                    href="/contact"
                    className="
                      block text-center py-3 rounded-xl font-semibold
                      bg-[var(--color-accent)] text-[var(--color-primary)]
                      transition hover:opacity-90
                    "
                  >
                    Contact Us
                  </a>

                  <a
                    href="/get-started"
                    className="
                      block text-center py-3 rounded-xl font-semibold
                      border border-white/15 text-white
                      transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                    "
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Bottom Note */}
      <Reveal y={16} delay={0.2}>
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-[var(--color-primary-softer)] px-8 py-8 md:px-10 md:py-10 shadow-[var(--shadow-card)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  Need Support For Multiple Trucks?
                </h2>
                <p className="mt-3 text-white/72 max-w-2xl leading-relaxed">
                  If you have more than one truck, we can help with fleet support,
                  custom planning, and dispatch workflows built around your operation.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-xl font-semibold bg-[var(--color-accent)] text-[var(--color-primary)] hover:opacity-90 transition"
              >
                Talk To Us
              </a>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}