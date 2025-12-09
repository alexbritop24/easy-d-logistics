const services = [
  {
    title: "Dispatching Services",
    description:
      "24/7 dispatch support, load search, rate negotiation, paperwork management, and route planning.",
  },
  {
    title: "Freight Management Software",
    description:
      "Track loads, revenue, documents, and expenses in real time with the Easy D dashboard.",
  },
  {
    title: "Back Office Support",
    description:
      "Carrier packets, invoicing, factoring assistance, compliance documents, and more.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-primary py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-xl border border-slate-700 bg-primary-light"
            >
              <h3 className="text-xl font-semibold text-accent mb-3">
                {service.title}
              </h3>
              <p className="text-slate-300 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}