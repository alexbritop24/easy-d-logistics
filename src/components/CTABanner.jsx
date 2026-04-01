// src/components/CTABanner.jsx
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function CTABanner() {
  return (
    <section className="bg-[var(--color-primary)] text-white px-6 pb-20 pt-6">
      <div className="max-w-6xl mx-auto">
        <Reveal y={18}>
          <div className="rounded-3xl border border-white/10 bg-[var(--color-primary-softer)] px-8 py-10 md:px-12 md:py-14 shadow-[var(--shadow-card)] overflow-hidden relative">
            {/* subtle glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(143,199,238,0.10),transparent_42%)] pointer-events-none" />

            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/75">
                  Ready To Move Forward?
                </div>

                <h2 className="mt-5 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
                  Ready To Maximize
                  <span className="block text-[var(--color-accent)]">
                    Your Earnings?
                  </span>
                </h2>

                <p className="mt-4 text-base md:text-lg text-white/74 max-w-2xl leading-relaxed">
                  Work with Easy D Logistics and get dispatch support built to keep
                  you loaded, organized, and focused on the road instead of paperwork.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-4 md:min-w-[220px]">
                <motion.a
                  href="/contact"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.16 }}
                  className="
                    inline-flex items-center justify-center
                    px-7 py-3.5 rounded-xl font-semibold
                    bg-[var(--color-accent)] text-[var(--color-primary)]
                    hover:opacity-90 transition
                  "
                >
                  Get Started Now
                </motion.a>

                <a
                  href="tel:+13852928031"
                  className="
                    inline-flex items-center justify-center
                    px-7 py-3.5 rounded-xl font-semibold
                    border border-white/12 text-white/88
                    hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                    transition
                  "
                >
                  Call 385-292-8031
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}