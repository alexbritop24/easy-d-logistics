// src/pages/Contact.jsx
import { useState } from "react";
import useSEO from "../hooks/useSEO";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

import contactHero from "../assets/dispatch-support-team.jpeg";

export default function Contact() {
  useSEO({
    title: "Contact | Easy D Logistics",
    description:
      "Contact Easy D Logistics for 24/7 dispatch support. Tell us your equipment type, lanes, and start date — we respond fast.",
    path: "/contact",
    ogImage: "/EasyD.png",
  });

  // Address (single source of truth)
  const ADDRESS_DISPLAY = "370 W 400 N, Suite 9, Provo, UT 84601";
  const ADDRESS_MAPS_URL =
    "https://www.google.com/maps/search/?api=1&query=370%20W%20400%20N%20Suite%209%20Provo%20UT%2084601";

  const [status, setStatus] = useState({ type: "idle", message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name")?.toString().trim(),
      email: form.get("email")?.toString().trim(),
      message: form.get("message")?.toString().trim(),
      company: form.get("company")?.toString().trim(), // honeypot
    };

    try {
      const res = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed to send message");

      e.currentTarget.reset();
      setStatus({ type: "success", message: "Message sent. We’ll reach out ASAP." });
    } catch (err) {
      setStatus({
        type: "error",
        message: err?.message || "Something went wrong. Try again.",
      });
    }
  }

  const chips = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
  };

  const chipItem = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <main className="bg-[var(--color-primary)] text-white">
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${contactHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-[var(--color-primary)]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35" />

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16">
          <Reveal y={18}>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Contact Us
            </h1>
          </Reveal>

          <Reveal y={14} delay={0.05}>
            <p className="mt-4 text-white/85 text-lg max-w-2xl">
              We’re here to help 24/7. Reach out anytime — we respond fast and keep it simple.
            </p>
          </Reveal>

          {/* Quick chips */}
          <motion.div
            variants={chips}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <motion.a
              variants={chipItem}
              href="tel:+13852928031"
              className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm hover:border-[var(--color-accent)] transition"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
            >
              Phone: 385-292-8031
            </motion.a>

            <motion.a
              variants={chipItem}
              href={ADDRESS_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm hover:border-[var(--color-accent)] transition"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
              title="Open in Google Maps"
            >
              Address: {ADDRESS_DISPLAY}
            </motion.a>

            <motion.span
              variants={chipItem}
              className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm"
            >
              Support: 24/7
            </motion.span>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[var(--color-primary)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <Reveal y={16}>
              <h2 className="text-2xl font-bold mb-4">Talk to a Dispatcher</h2>
            </Reveal>

            <Reveal y={16} delay={0.05}>
              <p className="text-white/75 leading-relaxed mb-6">
                Tell us what you haul, where you’re based, and what lanes you prefer.
                We’ll reply with next steps and pricing that fits your operation.
              </p>
            </Reveal>

            {/* Address block (trust + clarity) */}
            <Reveal y={14} delay={0.07}>
              <a
                href={ADDRESS_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-start gap-2 text-white/75 hover:text-[var(--color-accent)] transition mb-8"
                title="Open in Google Maps"
              >
                <span className="text-white/60">📍</span>
                <span>
                  <span className="font-semibold text-white/80">Office:</span>{" "}
                  {ADDRESS_DISPLAY}
                </span>
              </a>
            </Reveal>

            <Reveal y={16} delay={0.08}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.18 }}
                className="p-6 rounded-xl bg-[var(--color-primary-softer)] border border-white/10"
              >
                <div className="text-sm text-white/70">What to include</div>
                <ul className="mt-3 space-y-2 text-white/80">
                  <li>• Equipment type (Dry Van / Flatbed / Hotshot / Reefer)</li>
                  <li>• Home base city/state</li>
                  <li>• Preferred lanes / regions</li>
                  <li>• When you want to start</li>
                </ul>
              </motion.div>
            </Reveal>
          </div>

          <Reveal y={18} delay={0.06}>
            <div className="p-6 rounded-xl bg-[var(--color-primary-softer)] border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  name="company"
                  type="text"
                  className="hidden"
                  tabIndex="-1"
                  autoComplete="off"
                />

                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--color-primary)] border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-[var(--color-accent)]"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--color-primary)] border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-[var(--color-accent)]"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--color-primary)] border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-[var(--color-accent)]"
                />

                <motion.button
                  type="submit"
                  disabled={status.type === "loading"}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.15 }}
                  className="w-full py-3 rounded-lg font-semibold bg-[var(--color-accent)] text-[var(--color-primary)] transition hover:opacity-90 disabled:opacity-60"
                >
                  {status.type === "loading" ? "Sending..." : "Send Message"}
                </motion.button>

                {status.type !== "idle" && (
                  <p
                    className={`text-sm ${
                      status.type === "success"
                        ? "text-green-300"
                        : status.type === "error"
                        ? "text-red-300"
                        : "text-white/70"
                    }`}
                  >
                    {status.message}
                  </p>
                )}

                <p className="text-xs text-white/45">
                  Note: This form sends email via our secure serverless function.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}