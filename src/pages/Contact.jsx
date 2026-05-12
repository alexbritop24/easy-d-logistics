import { useState } from "react";
import useSEO from "../hooks/useSEO";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

import contactHero from "../assets/dispatch-support-team.jpeg";

export default function Contact() {
  useSEO({
    title: "Contact | Easy D Logistics",
    description:
      "Contact Easy D Logistics for dispatch, DOT compliance, and MC setup support. Based in Provo, Utah and serving owner-operators nationwide.",
    path: "/contact",
    ogImage: "/easy-d-logo.png",
  });

  const [status, setStatus] = useState({ type: "idle", message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    const formEl = e.currentTarget;
    const form = new FormData(formEl);

    const payload = {
      full_name: form.get("name")?.toString().trim() || "",
      email: form.get("email")?.toString().trim() || "",
      phone: form.get("phone")?.toString().trim() || "",
      company_name: "",
      service_interest: "General contact / dispatch inquiry",
      message: form.get("message")?.toString().trim() || "",
      source: "Website - Contact Page",
      page_url: window.location.href,
      company: form.get("company")?.toString().trim() || "",
    };

    if (payload.company) {
      formEl.reset();
      setStatus({
        type: "success",
        message: "Message sent. We’ll reach out ASAP.",
      });
      return;
    }

    try {
      const res = await fetch("/.netlify/functions/lead-capture", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to send message");

      formEl.reset();
      setStatus({
        type: "success",
        message: "Message sent. We’ll reach out ASAP.",
      });
    } catch (err) {
      setStatus({
        type: "error",
        message: err?.message || "Something went wrong. Try again.",
      });
    }
  }

  const helpfulItems = [
    "Equipment type",
    "Home base city/state",
    "Preferred lanes",
    "When you want to start",
  ];

  return (
    <main className="bg-[var(--color-primary)] text-white">
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${contactHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-[var(--color-primary)]/78" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[var(--color-primary)]/15 to-black/45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(143,199,238,0.12),transparent_38%)]" />

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-18 md:pt-28 md:pb-20">
          <Reveal y={18}>
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-white/75">
              24/7 Dispatch Support
            </div>
          </Reveal>

          <Reveal y={18} delay={0.04}>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl">
              Let’s Talk About
              <span className="block text-[var(--color-accent)]">
                Your Dispatch Needs
              </span>
            </h1>
          </Reveal>

          <Reveal y={14} delay={0.08}>
            <p className="mt-5 text-white/82 text-base md:text-lg max-w-2xl leading-relaxed">
              We’re here 24/7. Call us or send a message and we’ll help you find
              the right next step for your truck or fleet.
            </p>
          </Reveal>

          <Reveal y={14} delay={0.12}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+13852928031"
                className="px-4 py-2 rounded-full bg-white/10 border border-white/12 text-sm text-white/85 hover:border-[var(--color-accent)] transition"
              >
                Phone: 385-292-8031
              </a>

              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/12 text-sm text-white/85">
                Support: 24/7
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-18 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[0.95fr_1.05fr] gap-8 md:gap-10 items-start">
          {/* LEFT */}
          <div className="space-y-6">
            <Reveal y={16}>
              <div className="rounded-2xl border border-white/10 bg-[var(--color-primary-softer)] p-7 shadow-[var(--shadow-card)]">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Contact Easy D Logistics
                </h2>

                <p className="text-white/74 leading-relaxed">
                  Tell us what you haul, where you’re based, and what lanes you
                  prefer. We’ll follow up with next steps that fit your operation.
                </p>
              </div>
            </Reveal>

            <Reveal y={16} delay={0.05}>
              <div className="rounded-2xl border border-white/10 bg-[var(--color-primary-softer)] p-7 shadow-[var(--shadow-card)]">
                <div className="text-sm uppercase tracking-[0.18em] text-white/45 mb-4">
                  Helpful Info To Include
                </div>

                <ul className="space-y-3">
                  {helpfulItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/78">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal y={16} delay={0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.18 }}
                className="rounded-2xl border border-[var(--color-border-strong)] bg-white/[0.03] p-7 shadow-[var(--shadow-accent)]"
              >
                <h3 className="text-xl font-semibold text-[var(--color-accent)] mb-2">
                  Fast, direct communication
                </h3>

                <p className="text-white/72 leading-relaxed text-sm md:text-base">
                  We keep the process simple, responsive, and professional so you
                  know what to expect from the start.
                </p>
              </motion.div>
            </Reveal>
          </div>

          {/* FORM */}
          <Reveal y={18} delay={0.06}>
            <div className="rounded-2xl border border-white/10 bg-[var(--color-primary-softer)] p-7 md:p-8 shadow-[var(--shadow-card)]">
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  name="company"
                  type="text"
                  className="hidden"
                  tabIndex="-1"
                  autoComplete="off"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-primary)] border border-white/10 text-white placeholder:text-white/35 focus:border-[var(--color-accent)] outline-none transition"
                  />

                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-primary)] border border-white/10 text-white placeholder:text-white/35 focus:border-[var(--color-accent)] outline-none transition"
                  />
                </div>

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-primary)] border border-white/10 text-white placeholder:text-white/35 focus:border-[var(--color-accent)] outline-none transition"
                />

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell us about your truck, lanes, and what kind of dispatch support you need"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-primary)] border border-white/10 text-white placeholder:text-white/35 focus:border-[var(--color-accent)] outline-none transition resize-none"
                />

                <motion.button
                  type="submit"
                  disabled={status.type === "loading"}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.15 }}
                  className="w-full py-3.5 rounded-xl font-semibold bg-[var(--color-accent)] text-[var(--color-primary)] hover:opacity-90 disabled:opacity-60 transition"
                >
                  {status.type === "loading" ? "Sending..." : "Send Message"}
                </motion.button>

                {status.type !== "idle" && (
                  <p
                    className={`text-sm ${
                      status.type === "success" ? "text-green-300" : "text-red-300"
                    }`}
                  >
                    {status.message}
                  </p>
                )}

                <p className="text-xs text-white/42 leading-relaxed">
                  This form securely sends your message to the Easy D Logistics
                  team for follow-up.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <Reveal y={18}>
            <div className="rounded-3xl border border-white/10 bg-[var(--color-primary-softer)] p-6 md:p-8 shadow-[var(--shadow-card)] overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                <div>
                  <div className="text-sm uppercase tracking-[0.18em] text-white/42">
                    Visit Our Office
                  </div>

                  <h2 className="mt-2 text-2xl md:text-3xl font-bold">
                    Easy D Logistics in Provo, Utah
                  </h2>

                  <p className="mt-3 text-white/70 leading-relaxed">
                    370 W 400 N, Suite 9, Provo, UT 84601
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=370+W+400+N+Suite+9+Provo+UT+84601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center
                    px-6 py-3 rounded-xl font-semibold
                    border border-white/15 text-white
                    hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                    transition
                  "
                >
                  Open in Google Maps
                </a>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/20">
                <iframe
                  title="Easy D Logistics Google Map"
                  src="https://www.google.com/maps?q=370%20W%20400%20N%20Suite%209%20Provo%20UT%2084601&output=embed"
                  className="w-full h-[320px] md:h-[420px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}