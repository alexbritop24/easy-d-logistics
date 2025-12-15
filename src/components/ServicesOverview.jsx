export default function ServicesOverview() {
  return (
    <section className="py-24 bg-[var(--color-primary)] text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Dispatch Services
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div
            className="
              p-8
              bg-[var(--color-primary-softer)]
              rounded-xl
              border
              border-white/15
              transition
              hover:border-[var(--color-accent)]
            "
          >
            <h3 className="text-xl font-semibold mb-2">
              Dry Van
            </h3>
            <p className="text-white/70 leading-relaxed">
              Consistent loads, high demand lanes.
            </p>
          </div>

          <div
            className="
              p-8
              bg-[var(--color-primary-softer)]
              rounded-xl
              border
              border-white/15
              transition
              hover:border-[var(--color-accent)]
            "
          >
            <h3 className="text-xl font-semibold mb-2">
              Flatbed
            </h3>
            <p className="text-white/70 leading-relaxed">
              Specialized freight with higher RPM.
            </p>
          </div>

          <div
            className="
              p-8
              bg-[var(--color-primary-softer)]
              rounded-xl
              border
              border-white/15
              transition
              hover:border-[var(--color-accent)]
            "
          >
            <h3 className="text-xl font-semibold mb-2">
              Box Truck
            </h3>
            <p className="text-white/70 leading-relaxed">
              Local + regional dedicated opportunities.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}