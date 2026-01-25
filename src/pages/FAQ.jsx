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
    ogImage: "/EasyD.png",
  });

  // Address (single source of truth)
  const ADDRESS_DISPLAY = "370 W 400 N, Suite 9, Provo, UT 84601";
  const ADDRESS_MAPS_URL =
    "https://www.google.com/maps/search/?api=1&query=370%20W%20400%20N%20Suite%209%20Provo%20UT%2084601";

  const items = [
    {
      q: "What does a dispatch service do?",
      a: "We book loads, negotiate rates, handle paperwork, and provide 24/7 support.",
    },
    {
      q: "How much do you charge?",
      a: "Pricing starts at 6% per load with Pro and Premium plans available.",
    },
    {
      q: "Do you force dispatch?",
      a: "Never. Drivers approve every load before booking.",
    },
    {
      q: "What equipment do you dispatch?",
      a: "Dry Van, Flatbed, Hotshot, Reefer, and more.",
    },
    {
      q: "Do I need an MC number?",
      a: "Yes, you need active MC authority and insurance.",
    },
  ];

  const [open, setOpen] = useState(null);
  const baseId = useId();

  return (
    <section className="py-20 bg-[var(--color-primary)] text-white px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal y={18}>
          <h1 className="text-4xl font-bold mb-6 text-center">
            Frequently Asked Questions
          </h1>
        </Reveal>

        <Reveal y={14} delay={0.05}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <a
              href="tel:+13852928031"
              className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm hover:border-[var(--color-accent)] transition"
            >
              Phone: 385-292-8031
            </a>

            <a
              href={ADDRESS_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm hover:border-[var(--color-accent)] transition"
              title="Open in Google Maps"
            >
              Address: {ADDRESS_DISPLAY}
            </a>
          </div>
        </Reveal>

        <div className="space-y-4">
          {items.map((item, i) => {
            const isOpen = open === i;
            const buttonId = `${baseId}-faq-btn-${i}`;
            const panelId = `${baseId}-faq-panel-${i}`;

            return (
              <Reveal key={i} y={14} delay={0.03 * i}>
                <div className="bg-[var(--color-primary-softer)] border border-white/15 rounded-lg overflow-hidden">
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left px-6 py-4 font-semibold flex items-center justify-between"
                  >
                    <span>{item.q}</span>

                    <motion.span
                      className="text-[var(--color-accent)] text-xl"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.15 }}
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
                        transition={{ duration: 0.2 }}
                        className="px-6 pb-4 text-white/75 overflow-hidden"
                      >
                        <p>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal y={18} delay={0.18}>
          <div className="mt-12 text-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-[var(--color-accent)] text-[var(--color-primary)] transition hover:opacity-90"
            >
              Talk to a Dispatcher
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}