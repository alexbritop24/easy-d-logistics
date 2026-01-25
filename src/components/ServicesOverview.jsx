import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function ServicesOverview() {
  const cards = [
    { title: "Dry Van", desc: "Consistent, high-demand freight with optimized routes." },
    { title: "Flatbed", desc: "Specialized freight with higher RPM and careful planning." },
    { title: "Hotshot", desc: "Fast, time-sensitive loads — ideal for urgent freight and flexible lanes." },
    { title: "Reefer", desc: "Temperature-controlled loads with strict delivery windows and premium rate potential." },
    { title: "Paperwork", desc: "Carrier packets, rate confirmations, invoicing, and more." },
    { title: "Broker Negotiation", desc: "Professional negotiation for the best possible load rates." },
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
    <section className="bg-[var(--color-primary)] text-white py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Dispatch Services
          </h2>
        </Reveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8"
        >
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={item}
              className="
                h-full p-6 md:p-8
                bg-[var(--color-primary-softer)]
                rounded-2xl border border-white/15
                transition
                hover:border-[var(--color-accent)]
                hover:shadow-[0_0_0_1px_var(--color-accent)]
              "
            >
              <div className="min-h-[56px] flex items-center justify-center">
                <h3 className="text-xl font-semibold text-center leading-snug">
                  {c.title}
                </h3>
              </div>

              <p className="mt-3 text-white/70 leading-relaxed text-center">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}