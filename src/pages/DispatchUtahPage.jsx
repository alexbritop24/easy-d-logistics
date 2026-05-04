// src/pages/DispatchUtahPage.jsx
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import useSEO from "../hooks/useSEO";

export default function DispatchUtahPage() {
  useSEO({
    title: "Truck Dispatch Services in Utah | Easy D Logistics",
    description:
      "Truck dispatch services for owner-operators and small fleets in Utah. We help with load booking, broker negotiation, paperwork, and dispatch support.",
    path: "/dispatch-services-utah",
    ogImage: "/easy-d-logo.png",
  });

  const services = [
    "Load Booking",
    "Broker Negotiation",
    "Rate Confirmations",
    "Carrier Packets",
    "Route Support",
    "DOT & MC Compliance Support",
  ];

  return (
    <main className="bg-[var(--color-primary)] text-white min-h-screen">
      <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(143,199,238,0.12),transparent_38%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-center">
          <div>
            <Reveal y={18}>
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/75">
                Utah Truck Dispatch Services
              </div>
            </Reveal>

            <Reveal y={18} delay={0.04}>
              <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Truck Dispatch Services
                <span className="block text-[var(--color-accent)]">
                  For Utah Operators
                </span>
              </h1>
            </Reveal>

            <Reveal y={14} delay={0.08}>
              <p className="mt-6 text-base md:text-xl text-white/78 max-w-2xl leading-relaxed">
                Easy D Logistics provides dispatch support for owner-operators and
                small fleets in Utah and across the United States. We help keep your
                truck loaded, organized, and moving.
              </p>
            </Reveal>

            <Reveal y={14} delay={0.12}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="/get-started"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold bg-[var(--color-accent)] text-[var(--color-primary)] hover:opacity-90 transition"
                >
                  Get Started
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold border border-white/20 text-white hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition"
                >
                  Book a Call
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal y={18} delay={0.08}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.18 }}
              className="rounded-3xl border border-white/10 bg-[var(--color-primary-softer)] p-6 md:p-8 shadow-[var(--shadow-card)]"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-white/42">
                Dispatch Support Includes
              </p>

              <h2 className="mt-2 text-2xl md:text-3xl font-bold">
                Built To Keep You Moving
              </h2>

              <div className="mt-6 space-y-4">
                {services.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
                  >
                    <span className="text-white/82 font-medium">{item}</span>
                    <span className="text-[var(--color-accent)] text-sm font-semibold">
                      Included
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Dispatch Services For Owner-Operators in Utah
            </h2>
          </Reveal>

          <Reveal delay={0.04}>
            <p className="mt-6 text-white/72 text-base md:text-lg leading-relaxed">
              If you are an owner-operator or small fleet based in Utah, having a
              reliable dispatch partner can help reduce downtime and improve load
              consistency. We assist with load searches, broker communication, rate
              negotiation, paperwork, and dispatch coordination.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-4 text-white/72 text-base md:text-lg leading-relaxed">
              Easy D Logistics is based in Provo, Utah and supports drivers across
              the country. Whether you run dry van, flatbed, hotshot, or reefer,
              our dispatch service is built to help you stay organized and focused
              on driving.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-xl font-semibold bg-[var(--color-accent)] text-[var(--color-primary)] hover:opacity-90 transition"
              >
                Contact Easy D Logistics
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}