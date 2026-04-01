// src/components/HowItWorks.jsx

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Contact Dispatch",
      desc: "Reach out and tell us your truck type, home base, and preferred lanes so we can understand your operation.",
    },
    {
      step: "02",
      title: "We Find Loads",
      desc: "We search, qualify, and line up freight opportunities that match your equipment and route preferences.",
    },
    {
      step: "03",
      title: "We Negotiate Rates",
      desc: "Our team handles broker communication and rate negotiation to help you secure stronger-paying loads.",
    },
    {
      step: "04",
      title: "You Drive & Get Paid",
      desc: "You stay focused on the road while we manage dispatch updates, paperwork coordination, and support.",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
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
    <section className="bg-[var(--color-primary)] text-white py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/75">
              Simple Process. Real Support.
            </div>
          </Reveal>

          <Reveal delay={0.04}>
            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              How Dispatching
              <span className="block text-[var(--color-accent)]">
                Works With Easy D
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-5 text-base md:text-lg text-white/75 leading-relaxed">
              We keep the process simple, clear, and efficient so you can stay
              focused on driving while we handle the coordination behind the scenes.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-7"
        >
          {steps.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.18 }}
              className="
                relative p-6 md:p-7
                bg-[var(--color-primary-softer)]
                rounded-2xl
                border border-white/10
                shadow-[var(--shadow-card)]
                transition
                hover:border-[var(--color-border-strong)]
              "
            >
              <div className="flex items-center justify-between mb-5">
                <div className="text-3xl md:text-4xl font-extrabold text-[var(--color-accent)] tracking-tight">
                  {s.step}
                </div>

                <div className="h-10 w-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/70 text-sm font-semibold">
                  →
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 leading-snug">
                {s.title}
              </h3>

              <p className="text-white/72 leading-relaxed text-sm md:text-base">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}