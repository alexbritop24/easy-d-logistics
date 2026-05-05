import { motion } from "framer-motion";
import Reveal from "./Reveal";

import dryVanImg from "../assets/dispatch-support-team.jpeg";
import flatbedImg from "../assets/dispatch-office-wide.jpeg";
import hotshotImg from "../assets/driver-on-phone-cabin.jpeg";
import reeferImg from "../assets/gps-truck.jpeg";
import paperworkImg from "../assets/driver-tablet.jpeg";
import negotiationImg from "../assets/dispatch-center-side.jpeg";

export default function ServicesOverview() {
  const cards = [
    {
      title: "Dry Van Dispatch",
      desc: "Consistent freight, optimized lanes, and reliable weekly loads.",
      image: dryVanImg,
    },
    {
      title: "Flatbed Dispatch",
      desc: "Higher-paying specialized loads with smart route planning.",
      image: flatbedImg,
    },
    {
      title: "Hotshot Dispatch",
      desc: "Time-sensitive freight with flexible and fast-moving opportunities.",
      image: hotshotImg,
    },
    {
      title: "Reefer Dispatch",
      desc: "Temperature-controlled loads with premium rate potential.",
      image: reeferImg,
    },
    {
      title: "Paperwork Management",
      desc: "Carrier packets, rate confirmations, invoicing handled for you.",
      image: paperworkImg,
    },
    {
      title: "Broker Negotiation",
      desc: "We negotiate stronger rates so you maximize revenue per load.",
      image: negotiationImg,
    },

    // 🔥 NEW SEO CARD (MOST IMPORTANT)
    {
      title: "DOT & MC Compliance",
      desc: "We handle MC authority, USDOT registration, filings, and compliance so you stay on the road.",
      image: negotiationImg,
      link: "/dot-compliance",
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
    <section className="bg-[var(--color-primary)] text-white py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4">
            Dispatch & Compliance Services
          </h2>
        </Reveal>

        <Reveal delay={0.04}>
          <p className="text-center text-white/75 max-w-3xl mx-auto mb-8 md:mb-12 text-base md:text-lg">
            From dispatching to DOT compliance and MC setup, we help owner-operators
            stay loaded, compliant, and profitable.
          </p>
        </Reveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8"
        >
          {cards.map((c) => {
            const Wrapper = c.link ? "a" : "div";

            return (
              <motion.div
                key={c.title}
                variants={item}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <Wrapper
                  href={c.link || undefined}
                  className="block relative overflow-hidden rounded-2xl border border-white/15 min-h-[280px] md:min-h-[320px] group"
                  style={{
                    backgroundImage: `url(${c.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="absolute inset-0 bg-[var(--color-primary)]/72 transition duration-300 group-hover:bg-[var(--color-primary)]/62" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute inset-0 rounded-2xl ring-0 ring-[var(--color-accent)]/0 transition duration-300 group-hover:ring-1 group-hover:ring-[var(--color-accent)]/90" />

                  <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                    <div className="mb-3 inline-flex self-start px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold tracking-wide text-white/85">
                      Easy D Logistics
                    </div>

                    <h3 className="text-2xl font-bold leading-snug">
                      {c.title}
                    </h3>

                    <p className="mt-3 text-white/80 leading-relaxed">
                      {c.desc}
                    </p>

                    {c.link && (
                      <span className="mt-4 text-sm text-[var(--color-accent)] font-semibold">
                        Learn More →
                      </span>
                    )}
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}