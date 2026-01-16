// src/pages/Pricing.jsx
export default function Pricing() {
  const plans = [
    {
      title: "Starter",
      price: "6% per load",
      features: ["Load Booking", "Rate Negotiation", "Carrier Packets", "24/7 Support"],
    },
    {
      title: "Pro",
      price: "7% per load",
      features: ["Everything in Starter", "Factoring Assistance", "Route Optimization", "Weekly Reports"],
      highlight: true, // Only used to show the "Recommended" badge
    },
    {
      title: "Premium",
      price: "8% per load",
      features: ["Everything in Pro", "Paperwork Support", "Back Office Services", "Dedicated Dispatcher"],
    },
  ];

  // ✅ Same styling for ALL cards (border + glow)
  const cardClass =
    "p-6 rounded-xl bg-[var(--color-primary)] border border-white/20 " +
    "shadow-[0_0_22px_rgba(255,255,255,0.10)] " +
    "transition hover:shadow-[0_0_30px_rgba(255,255,255,0.14)] " +
    "flex flex-col";

  return (
    <section className="py-20 bg-[var(--color-primary-softer)] text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Pricing Plans</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.title} className={cardClass}>
              {/* Title row + Recommended badge (only for Pro) */}
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-semibold">{plan.title}</h2>

                {plan.highlight && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-accent)] text-[var(--color-primary)]">
                    Recommended
                  </span>
                )}
              </div>

              <p className="text-[var(--color-accent)] text-xl font-bold mb-4">
                {plan.price}
              </p>

              <ul className="text-white/80 text-sm space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>

              {/* Push button to bottom so heights stay even */}
              <a
                href="/get-started"
                className="
                  mt-auto
                  block text-center py-2 rounded-lg font-semibold
                  bg-[var(--color-accent)] text-[var(--color-primary)]
                  transition hover:opacity-90
                "
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>

        {/* Fleet note */}
        <p className="mt-10 text-center text-white/70 text-sm md:text-base">
          Have more than one truck? We can help you too — contact us for fleet support.
        </p>
      </div>
    </section>
  );
}