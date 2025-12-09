export default function Services() {
  const servicesList = [
    {
      title: "Dry Van Dispatch",
      description:
        "Reliable, consistent dispatching for Dry Van carriers, including load planning, negotiation, and optimized routing.",
    },
    {
      title: "Flatbed Dispatch",
      description:
        "Specialized dispatching for flatbeds — including securement requirements, higher-rate loads, and tarping considerations.",
    },
    {
      title: "Power-Only Dispatch",
      description:
        "We manage drop-and-hook, trailer moves, and spot power-only freight to keep you moving with minimal downtime.",
    },
    {
      title: "Box Truck Dispatch",
      description:
        "High-demand dispatching for box trucks with regional and national load opportunities.",
    },
    {
      title: "Paperwork & Compliance",
      description:
        "Carrier packets, rate confirmations, invoicing, BOL management, compliance documents, and factoring assistance.",
    },
    {
      title: "Broker Negotiation",
      description:
        "We negotiate strong rates, understand market trends, and ensure fair agreements with trusted brokers.",
    },
  ];

  return (
    <section className="bg-primary text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-12">
          Easy D Logistics Services
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {servicesList.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-xl bg-primary-light border border-slate-700"
            >
              <h2 className="text-2xl font-semibold text-accent mb-2">
                {service.title}
              </h2>
              <p className="text-slate-300 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}