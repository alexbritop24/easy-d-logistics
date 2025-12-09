export default function Pricing() {
  const plans = [
    {
      title: "Starter",
      price: "7% per load",
      features: [
        "Load Booking",
        "Rate Negotiation",
        "Carrier Packets",
        "24/7 Support",
      ],
    },
    {
      title: "Pro",
      price: "8% per load",
      features: [
        "Everything in Starter",
        "Factoring Assistance",
        "Route Optimization",
        "Weekly Reports",
      ],
      highlight: true,
    },
    {
      title: "Premium",
      price: "10% per load",
      features: [
        "Everything in Pro",
        "Full Compliance Support",
        "Back Office Services",
        "Dedicated Dispatcher",
      ],
    },
  ];

  return (
    <section className="py-20 bg-[var(--color-primary-softer)] text-white px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-12">Pricing Plans</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`p-6 rounded-xl border ${
                plan.highlight
                  ? "border-[var(--color-accent)] shadow-[0_0_15px_var(--color-accent)]"
                  : "border-gray-600"
              } bg-[var(--color-primary)]`}
            >
              <h2 className="text-2xl font-semibold mb-2">{plan.title}</h2>
              <p className="text-[var(--color-accent)] text-xl font-bold mb-4">{plan.price}</p>

              <ul className="text-gray-300 text-sm space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>

              <a
                href="/get-started"
                className="block text-center py-2 rounded-lg bg-[var(--color-accent)] text-black font-semibold hover:bg-green-400 transition"
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}