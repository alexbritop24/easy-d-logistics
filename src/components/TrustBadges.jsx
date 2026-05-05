// src/components/TrustBadges.jsx
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function TrustBadges() {
  const items = [
    {
      value: "24/7",
      title: "Dispatch Support",
      desc: "Load booking, broker updates, and support when your operation needs quick communication.",
    },
    {
      value: "DOT",
      title: "Compliance Help",
      desc: "Support for DOT compliance, MC authority, USDOT registration, and filing requirements.",
    },
    {
      value: "MC",
      title: "Authority Setup",
      desc: "We help new owner-operators get set up correctly so they can stay compliant and start moving.",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.04 },
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
    <section className="bg-[var(--color-primary)] text-white py-14 md:py-18">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <Reveal>
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/75">
              Built For Real Operators
            </div>
          </Reveal>

          <Reveal delay={0.04}>
            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Dispatch, Compliance,
              <span className="block text-[var(--color-accent)]">
                And Setup Support
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-4 text-white/72 text-base md:text-lg leading-relaxed">
              Easy D Logistics helps owner-operators and small fleets stay loaded,
              compliant, organized, and ready to operate nationwide.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8"
        >
          {items.map((itemData) => (
            <motion.div
              key={itemData.title}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.18 }}
              className="
                rounded-2xl border border-white/10
                bg-[var(--color-primary-softer)]
                p-6 md:p-8
                text-center
                shadow-[var(--shadow-card)]
                transition
                hover:border-[var(--color-border-strong)]
                min-h-[250px]
                flex flex-col items-center
              "
            >
              <div className="mx-auto mb-5 flex min-h-[56px] min-w-[86px] px-4 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <span className="text-[var(--color-accent)] text-base md:text-lg font-bold tracking-tight leading-none">
                  {itemData.value}
                </span>
              </div>

              <h3 className="text-xl md:text-[1.65rem] font-bold mb-3 leading-tight max-w-[14ch]">
                {itemData.title}
              </h3>

              <p className="text-white/70 leading-relaxed text-sm md:text-base max-w-[29ch]">
                {itemData.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}