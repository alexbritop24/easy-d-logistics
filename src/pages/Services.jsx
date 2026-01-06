// src/pages/Services.jsx
import warehouseHero from "../assets/warehouse-aerial-2.jpeg";
import driverTablet from "../assets/driver-tablet.jpeg";

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
    <>
      {/* HERO IMAGE */}
      <section
        className="relative py-20 text-white"
        style={{
          backgroundImage: `url(${warehouseHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[var(--color-primary)]/80" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Dispatch Services
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Built to keep your trucks moving, profitable, and stress-free.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-[var(--color-primary)] text-white py-14 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {servicesList.map((service) => (
              <div
                key={service.title}
                className="
                  p-6 md:p-8
                  bg-[var(--color-primary-softer)]
                  rounded-2xl
                  border
                  border-white/15
                  transition
                  hover:border-[var(--color-accent)]
                "
              >
                <h2 className="text-xl font-semibold mb-2 text-center">
                  {service.title}
                </h2>
                <p className="text-white/70 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* VISUAL BREAK / SUPPORT IMAGE */}
      <section className="bg-[var(--color-primary)] py-14 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <img
            src={driverTablet}
            alt="Dispatcher managing loads on tablet"
            className="rounded-2xl w-full object-cover"
          />

          <div className="text-white">
            <h2 className="text-3xl font-bold mb-4">
              Technology-Driven Dispatching
            </h2>
            <p className="text-white/75 leading-relaxed">
              We combine real-time communication, broker negotiation, and
              back-office support to give owner-operators a competitive edge —
              without distractions.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}