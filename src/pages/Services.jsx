// src/pages/Services.jsx
import useSEO from "../hooks/useSEO";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

import warehouseHero from "../assets/warehouse-aerial-2.jpeg";
import driverTablet from "../assets/driver-tablet.jpeg";

export default function Services() {
  useSEO({
    title: "Services | Easy D Logistics Dispatching",
    description:
      "Dispatch services for Dry Van, Flatbed, Hotshot, Reefer, DOT and MC compliance, paperwork handling, and broker negotiation.",
    path: "/services",
    ogImage: "/easy-d-logo.png",
  });

  const servicesList = [
    {
      title: "Dry Van",
      description: "Consistent, high-demand freight with optimized routes.",
      href: "/services",
    },
    {
      title: "Flatbed",
      description: "Specialized freight with higher RPM and careful planning.",
      href: "/services",
    },
    {
      title: "Hotshot",
      description: "Fast, time-sensitive loads, ideal for urgent freight and flexible lanes.",
      href: "/services",
    },
    {
      title: "Reefer",
      description: "Temperature-controlled loads with strict delivery windows and premium rate potential.",
      href: "/services",
    },
    {
      title: "DOT & MC Compliance",
      description:
        "Compliance support for DOT, MC authority, filings, insurance, and required setup so your operation stays road-ready.",
      href: "/dot-compliance",
      highlight: true,
    },
    {
      title: "Paperwork",
      description: "Carrier packets, rate confirmations, invoicing, and more.",
      href: "/services",
    },
    {
      title: "Broker Negotiation",
      description: "Professional negotiation for the best possible load rates.",
      href: "/services",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.06 },
    },
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
    <main className="bg-[var(--color-primary)] text-white">
      {/* HERO */}
      <section
        className="relative overflow-hidden py-24 md:py-28"
        style={{
          backgroundImage: `url(${warehouseHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-[var(--color-primary)]/82" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[var(--color-primary)]/15 to-black/45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(143,199,238,0.12),transparent_38%)]" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <Reveal y={18}>
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-white/75">
              Dispatch Services
            </div>
          </Reveal>

          <Reveal y={18} delay={0.04}>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Dispatch Support Built
              <span className="block text-[var(--color-accent)]">
                For Serious Operators
              </span>
            </h1>
          </Reveal>

          <Reveal y={14} delay={0.08}>
            <p className="mt-5 text-white/78 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              From fast-moving hotshot loads to temperature-controlled freight,
              our services are built to keep your truck moving, profitable, compliant, and organized.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal y={16}>
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                What We Help You
                <span className="block text-[var(--color-accent)]">
                  Move Better
                </span>
              </h2>

              <p className="mt-4 text-white/72 text-base md:text-lg leading-relaxed">
                We combine dispatch execution, broker communication, compliance support,
                and admin help into one streamlined service built around the way real drivers operate.
              </p>
            </div>
          </Reveal>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {servicesList.map((service) => (
              <motion.a
                key={service.title}
                href={service.href}
                variants={card}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.18 }}
                className={`
                  rounded-2xl border
                  bg-[var(--color-primary-softer)]
                  p-7 md:p-8
                  shadow-[var(--shadow-card)]
                  transition
                  ${
                    service.highlight
                      ? "border-[var(--color-border-strong)]"
                      : "border-white/10 hover:border-[var(--color-border-strong)]"
                  }
                `}
              >
                <div className="mb-4 inline-flex px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/5 border border-white/10 text-white/75">
                  {service.highlight ? "Compliance Service" : "Easy D Logistics"}
                </div>

                <h2 className="text-2xl font-bold mb-3 leading-snug">
                  {service.title}
                </h2>

                <p className="text-white/72 leading-relaxed">
                  {service.description}
                </p>

                {service.highlight && (
                  <div className="mt-5 text-[var(--color-accent)] font-semibold text-sm">
                    Learn more →
                  </div>
                )}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VISUAL / SUPPORT SECTION */}
      <section className="px-6 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">
          <Reveal y={18}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[var(--shadow-card)] min-h-[340px]"
            >
              <img
                src={driverTablet}
                alt="Dispatcher managing loads on tablet"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm text-xs font-semibold tracking-wide text-white/90">
                  Real-Time Support
                </div>

                <p className="mt-4 text-white/82 max-w-md text-sm md:text-base leading-relaxed">
                  Dispatch updates, broker coordination, documentation, and compliance support —
                  all built to reduce friction while you stay focused on the road.
                </p>
              </div>
            </motion.div>
          </Reveal>

          <div className="flex flex-col justify-center text-white">
            <Reveal y={18} delay={0.05}>
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/75 w-fit">
                Technology + Communication
              </div>
            </Reveal>

            <Reveal y={18} delay={0.08}>
              <h2 className="mt-5 text-3xl md:text-5xl font-extrabold leading-tight">
                Technology-Driven
                <span className="block text-[var(--color-accent)]">
                  Dispatching
                </span>
              </h2>
            </Reveal>

            <Reveal y={14} delay={0.12}>
              <p className="mt-5 text-white/74 leading-relaxed text-base md:text-lg max-w-xl">
                We combine real-time communication, broker negotiation, compliance support,
                and back-office help to give owner-operators a competitive edge without
                creating distractions or wasted time.
              </p>
            </Reveal>

            <Reveal y={14} delay={0.16}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="
                    inline-flex items-center justify-center
                    px-7 py-3 rounded-xl font-semibold
                    bg-[var(--color-accent)] text-[var(--color-primary)]
                    transition hover:opacity-90
                  "
                >
                  Contact Us
                </a>

                <a
                  href="/dot-compliance"
                  className="
                    inline-flex items-center justify-center
                    px-7 py-3 rounded-xl font-semibold
                    border border-white/15 text-white
                    transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                  "
                >
                  DOT Compliance
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <Reveal y={18} delay={0.12}>
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-[var(--color-primary-softer)] px-8 py-10 md:px-12 md:py-12 shadow-[var(--shadow-card)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
                  Need Dispatch Or Compliance Support
                  <span className="block text-[var(--color-accent)]">
                    That Actually Keeps Up?
                  </span>
                </h2>

                <p className="mt-3 text-white/74 max-w-2xl">
                  Let’s talk about your equipment, lanes, dispatch needs, and compliance setup
                  so we can help you stay loaded and operating with confidence.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-xl font-semibold bg-[var(--color-accent)] text-[var(--color-primary)] hover:opacity-90 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}