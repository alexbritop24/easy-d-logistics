export default function ServicesOverview() {
  const cards = [
    {
      title: "Dry Van Dispatch",
      desc: "Consistent, high-demand freight with optimized routes.",
    },
    {
      title: "Flatbed Dispatch",
      desc: "Specialized freight with higher RPM and careful planning.",
    },
    {
      title: "Power-Only Dispatch",
      desc: "Drop-and-hook setups with minimal downtime.",
    },
    {
      title: "Box Truck Dispatch",
      desc: "Local and regional freight options with steady availability.",
    },
    {
      title: "Paperwork & Compliance",
      desc: "Carrier packets, rate confirmations, invoicing, and more.",
    },
    {
      title: "Broker Negotiation",
      desc: "Professional negotiation for the best possible load rates.",
    },
  ];

  return (
    <section className="bg-[var(--color-primary)] text-white py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Dispatch Services
        </h2>

        {/* Equal-height cards + consistent rhythm */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {cards.map((c) => (
            <div
              key={c.title}
              className="
                h-full
                p-6 md:p-8
                bg-[var(--color-primary-softer)]
                rounded-2xl
                border border-white/15
                transition
                hover:border-[var(--color-accent)]
                hover:shadow-[0_0_0_1px_var(--color-accent)]
              "
            >
              {/* Keep title block height consistent even when wrapping */}
              <div className="min-h-[56px] flex items-center justify-center">
                <h3 className="text-xl font-semibold text-center leading-snug">
                  {c.title}
                </h3>
              </div>

              <p className="mt-3 text-white/70 leading-relaxed text-center">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}