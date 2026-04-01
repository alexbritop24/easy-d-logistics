// src/components/Testimonials.jsx

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Best dispatch service I’ve ever used, loads are consistent and pay great.",
      name: "J. Martinez",
      role: "Owner-Operator",
    },
    {
      quote:
        "These guys negotiate better than anyone. My revenue jumped immediately.",
      name: "A. Brown",
      role: "Fleet Driver",
    },
    {
      quote:
        "24/7 support is real, they always help no matter the time of day.",
      name: "D. Williams",
      role: "Independent Driver",
    },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
  };

  const item = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="py-20 md:py-24 bg-[var(--color-primary)] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Reveal>
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/75">
            Trusted By Real Drivers
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <h2 className="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            What Drivers
            <span className="block text-[var(--color-accent)]">
              Say About Us
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-5 text-white/72 mb-12 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Real feedback from owner-operators and drivers who rely on us for
            dispatch support, broker communication, and load coordination.
          </p>
        </Reveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map(({ quote, name, role }) => (
            <motion.div
              key={name}
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.18 }}
              className="
                h-full
                rounded-2xl
                border border-white/10
                bg-[var(--color-primary-softer)]
                p-7 md:p-8
                shadow-[var(--shadow-card)]
                transition
                hover:border-[var(--color-border-strong)]
              "
            >
              <div className="mb-5 flex justify-center">
                <div className="h-11 w-11 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-[var(--color-accent)] text-xl font-bold">
                  “
                </div>
              </div>

              <p className="text-white/78 leading-relaxed text-base md:text-lg">
                {quote}
              </p>

              <div className="mt-8 pt-5 border-t border-white/10">
                <h3 className="font-semibold text-[var(--color-accent)] text-base md:text-lg">
                  {name}
                </h3>

                <p className="mt-1 text-sm text-white/55">
                  {role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}