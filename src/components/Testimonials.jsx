// src/components/Testimonials.jsx
// Purpose: Add consistent scroll-reveal + staggered card entrance + subtle hover lift (matches other sections).

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Best dispatch service I’ve ever used, loads are consistent and pay great.",
      name: "J. Martinez",
    },
    {
      quote:
        "These guys negotiate better than anyone. My revenue jumped immediately.",
      name: "A. Brown",
    },
    {
      quote:
        "24/7 support is real, they always help no matter the time of day.",
      name: "D. Williams",
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
    <section className="py-24 bg-[var(--color-primary)] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold mb-4">What Drivers Say</h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-white/70 mb-12 max-w-2xl mx-auto">
            Real feedback from owner-operators and fleet managers we work with daily.
          </p>
        </Reveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10"
        >
          {testimonials.map(({ quote, name }) => (
            <motion.div
              key={name}
              variants={item}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.18 }}
              className="
                h-full
                p-6 md:p-8
                bg-[var(--color-primary-softer)]
                rounded-2xl
                border border-white/15
                transition
                hover:border-[var(--color-accent)]
                hover:shadow-[0_0_0_1px_var(--color-accent)]
              "
            >
              <p className="text-white/80 leading-relaxed">“{quote}”</p>

              <h3 className="mt-6 font-semibold text-[var(--color-accent)]">
                {name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}