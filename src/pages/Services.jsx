// src/pages/Services.jsx
import useSEO from "../hooks/useSEO";

import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

import warehouseHero from "../assets/warehouse-aerial-2.jpeg";
import driverTablet from "../assets/driver-tablet.jpeg";

export default function Services() {
  // SEO — runs when Services page renders
  useSEO({
    title: "Services | Easy D Logistics Dispatching",
    description:
      "Dispatch services for Dry Van, Flatbed, Hotshot, Reefer, plus paperwork handling and broker negotiation. Built to keep trucks moving and profitable.",
    path: "/services",
  });

  const servicesList = [
    { title: "Dry Van", description: "Consistent, high-demand freight with optimized routes." },
    { title: "Flatbed", description: "Specialized freight with higher RPM and careful planning." },
    { title: "Hotshot", description: "Fast, time-sensitive loads, ideal for urgent freight and flexible lanes." },
    { title: "Reefer", description: "Temperature-controlled loads with strict delivery windows and premium rate potential." },
    { title: "Paperwork", description: "Carrier packets, rate confirmations, invoicing, and more." },
    { title: "Broker Negotiation", description: "Professional negotiation for the best possible load rates." },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
  };

  const card = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <>
      {/* HERO IMAGE */}
      <section
        className="relative py-20 text-white overflow-hidden"
        style={{
          backgroundImage: `url(${warehouseHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[var(--color-primary)]/80" />
        {/* Subtle gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <Reveal y={18}>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Our Dispatch Services
            </h1>
          </Reveal>

          <Reveal y={14} delay={0.05}>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Built to keep your trucks moving, profitable, and stress-free.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-[var(--color-primary)] text-white py-14 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {servicesList.map((service) => (
              <motion.div
                key={service.title}
                variants={card}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.18 }}
                className="
                  p-6 md:p-8
                  bg-[var(--color-primary-softer)]
                  rounded-2xl
                  border border-white/15
                  transition
                  hover:border-[var(--color-accent)]
                  hover:shadow-[0_0_0_1px_var(--color-accent)]
                "
              >
                <h2 className="text-xl font-semibold mb-2 text-center">
                  {service.title}
                </h2>
                <p className="text-white/70 text-center leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VISUAL BREAK / SUPPORT IMAGE */}
      <section className="bg-[var(--color-primary)] py-14 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Reveal y={18}>
            <motion.img
              src={driverTablet}
              alt="Dispatcher managing loads on tablet"
              className="rounded-2xl w-full object-cover"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            />
          </Reveal>

          <div className="text-white">
            <Reveal y={18} delay={0.05}>
              <h2 className="text-3xl font-bold mb-4">
                Technology-Driven Dispatching
              </h2>
            </Reveal>

            <Reveal y={14} delay={0.08}>
              <p className="text-white/75 leading-relaxed">
                We combine real-time communication, broker negotiation, and
                back-office support to give owner-operators a competitive edge,
                without distractions.
              </p>
            </Reveal>

            <Reveal y={14} delay={0.1}>
              <div className="mt-6">
                <a
                  href="/contact"
                  className="
                    inline-flex items-center justify-center
                    px-6 py-3 rounded-lg font-semibold
                    bg-[var(--color-accent)] text-[var(--color-primary)]
                    transition hover:opacity-90
                  "
                >
                  Talk to a Dispatcher
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}