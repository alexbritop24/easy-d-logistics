export default function EarningsProjection() {
  return (
    <section
      className="py-20 text-[var(--color-primary)]"
      style={{ backgroundColor: "var(--color-light-gray)" }}
    >
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-3xl font-bold mb-6">
          Earnings Projection
        </h2>

        <p className="text-gray-600 mb-10">
          Example weekly revenue for a single truck:
        </p>

        <div
          className="p-8 rounded-xl max-w-md mx-auto shadow-lg"
          style={{
            backgroundColor: "var(--color-primary)",
            border: "1px solid var(--color-secondary)",
          }}
        >
          <h3 className="text-xl font-semibold mb-4 text-white">
            Estimated Weekly Revenue
          </h3>

          <p
            className="text-4xl font-extrabold"
            style={{ color: "var(--color-secondary)" }}
          >
            $4,500 – $6,800+
          </p>

          <p className="text-gray-300 mt-4 text-sm">
            Estimates vary by equipment type, region, and availability.
          </p>
        </div>

      </div>
    </section>
  );
}