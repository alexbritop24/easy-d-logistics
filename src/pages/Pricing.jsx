export default function Pricing() {
  const plans = [
    {
      title: "Starter",
      price: "7% per load",
      features: ["Load Booking", "Rate Negotiation", "Carrier Packets", "24/7 Support"],
    },
    {
      title: "Pro",
      price: "8% per load",
      features: ["Everything in Starter", "Factoring Assistance", "Route Optimization", "Weekly Reports"],
      highlight: true,
    },
    {
      title: "Premium",
      price: "10% per load",
      features: ["Everything in Pro", "Full Compliance Support", "Back Office Services", "Dedicated Dispatcher"],
    },
  ];

  return (
    <section className="py-20 bg-[var(--color-primary-softer)] text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Pricing Plans</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const baseGlow =
              "shadow-[0_0_18px_rgba(255,255,255,0.08)] border-white/15 hover:shadow-[0_0_28px_rgba(255,255,255,0.12)]";
            const proGlow =
              "shadow-[0_0_30px_rgba(255,255,255,0.14)] border-[var(--color-accent)] hover:shadow-[0_0_40px_rgba(255,255,255,0.18)]";

            return (
              <div
                key={plan.title}
                className={`
                  p-6 rounded-xl bg-[var(--color-primary)]
                  border transition
                  ${plan.highlight ? proGlow : baseGlow}
                `}
              >
                <h2 className="text-2xl font-semibold mb-2">{plan.title}</h2>

                <p className="text-[var(--color-accent)] text-xl font-bold mb-4">
                  {plan.price}
                </p>

                <ul className="text-white/80 text-sm space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>

                <a
                  href="/get-started"
                  className="
                    block text-center py-2 rounded-lg font-semibold
                    bg-[var(--color-accent)] text-[var(--color-primary)]
                    transition hover:opacity-90
                  "
                >
                  Choose Plan
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}