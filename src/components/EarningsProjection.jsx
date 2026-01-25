// src/components/EarningsProjection.jsx
// Purpose: Add clean scroll-reveal animation + match the hover accent outline used on other cards.

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function EarningsProjection() {
  return (
    <section className="bg-[var(--color-primary)] text-white py-12 md:py-20">
      <div className="max-w-5xl mx-auto text-center px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Earnings Projection
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-white/70 mb-6 md:mb-12">
            Example weekly revenue for a single truck.
          </p>
        </Reveal>

        <Reveal delay={0.14} y={18}>
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.18 }}
            className="
              p-6 md:p-10
              bg-[var(--color-primary-softer)]
              rounded-xl
              border border-white/15
              max-w-md
              mx-auto
              transition
              hover:border-[var(--color-accent)]
              hover:shadow-[0_0_0_1px_var(--color-accent)]
            "
          >
            <h3 className="text-lg font-semibold mb-3 md:mb-4">
              Estimated Weekly Revenue
            </h3>

            <p className="text-4xl md:text-5xl font-extrabold text-[var(--color-accent)]">
              $6,500 – $7,500+
            </p>

            <p className="text-white/60 mt-3 md:mt-4 text-sm">
              Estimates vary by equipment type, region, and availability.
            </p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}