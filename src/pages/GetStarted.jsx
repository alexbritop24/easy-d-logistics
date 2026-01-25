// src/pages/GetStarted.jsx
import { useState } from "react";
import useSEO from "../hooks/useSEO";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

export default function GetStarted() {
  useSEO({
    title: "Get Started | Easy D Logistics",
    description:
      "Start dispatching with Easy D Logistics. Submit your equipment type, lanes, MC info, and revenue goal — we’ll reach out fast.",
    path: "/get-started",
    ogImage: "/EasyD.png",
  });

  // Address (single source of truth)
  const ADDRESS_DISPLAY = "370 W 400 N, Suite 9, Provo, UT 84601";
  const ADDRESS_MAPS_URL =
    "https://www.google.com/maps/search/?api=1&query=370%20W%20400%20N%20Suite%209%20Provo%20UT%2084601";

  const [status, setStatus] = useState({ type: "idle", message: "" });

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    mcNumber: "",
    truckType: "",
    equipment: "",
    regions: "",
    revenueGoal: "",
    company: "", // honeypot
  });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    // If bot filled honeypot, silently succeed (no email)
    if (form.company?.trim()) {
      setStatus({ type: "success", message: "Submitted. We’ll reach out ASAP." });
      return;
    }

    const message = `
Get Started Lead

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
MC Number: ${form.mcNumber || "N/A"}
Truck Type: ${form.truckType}
Equipment: ${form.equipment}
Preferred Regions: ${form.regions}
Weekly Revenue Goal: ${form.revenueGoal}
`.trim();

    const payload = {
      name: form.name?.trim(),
      email: form.email?.trim(),
      message,
      company: form.company?.trim(), // honeypot
    };

    try {
      const res = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed to submit form");

      setForm({
        name: "",
        phone: "",
        email: "",
        mcNumber: "",
        truckType: "",
        equipment: "",
        regions: "",
        revenueGoal: "",
        company: "",
      });

      setStatus({ type: "success", message: "Submitted. We’ll reach out ASAP." });
    } catch (err) {
      setStatus({
        type: "error",
        message: err?.message || "Something went wrong. Try again.",
      });
    }
  }

  const fields = [
    { label: "Full Name", name: "name", type: "text", required: true },
    { label: "Phone", name: "phone", type: "tel", required: true },
    { label: "Email", name: "email", type: "email", required: true },
    { label: "MC Number (optional)", name: "mcNumber", type: "text", required: false },
    { label: "Truck Type", name: "truckType", type: "text", required: true },
    { label: "Equipment", name: "equipment", type: "text", required: true },
    { label: "Preferred Regions", name: "regions", type: "text", required: true },
    { label: "Weekly Revenue Goal", name: "revenueGoal", type: "text", required: true },
  ];

  return (
    <section className="py-20 bg-[var(--color-primary)] text-white px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal y={18}>
          <h1 className="text-4xl font-bold text-center mb-4">Get Started</h1>
        </Reveal>

        <Reveal y={14} delay={0.05}>
          <p className="text-center text-white/75 max-w-2xl mx-auto mb-10">
            Share your equipment, lanes, and goal. We’ll respond fast and get you moving.
          </p>
        </Reveal>

        <Reveal y={18} delay={0.08}>
          <form
            onSubmit={submit}
            className="
              p-8
              bg-[var(--color-primary-softer)]
              rounded-xl
              border border-white/15
              space-y-6
            "
          >
            {/* Honeypot */}
            <input
              name="company"
              type="text"
              value={form.company}
              onChange={update}
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
            />

            {fields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm mb-1 text-white/80">
                  {field.label}
                </label>

                <input
                  name={field.name}
                  type={field.type}
                  value={form[field.name]}
                  onChange={update}
                  required={field.required}
                  placeholder={field.label}
                  className="
                    w-full px-4 py-3 rounded-lg
                    bg-[var(--color-primary)]
                    border border-white/20
                    focus:border-[var(--color-accent)]
                    outline-none
                    text-white placeholder-white/40
                    transition
                  "
                />
              </div>
            ))}

            <motion.button
              type="submit"
              disabled={status.type === "loading"}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
              className="
                w-full py-3 rounded-lg font-semibold
                bg-[var(--color-accent)]
                text-[var(--color-primary)]
                transition hover:opacity-90
                disabled:opacity-60
              "
            >
              {status.type === "loading" ? "Submitting..." : "Submit Information"}
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

            <div className="pt-2 text-center text-sm text-white/60">
              Or call anytime:{" "}
              <a
                href="tel:+13852928031"
                className="text-[var(--color-accent)] hover:opacity-90 transition"
              >
                385-292-8031
              </a>
              <span className="mx-2 text-white/35">•</span>
              <a
                href={ADDRESS_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-[var(--color-accent)] transition"
                title="Open in Google Maps"
              >
                {ADDRESS_DISPLAY}
              </a>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}