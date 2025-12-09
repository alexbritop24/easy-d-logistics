export default function EarningsProjection() {
  return (
    <section className="py-20 bg-[var(--color-primary-softer)] text-white">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-3xl font-bold mb-6">Earnings Projection</h2>

        <p className="text-gray-300 mb-10">
          Example weekly revenue for a single truck:
        </p>

        <div className="p-6 bg-[var(--color-primary)] border border-[var(--color-accent)] rounded-xl max-w-md mx-auto">
          <h3 className="text-xl font-bold mb-4">Estimated Weekly Revenue</h3>
          <p className="text-4xl font-extrabold text-[var(--color-accent)]">
            $4,500 - $6,800+
          </p>
          <p className="text-gray-300 mt-4 text-sm">
            Estimates vary by equipment type, region, and availability.
          </p>
        </div>

      </div>
    </section>
  );
}