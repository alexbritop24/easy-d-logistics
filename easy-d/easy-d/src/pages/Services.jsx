export default function Services() {
  const servicesList = [
    {
      title: "Dry Van Dispatch",
      description: "Consistent, high-demand freight with optimized routes.",
    },
    {
      title: "Flatbed Dispatch",
      description: "Specialized freight with higher RPM and careful planning.",
    },
    {
      title: "Power-Only Dispatch",
      description: "Drop-and-hook setups with minimal downtime.",
    },
    {
      title: "Box Truck Dispatch",
      description: "Local and regional freight options with steady availability.",
    },
    {
      title: "Paperwork & Compliance",
      description: "Carrier packets, rate confirmations, invoicing, and more.",
    },
    {
      title: "Broker Negotiation",
      description: "Professional negotiation for the best possible load rates.",
    },
  ];

  return (
    <section className="py-20 bg-[var(--color-primary)] text-white px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {servicesList.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-[var(--color-primary-softer)] rounded-xl border border-[var(--color-accent)]"
            >
              <h2 className="text-2xl font-bold text-[var(--color-accent)]">{service.title}</h2>
              <p className="mt-2 text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}