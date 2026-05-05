import { useState } from "react";
import useSEO from "../hooks/useSEO";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

function encode(data) {
  return new URLSearchParams(data).toString();
}

export default function GetStarted() {
  useSEO({
    title: "Get Started With Truck Dispatch & Compliance | Easy D Logistics",
    description:
      "Start with Easy D Logistics for truck dispatch services, DOT compliance support, MC setup help, load booking, paperwork, and broker coordination.",
    path: "/get-started",
    ogImage: "/easy-d-logo.png",
  });

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
    company: "",
  });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    if (form.company?.trim()) {
      setStatus({ type: "success", message: "Submitted. We’ll reach out ASAP." });
      return;
    }

    const payload = {
      "form-name": "get-started",
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      mcNumber: form.mcNumber.trim(),
      truckType: form.truckType.trim(),
      equipment: form.equipment.trim(),
      regions: form.regions.trim(),
      revenueGoal: form.revenueGoal.trim(),
      company: form.company.trim(),
    };

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });

      if (!res.ok) throw new Error("Failed to submit form");

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
    <main className="bg-[var(--color-primary)] text-white">
      <section className="px-6 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal y={18}>
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/75">
              Start Dispatch Or Compliance Support
            </div>
          </Reveal>

          <Reveal y={18} delay={0.04}>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Get Started With
              <span className="block text-[var(--color-accent)]">
                Easy D Logistics
              </span>
            </h1>
          </Reveal>

          <Reveal y={14} delay={0.08}>
            <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Share your truck details, equipment, MC information, lanes, and goals.
              We’ll review your information and help with the next step for dispatch,
              DOT compliance, or MC setup support.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <Reveal y={18} delay={0.08}>
            <div className="rounded-3xl border border-white/10 bg-[var(--color-primary-softer)] p-7 md:p-10 shadow-[var(--shadow-card)]">
              <form
                name="get-started"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="company"
                onSubmit={submit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="get-started" />

                <input
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={update}
                  className="hidden"
                  tabIndex="-1"
                  autoComplete="off"
                />

                <div className="grid sm:grid-cols-2 gap-5">
                  {fields.slice(0, 2).map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm mb-2 text-white/72">
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
                          w-full px-4 py-3 rounded-xl
                          bg-[var(--color-primary)]
                          border border-white/10
                          focus:border-[var(--color-accent)]
                          outline-none
                          text-white placeholder-white/35
                          transition
                        "
                      />
                    </div>
                  ))}
                </div>

                {fields.slice(2).map((field, index) => {
                  if (index === 0 || index === 5) {
                    return (
                      <div key={field.name}>
                        <label className="block text-sm mb-2 text-white/72">
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
                            w-full px-4 py-3 rounded-xl
                            bg-[var(--color-primary)]
                            border border-white/10
                            focus:border-[var(--color-accent)]
                            outline-none
                            text-white placeholder-white/35
                            transition
                          "
                        />
                      </div>
                    );
                  }

                  return null;
                })}

                <div className="grid sm:grid-cols-2 gap-5">
                  {fields.slice(3, 5).map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm mb-2 text-white/72">
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
                          w-full px-4 py-3 rounded-xl
                          bg-[var(--color-primary)]
                          border border-white/10
                          focus:border-[var(--color-accent)]
                          outline-none
                          text-white placeholder-white/35
                          transition
                        "
                      />
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {fields.slice(5, 7).map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm mb-2 text-white/72">
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
                          w-full px-4 py-3 rounded-xl
                          bg-[var(--color-primary)]
                          border border-white/10
                          focus:border-[var(--color-accent)]
                          outline-none
                          text-white placeholder-white/35
                          transition
                        "
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-sm mb-2 text-white/72">
                    {fields[7].label}
                  </label>

                  <input
                    name={fields[7].name}
                    type={fields[7].type}
                    value={form[fields[7].name]}
                    onChange={update}
                    required={fields[7].required}
                    placeholder={fields[7].label}
                    className="
                      w-full px-4 py-3 rounded-xl
                      bg-[var(--color-primary)]
                      border border-white/10
                      focus:border-[var(--color-accent)]
                      outline-none
                      text-white placeholder-white/35
                      transition
                    "
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status.type === "loading"}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.15 }}
                  className="
                    w-full py-3.5 rounded-xl font-semibold
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
                      status.type === "success" ? "text-green-300" : "text-red-300"
                    }`}
                  >
                    {status.message}
                  </p>
                )}

                <div className="pt-2 text-center text-sm text-white/58 leading-relaxed">
                  Or call anytime:{" "}
                  <a
                    href="tel:+13852928031"
                    className="text-[var(--color-accent)] hover:opacity-90 transition"
                  >
                    385-292-8031
                  </a>
                  <span className="mx-2 text-white/25">•</span>
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
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}