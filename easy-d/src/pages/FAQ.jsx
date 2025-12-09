import { useState } from "react";

export default function FAQ() {
  const items = [
    {
      q: "What does a dispatch service do?",
      a: "We book loads, negotiate rates, handle paperwork, and provide 24/7 support.",
    },
    {
      q: "How much do you charge?",
      a: "Pricing starts at 7% per load with Pro and Premium plans available.",
    },
    {
      q: "Do you force dispatch?",
      a: "Never. Drivers approve every load before booking.",
    },
    {
      q: "What equipment do you dispatch?",
      a: "Dry Van, Flatbed, Power-Only, Box Truck, and more.",
    },
    {
      q: "Do I need an MC number?",
      a: "Yes, you need active MC authority and insurance.",
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className="py-20 bg-[var(--color-primary)] text-white px-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h1>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-[var(--color-primary-softer)] border border-gray-700 rounded-lg"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-4 font-semibold flex items-center justify-between"
              >
                {item.q}
                <span className="text-[var(--color-accent)]">
                  {open === i ? "-" : "+"}
                </span>
              </button>

              {open === i && (
                <p className="px-6 pb-4 text-gray-300">{item.a}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}