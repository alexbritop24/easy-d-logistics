export default function ServicesOverview() {
  return (
    <section className="py-20 bg-[var(--color-primary-softer)] text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-10">Dispatch Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="p-6 bg-[var(--color-primary)] rounded-xl border border-[var(--color-accent)]">
            <h3 className="text-xl font-semibold">Dry Van</h3>
            <p className="text-gray-300 mt-2">Consistent loads, high demand lanes.</p>
          </div>

          <div className="p-6 bg-[var(--color-primary)] rounded-xl border border-[var(--color-accent)]">
            <h3 className="text-xl font-semibold">Flatbed</h3>
            <p className="text-gray-300 mt-2">Specialized freight with higher RPM.</p>
          </div>

          <div className="p-6 bg-[var(--color-primary)] rounded-xl border border-[var(--color-accent)]">
            <h3 className="text-xl font-semibold">Box Truck</h3>
            <p className="text-gray-300 mt-2">Local + regional dedicated opportunities.</p>
          </div>

        </div>

      </div>
    </section>
  );
}