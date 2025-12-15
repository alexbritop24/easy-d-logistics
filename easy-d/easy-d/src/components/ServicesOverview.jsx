export default function ServicesOverview() {
  return (
    <section
      className="py-20"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <h2
          className="text-3xl font-bold text-center mb-10"
          style={{ color: "var(--color-primary)" }}
        >
          Dispatch Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Card */}
          <div
            className="p-6 rounded-xl border"
            style={{
              backgroundColor: "var(--color-primary)",
              borderColor: "var(--color-secondary)",
              color: "var(--color-white)",
            }}
          >
            <h3 className="text-xl font-semibold">Dry Van</h3>
            <p
              className="mt-2"
              style={{ color: "var(--color-muted)" }}
            >
              Consistent loads, high demand lanes.
            </p>
          </div>

          {/* Card */}
          <div
            className="p-6 rounded-xl border"
            style={{
              backgroundColor: "var(--color-primary)",
              borderColor: "var(--color-secondary)",
              color: "var(--color-white)",
            }}
          >
            <h3 className="text-xl font-semibold">Flatbed</h3>
            <p
              className="mt-2"
              style={{ color: "var(--color-muted)" }}
            >
              Specialized freight with higher RPM.
            </p>
          </div>

          {/* Card */}
          <div
            className="p-6 rounded-xl border"
            style={{
              backgroundColor: "var(--color-primary)",
              borderColor: "var(--color-secondary)",
              color: "var(--color-white)",
            }}
          >
            <h3 className="text-xl font-semibold">Box Truck</h3>
            <p
              className="mt-2"
              style={{ color: "var(--color-muted)" }}
            >
              Local + regional dedicated opportunities.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}