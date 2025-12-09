export default function Pricing() {
  const pricingPlans = [
    {
      title: "Starter",
      price: "7% per load",
      features: [
        "Load Booking",
        "Rate Negotiation",
        "Carrier Packets",
        "24/7 Support",
      ],
      highlight: false,
    },
    {
      title: "Pro",
      price: "8% per load",
      features: [
        "Everything in Starter",
        "Factoring Assistance",
        "Route Optimization",
        "Weekly Performance Reports",
      ],
      highlight: true,
    },
    {
      title: "Premium",
      price: "10% per load",
      features: [
        "Everything in Pro",
        "Compliance Management",
        "Back Office Support",
        "Dedicated Dispatcher",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="bg-primary text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-12">
          Pricing Plans
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.title}
              className={`p-6 rounded-xl border ${
                plan.highlight
                  ? "border-accent bg-primary-light/80 shadow-lg shadow-accent/20"
                  : "border-slate-700 bg-primary-light"
              }`}
            >
              <h2 className="text-2xl font-semibold mb-2">{plan.title}</h2>
              <p className="text-accent text-xl font-bold mb-4">
                {plan.price}
              </p>

              <ul className="text-slate-300 text-sm space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>

              <button
                className={`w-full py-2 rounded-full font-semibold transition ${
                  plan.highlight
                    ? "bg-accent text-primary-softer hover:bg-accent-soft"
                    : "border border-slate-500 hover:border-accent hover:text-accent"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}