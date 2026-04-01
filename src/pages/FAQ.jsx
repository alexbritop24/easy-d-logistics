// src/pages/FAQ.jsx
import { useState, useId } from "react";
import useSEO from "../hooks/useSEO";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";

export default function FAQ() {
  useSEO({
    title: "FAQ | Easy D Logistics",
    description:
      "Frequently asked questions about Easy D Logistics dispatch services: pricing, equipment types, MC requirements, and how dispatching works.",
    path: "/faq",
    ogImage: "/easy-d-logo.png",
  });

  const ADDRESS_DISPLAY = "370 W 400 N, Suite 9, Provo, UT 84601";
  const ADDRESS_MAPS_URL =
    "https://www.google.com/maps/search/?api=1&query=370%20W%20400%20N%20Suite%209%20Provo%20UT%2084601";

  const items = [
    {
      q: "What does a dispatch service do?",
      a: "We book loads, negotiate rates, handle paperwork, and provide 24/7 support so you can focus on driving.",
    },
    {
      q: "How much do you charge?",
      a: "Pricing starts at 6% per load, with Pro and Premium options depending on the level of support you need.",
    },
    {
      q: "Do you force dispatch?",
      a: "No. You always approve every load before we book anything on your behalf.",
    },
    {
      q: "What equipment do you dispatch?",
      a: "We work with Dry Van, Flatbed, Hotshot, Reefer, and other equipment types.",
    },
    {
      q: "Do I need an MC number?",
      a: "Yes. You need an active MC authority and valid insurance to work with us.",
    },
  ];

  const [open, setOpen] = useState(null);
  const baseId = useId();

  return (
    <main className="bg-[var(--color-primary)] text-white">
      {/* HEADER */}
      <section className="px-6 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal y={18}>
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/75">
              Frequently Asked Questions
            </div>
          </Reveal>

          <Reveal y={18} delay={0.04}>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Everything You Need
              <span className="block text-[var(--color-accent)]">
                To Know
              </span>
            </h1>
          </Reveal>

          <Reveal y={14} delay={0.08}>
            <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Clear answers about how our dispatch service works, pricing,
              requirements, and what to expect when working with us.
            </p>
          </Reveal>

          <Reveal y={14} delay={0.12}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:+13852928031"
                className="px-4 py-2 rounded-full bg-white/10 border border-white/12 text-sm text-white/85 hover:border-[var(--color-accent)] transition"
              >
                Phone: 385-292-8031
              </a>

              <a
                href={ADDRESS_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-white/10 border border-white/12 text-sm text-white/85 hover:border-[var(--color-accent)] transition"
              >
                Address: {ADDRESS_DISPLAY}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ LIST */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto space-y-4">
          {items.map((item, i) => {
            const isOpen = open === i;
            const buttonId = `${baseId}-faq-btn-${i}`;
            const panelId = `${baseId}-faq-panel-${i}`;

            return (
              <Reveal key={i} y={14} delay={0.03 * i}>
                <div className="rounded-2xl border border-white/10 bg-[var(--color-primary-softer)] shadow-[var(--shadow-card)] overflow-hidden">
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left px-6 py-5 font-semibold flex items-center justify-between"
                  >
                    <span className="text-base md:text-lg">
                      {item.q}
                    </span>

                    <motion.span
                      className="text-[var(--color-accent)] text-xl"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isOpen ? "−" : "+"}
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="px-6 pb-5 text-white/72 overflow-hidden"
                      >
                        <p className="leading-relaxed">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <Reveal y={18} delay={0.12}>
        <section className="px-6 pb-20">
          <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-[var(--color-primary-softer)] px-8 py-10 md:px-10 md:py-12 shadow-[var(--shadow-card)] text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
              Still Have Questions?
              <span className="block text-[var(--color-accent)]">
                Let’s Talk
              </span>
            </h2>

            <p className="mt-4 text-white/74 max-w-xl mx-auto">
              Reach out and we’ll walk you through everything so you can get started
              with confidence.
            </p>

            <a
              href="/contact"
              className="mt-6 inline-flex items-center justify-center px-7 py-3 rounded-xl font-semibold bg-[var(--color-accent)] text-[var(--color-primary)] hover:opacity-90 transition"
            >
              Contact Us
            </a>
          </div>
        </section>
      </Reveal>
    </main>
  );
}