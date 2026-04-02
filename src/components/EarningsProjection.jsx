// src/components/EarningsProjection.jsx

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function EarningsProjection() {
  return (
    <section className="bg-[var(--color-primary)] text-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/75">
              Revenue Potential
            </div>
          </Reveal>

          <Reveal delay={0.04}>
            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              What Better Dispatching
              <span className="block text-[var(--color-accent)]">
                Can Look Like
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-4 text-white/72 text-base md:text-lg leading-relaxed">
              A well-coordinated dispatch operation can improve consistency,
              reduce wasted time, and help drivers access stronger-paying loads.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 md:gap-8 items-stretch">
          <Reveal delay={0.12} y={18}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.18 }}
              className="
                h-full rounded-3xl border border-white/10
                bg-[var(--color-primary-softer)]
                p-8 md:p-10
                shadow-[var(--shadow-card)]
              "
            >
              <div className="text-sm uppercase tracking-[0.18em] text-white/42">
                Example Weekly Revenue
              </div>

              <div className="mt-5 text-[clamp(3.2rem,6vw,5.4rem)] font-extrabold tracking-tight text-[var(--color-accent)] leading-[0.95] whitespace-nowrap">
                $6,500–$7,500+
              </div>

              <p className="mt-5 text-white/72 text-base md:text-lg max-w-2xl leading-relaxed">
                Example weekly gross potential for a single truck with steady freight,
                good lane alignment, and strong dispatch support.
              </p>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-sm text-white/48">Load Quality</div>
                  <div className="mt-2 text-lg font-semibold">Stronger RPM</div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-sm text-white/48">Dispatch Support</div>
                  <div className="mt-2 text-lg font-semibold">Less downtime</div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-sm text-white/48">Operations</div>
                  <div className="mt-2 text-lg font-semibold">More consistency</div>
                </div>
              </div>
            </motion.div>
          </Reveal>

          <Reveal delay={0.16} y={18}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.18 }}
              className="
                h-full rounded-3xl border border-[var(--color-border-strong)]
                bg-white/[0.03]
                p-8 md:p-10
                shadow-[var(--shadow-accent)]
                flex flex-col
              "
            >
              <h3 className="text-2xl font-bold leading-tight">
                Important Note
              </h3>

              <p className="mt-4 text-white/72 leading-relaxed">
                Actual earnings vary based on equipment type, market conditions,
                preferred regions, availability, broker relationships, and how
                consistently the truck is moving.
              </p>

              <p className="mt-4 text-white/72 leading-relaxed">
                We focus on helping drivers stay organized, reduce empty time,
                and improve opportunities through smarter dispatch execution.
              </p>

              <div className="mt-8 flex justify-center">
                <a
                  href="/contact"
                  className="
                    inline-flex items-center justify-center
                    px-6 py-3 rounded-xl font-semibold
                    bg-[var(--color-accent)] text-[var(--color-primary)]
                    hover:opacity-90 transition
                  "
                >
                  Talk To Us
                </a>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}