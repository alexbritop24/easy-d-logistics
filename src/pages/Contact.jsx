import { useState } from "react";
import useSEO from "../hooks/useSEO";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

import contactHero from "../assets/dispatch-support-team.jpeg";

function encode(data) {
  return new URLSearchParams(data).toString();
}

export default function Contact() {
  useSEO({
    title: "Contact | Easy D Logistics",
    description:
      "Contact Easy D Logistics for 24/7 dispatch support. Tell us your equipment type, lanes, and start date — we respond fast.",
    path: "/contact",
    ogImage: "/EasyD.png",
  });

  const [status, setStatus] = useState({ type: "idle", message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    const formEl = e.currentTarget;
    const form = new FormData(formEl);

    const payload = {
      "form-name": "contact",
      name: form.get("name")?.toString().trim(),
      email: form.get("email")?.toString().trim(),
      phone: form.get("phone")?.toString().trim(),
      message: form.get("message")?.toString().trim(),
      company: form.get("company")?.toString().trim(), // honeypot
    };

    // Bot check
    if (payload.company) {
      formEl.reset();
      setStatus({ type: "success", message: "Message sent. We’ll reach out ASAP." });
      return;
    }

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });

      if (!res.ok) throw new Error("Failed to send message");

      formEl.reset();
      setStatus({ type: "success", message: "Message sent. We’ll reach out ASAP." });
    } catch (err) {
      setStatus({
        type: "error",
        message: err?.message || "Something went wrong. Try again.",
      });
    }
  }

  return (
    <main className="bg-[var(--color-primary)] text-white">
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${contactHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
              We’re here 24/7. Call us or send a message — we respond fast.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+13852928031"
              className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm hover:border-[var(--color-accent)] transition"
            >
              Phone: 385-292-8031
            </a>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm">
              Support: 24/7
            </span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT */}
          <div>
            <Reveal y={16}>
              <h2 className="text-2xl font-bold mb-4">Contact Easy D Logistics</h2>
            </Reveal>

            <Reveal y={16} delay={0.05}>
              <p className="text-white/75 leading-relaxed mb-8">
                Tell us what you haul, where you’re based, and what lanes you prefer.
                We’ll follow up with next steps that fit your operation.
              </p>
            </Reveal>

            <Reveal y={16} delay={0.08}>
              <div className="p-6 rounded-xl bg-[var(--color-primary-softer)] border border-white/10">
                <div className="text-sm text-white/70">Helpful info to include</div>
                <ul className="mt-3 space-y-2 text-white/80">
                  <li>• Equipment type</li>
                  <li>• Home base city/state</li>
                  <li>• Preferred lanes</li>
                  <li>• When you want to start</li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* FORM */}
          <Reveal y={18} delay={0.06}>
            <div className="p-6 rounded-xl bg-[var(--color-primary-softer)] border border-white/10">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="company"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />

                {/* Honeypot */}
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
                  className="w-full px-4 py-3 rounded-lg bg-[var(--color-primary)] border border-white/10 text-white placeholder:text-white/40 focus:border-[var(--color-accent)] outline-none"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--color-primary)] border border-white/10 text-white placeholder:text-white/40 focus:border-[var(--color-accent)] outline-none"
                />

                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--color-primary)] border border-white/10 text-white placeholder:text-white/40 focus:border-[var(--color-accent)] outline-none"
                />

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--color-primary)] border border-white/10 text-white placeholder:text-white/40 focus:border-[var(--color-accent)] outline-none"
                />

                <motion.button
                  type="submit"
                  disabled={status.type === "loading"}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.15 }}
                  className="w-full py-3 rounded-lg font-semibold bg-[var(--color-accent)] text-[var(--color-primary)] hover:opacity-90 disabled:opacity-60"
                >
                  {status.type === "loading" ? "Sending..." : "Send Message"}
                </motion.button>

                {status.type !== "idle" && (
                  <p
                    className={`text-sm ${
                      status.type === "success"
                        ? "text-green-300"
                        : "text-red-300"
                    }`}
                  >
                    {status.message}
                  </p>
                )}

                <p className="text-xs text-white/45">
                  This form securely emails submissions to info@easydlogistics.com.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}